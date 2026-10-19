import { Component, computed, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { messages } from '../../core/data/messages';
import { getProduct } from '../../core/data/products';
import { brand } from '../../core/config/brand';
import { LocaleService } from '../../core/i18n/locale.service';
import { SeoService } from '../../core/seo/seo.service';
import { ProductDetailsComponent } from '../../shared/components/product-details.component';

@Component({
  selector: 'app-product-page',
  imports: [ProductDetailsComponent, RouterLink],
  template: `
    @if (product(); as item) {
      <app-product-details [product]="item" />
    } @else {
      <section class="mx-auto w-full max-w-3xl px-4 py-20 sm:px-6">
        <h1 class="text-4xl font-semibold tracking-tight">{{ locale.t(messages.notFound.title) }}</h1>
        <p class="mt-3 text-muted">{{ locale.t(messages.notFound.text) }}</p>
        <a routerLink="/" class="btn btn-primary mt-6">{{ locale.t(messages.notFound.cta) }}</a>
      </section>
    }
  `,
})
export class ProductPageComponent {
  readonly locale = inject(LocaleService);
  readonly messages = messages;
  readonly slug = input('');
  readonly product = computed(() => getProduct(this.slug()));
  private readonly seo = inject(SeoService);

  constructor() {
    effect(() => {
      const item = this.product();
      const locale = this.locale.locale();
      if (!item) {
        this.seo.apply({
          title: this.locale.t(messages.notFound.title),
          description: this.locale.t(messages.notFound.text),
          path: '/apps',
        });
        return;
      }
      this.seo.apply({
        title: `${item.name} — ${brand.name}`,
        description: item.shortDescription[locale],
        path: `/apps/${item.slug}`,
      });
    });
  }
}
