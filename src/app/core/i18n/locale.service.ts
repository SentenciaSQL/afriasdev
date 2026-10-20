import { Injectable, effect, signal } from '@angular/core';
import type { Copy, Locale } from '../models/content.model';

const storageKey = 'umbral-locale';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  readonly locale = signal<Locale>(this.read());

  constructor() {
    effect(() => {
      const locale = this.locale();
      document.documentElement.lang = locale;
      localStorage.setItem(storageKey, locale);
    });
  }

  set(locale: Locale): void {
    this.locale.set(locale);
  }

  t(copy: Copy): string {
    return copy[this.locale()];
  }

  private read(): Locale {
    const stored = localStorage.getItem(storageKey);
    if (stored === 'es' || stored === 'en') return stored;
    return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es';
  }
}
