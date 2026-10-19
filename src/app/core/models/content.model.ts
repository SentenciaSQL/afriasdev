export type Locale = 'es' | 'en';

export type Copy = Record<Locale, string>;

export type ProductPlatform = 'web' | 'mobile' | 'desktop';

export type ProductStatus = 'available' | 'coming-soon' | 'in-development';

export interface ProductMedia {
  src: string;
  alt: Copy;
  caption?: Copy;
  width: number;
  height: number;
}

export interface ProductVideo {
  type: 'local' | 'external';
  url: string;
  poster?: string;
  aspectRatio?: '16:9' | '9:16' | '1:1';
  title: Copy;
}

export interface ProductDemo {
  type: 'internal' | 'iframe' | 'external';
  url?: string;
  route?: string;
  enabled: boolean;
}

export interface ProductAction {
  label: Copy;
  url: string;
  external?: boolean;
}

export interface ProductFeature {
  title: Copy;
  text: Copy;
}

export interface ProductFaq {
  q: Copy;
  a: Copy;
}

export interface PricePlan {
  name: string;
  price: Copy;
  cadence: Copy;
  detail: Copy;
  items: Copy[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: Copy;
  description: Copy;
  problem: Copy;
  value: Copy;
  category: Copy;
  platforms: ProductPlatform[];
  platformNotes: Copy[];
  accent: string;
  logo?: string;
  coverImage?: string;
  screenshots?: ProductMedia[];
  video?: ProductVideo;
  demo?: ProductDemo;
  features: ProductFeature[];
  architecture?: {
    title: Copy;
    intro: Copy;
    points: Copy[];
  };
  pricing?: {
    sourceLabel: Copy;
    sourceUrl: string;
    note: Copy;
    plans: PricePlan[];
  };
  faqs?: ProductFaq[];
  stack?: string[];
  primaryAction?: ProductAction;
  secondaryAction?: ProductAction;
  status: ProductStatus;
}

export interface ServicePackage {
  id: string;
  name: Copy;
  text: Copy;
  includes: Copy[];
  priceLabel?: Copy;
}

export interface Service {
  id: string;
  title: Copy;
  summary: Copy;
  problem: Copy;
  audience: Copy;
  deliverables: Copy[];
  tools: string[];
  packages: ServicePackage[];
}
