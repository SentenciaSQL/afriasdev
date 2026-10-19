import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideArrowRight } from '@lucide/angular';
import { messages } from '../../core/data/messages';
import { productsWithDemo } from '../../core/data/products';
import { LocaleService } from '../../core/i18n/locale.service';
import { SeoService } from '../../core/seo/seo.service';

@Component({
  selector: 'app-demos-page',
  imports: [RouterLink, LucideArrowRight],
  template: `
    <section class="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <p class="text-xs font-medium uppercase tracking-[0.16em] text-action">{{ locale.t(messages.demos.kicker) }}</p>
      <h1 class="mt-3 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">{{ locale.t(messages.demos.title) }}</h1>
      <p class="mt-4 max-w-2xl text-lg text-muted">{{ locale.t(messages.demos.lede) }}</p>
      <ul class="mt-10 divide-y divide-line border-y border-line">
        @for (product of products; track product.id) {
          <li>
            <a class="grid gap-2 py-5 sm:grid-cols-[14rem_1fr_auto] sm:items-center" [routerLink]="product.demo?.route">
              <strong class="text-xl tracking-tight" translate="no">{{ product.name }}</strong>
              <span class="text-muted">{{ locale.t(product.shortDescription) }}</span>
              <span class="inline-flex items-center gap-2 text-sm text-action">
                {{ locale.t(messages.product.openDemo) }}
                <svg lucideArrowRight [size]="16" />
              </span>
            </a>
          </li>
        }
      </ul>
    </section>
  `,
})
export class DemosPageComponent {
  readonly locale = inject(LocaleService);
  readonly messages = messages;
  readonly products = productsWithDemo();
  private readonly seo = inject(SeoService);

  constructor() {
    effect(() => {
      this.locale.locale();
      this.seo.apply({
        title: this.locale.t(messages.meta.demosTitle),
        description: this.locale.t(messages.meta.demosDescription),
        path: '/demos',
      });
    });
  }
}
