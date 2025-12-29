import { ReactNode } from 'react';

export interface NavItem {
    label: string;
    href: string;
}

export interface FeatureItem {
    icon: ReactNode;
    title: string;
    desc: string;
}

export interface HeroConfig {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    image?: string;
}

export interface ProductConfig {
    id: string;
    name: string;
    slug: string;
    hero: HeroConfig;
    features: FeatureItem[];
    modules: FeatureItem[];
}
