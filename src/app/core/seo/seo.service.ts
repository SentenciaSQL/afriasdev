import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { brand } from '../config/brand';
import { environment } from '../../../environments/environment';
import { LocaleService } from '../i18n/locale.service';

export interface PageMeta {
  title: string;
  description: string;
  path: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly locale = inject(LocaleService);

  apply(page: PageMeta): void {
    const origin = environment.siteUrl.replace(/\/$/, '');
    const path = page.path.startsWith('/') ? page.path : `/${page.path}`;
    const url = `${origin}${path}`;
    const ogLocale = this.locale.locale() === 'es' ? 'es_DO' : 'en_US';

    this.title.setTitle(page.title);
    this.meta.updateTag({ name: 'description', content: page.description });
    this.meta.updateTag({ property: 'og:title', content: page.title });
    this.meta.updateTag({ property: 'og:description', content: page.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:site_name', content: brand.name });
    this.meta.updateTag({ property: 'og:locale', content: ogLocale });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: page.title });
    this.meta.updateTag({ name: 'twitter:description', content: page.description });

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }
}
