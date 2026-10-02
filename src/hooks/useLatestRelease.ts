import { useEffect, useState } from 'react';

const REPO = 'Vyaptek/hms_installer';
const RELEASES_API_URL = `https://api.github.com/repos/${REPO}/releases/latest`;
const RELEASES_PAGE_URL = `https://github.com/${REPO}/releases/latest`;
const CACHE_KEY = 'hms-latest-release';
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes

interface GithubReleaseAsset {
  name: string;
  browser_download_url: string;
}

interface GithubRelease {
  tag_name: string;
  assets: GithubReleaseAsset[];
}

interface LatestRelease {
  version: string | null;
  downloadUrl: string;
}

type CachedRelease = LatestRelease & { cachedAt: number };

function readCache(): LatestRelease | null {
  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as CachedRelease;
    if (Date.now() - parsed.cachedAt > CACHE_TTL_MS) return null;

    return { version: parsed.version, downloadUrl: parsed.downloadUrl };
  } catch {
    return null;
  }
}

function writeCache(release: LatestRelease): void {
  try {
    const payload: CachedRelease = { ...release, cachedAt: Date.now() };
    window.localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
  } catch {
    // Private browsing / quota errors are fine to ignore - caching is just an optimization.
  }
}

/**
 * Resolves the Windows installer URL for the latest HMS release by querying
 * the GitHub Releases API, so the website never needs a manual version bump.
 * Falls back to the GitHub releases page if the API call fails.
 */
export function useLatestRelease() {
  const [release, setRelease] = useState<LatestRelease>({
    version: null,
    downloadUrl: RELEASES_PAGE_URL,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cached = readCache();
    if (cached) {
      setRelease(cached);
      setIsLoading(false);
      return;
    }

    let isMounted = true;

    (async () => {
      try {
        const response = await fetch(RELEASES_API_URL, {
          headers: { Accept: 'application/vnd.github+json' },
        });
        if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);

        const data = (await response.json()) as GithubRelease;
        const exeAsset =
          data.assets?.find((asset) => asset.name.toLowerCase().endsWith('.exe')) ??
          data.assets?.[0];

        const resolved: LatestRelease = {
          version: data.tag_name ?? null,
          downloadUrl: exeAsset?.browser_download_url ?? RELEASES_PAGE_URL,
        };

        if (isMounted) setRelease(resolved);
        writeCache(resolved);
      } catch {
        // Keep the releases-page fallback so the button still works offline/rate-limited.
      } finally {
        if (isMounted) setIsLoading(false);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  return { ...release, isLoading };
}
