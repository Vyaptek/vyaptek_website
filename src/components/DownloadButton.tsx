import React from 'react';
import { Download, Loader2 } from 'lucide-react';
import { useLatestRelease } from '../hooks/useLatestRelease';
import './DownloadButton.css';

interface DownloadButtonProps {
    className?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ className = 'btn btn-secondary' }) => {
    const { version, downloadUrl, isLoading } = useLatestRelease();

    return (
        <a href={downloadUrl} className={`download-btn ${className}`} rel="noopener">
            {isLoading ? <Loader2 size={20} className="download-btn-spin" /> : <Download size={20} />}
            <span>Download for Windows{version ? ` (${version})` : ''}</span>
        </a>
    );
};

export default DownloadButton;
