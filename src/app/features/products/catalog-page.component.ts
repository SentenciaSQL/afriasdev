import { Component, effect, inject } from '@angular/core';
import { messages } from '../../core/data/messages';
import { products } from '../../core/data/products';
import { LocaleService } from '../../core/i18n/locale.service';
import { SeoService } from '../../core/seo/seo.service';
import { ProductShowcaseComponent } from '../../shared/components/product-showcase.component';

@Component({
  selector: 'app-catalog-page',
  imports: [ProductShowcaseComponent],
  template: `
    <section class="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <p class="text-xs font-medium uppercase tracking-[0.16em] text-action">{{ locale.t(messages.catalog.kicker) }}</p>
      <h1 class="mt-3 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">{{ locale.t(messages.catalog.title) }}</h1>
      <p class="mt-4 max-w-2xl text-lg text-muted">{{ locale.t(messages.catalog.lede) }}</p>
      <div class="mt-10">
        <app-product-showcase [products]="products" />
      </div>
    </section>
  `,
})
export class CatalogPageComponent {
  readonly locale = inject(LocaleService);
  readonly messages = messages;
  readonly products = products;
  private readonly seo = inject(SeoService);

  constructor() {
    effect(() => {
      this.locale.locale();
      this.seo.apply({
        title: this.locale.t(messages.meta.appsTitle),
        description: this.locale.t(messages.meta.appsDescription),
        path: '/apps',
      });
    });
  }
}
