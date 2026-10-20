import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideArrowRight } from '@lucide/angular';
import { brand } from '../../core/config/brand';
import { messages } from '../../core/data/messages';
import { products } from '../../core/data/products';
import { services } from '../../core/data/services';
import { LocaleService } from '../../core/i18n/locale.service';
import { SeoService } from '../../core/seo/seo.service';
import { ProductMockupComponent } from '../../shared/components/product-mockup.component';
import { ProductShowcaseComponent } from '../../shared/components/product-showcase.component';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, LucideArrowRight, ProductMockupComponent, ProductShowcaseComponent],
  template: `
    <section class="relative overflow-hidden">
      <div class="atmosphere pointer-events-none absolute inset-0" aria-hidden="true"></div>
      <div class="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div class="rise">
          <p class="text-xs font-medium uppercase tracking-[0.16em] text-action">{{ locale.t(messages.home.kicker) }}</p>
          <h1 class="mt-4 max-w-xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            {{ locale.t(messages.home.title) }}
          </h1>
          <p class="mt-5 max-w-xl text-pretty text-lg text-muted">{{ locale.t(messages.home.subtitle) }}</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a routerLink="/apps" class="btn btn-primary">
              {{ locale.t(messages.home.primary) }}
              <svg lucideArrowRight [size]="16" />
            </a>
            <a routerLink="/demos" class="btn btn-outline">{{ locale.t(messages.home.secondary) }}</a>
          </div>
          <p class="mt-5 max-w-xl text-sm text-muted">{{ locale.t(messages.home.note) }}</p>
        </div>
        <div class="rise delay-2">
          <app-product-mockup variant="stage" />
        </div>
      </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6" id="aplicaciones">
      <div class="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p class="text-xs font-medium uppercase tracking-[0.16em] text-action">{{ locale.t(messages.home.catalogKicker) }}</p>
          <h2 class="mt-2 max-w-xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{{ locale.t(messages.home.catalogTitle) }}</h2>
        </div>
        <p class="max-w-md text-sm text-muted">{{ locale.t(messages.home.catalogText) }}</p>
      </div>
      <app-product-showcase [products]="products" />
    </section>

    <section class="border-y border-line bg-surface/40">
      <div class="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p class="text-xs font-medium uppercase tracking-[0.16em] text-action">{{ locale.t(messages.home.demoKicker) }}</p>
          <h2 class="mt-2 text-balance text-3xl font-semibold tracking-tight">{{ locale.t(messages.home.demoTitle) }}</h2>
          <p class="mt-3 text-muted">{{ locale.t(messages.home.demoText) }}</p>
          <a routerLink="/demos" class="btn btn-primary mt-6">{{ locale.t(messages.home.secondary) }}</a>
        </div>
        <ul class="divide-y divide-line">
          @for (product of demos; track product.id) {
            <li>
              <a class="flex items-center justify-between gap-4 py-4 hover:text-action" [routerLink]="product.demo?.route">
                <span class="min-w-0">
                  <strong class="block" translate="no">{{ product.name }}</strong>
                  <span class="text-sm text-muted">{{ locale.t(product.shortDescription) }}</span>
                </span>
                <svg lucideArrowRight [size]="18" />
              </a>
            </li>
          }
        </ul>
      </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6" id="servicios">
      <div class="mb-8 max-w-2xl">
        <p class="text-xs font-medium uppercase tracking-[0.16em] text-action">{{ locale.t(messages.home.servicesKicker) }}</p>
        <h2 class="mt-2 text-balance text-3xl font-semibold tracking-tight">{{ locale.t(messages.home.servicesTitle) }}</h2>
        <p class="mt-3 text-muted">{{ locale.t(messages.home.servicesText) }}</p>
      </div>
      <div class="divide-y divide-line border-y border-line">
        @for (service of services; track service.id) {
          <a class="grid gap-2 py-5 hover:bg-white/[0.03] sm:grid-cols-[1fr_1.4fr] sm:items-baseline" [routerLink]="['/services']" [fragment]="service.id">
            <strong class="text-lg tracking-tight">{{ locale.t(service.title) }}</strong>
            <span class="text-muted">{{ locale.t(service.summary) }}</span>
          </a>
        }
      </div>
      <a routerLink="/services" class="btn btn-outline mt-6">{{ locale.t(messages.home.servicesCta) }}</a>
    </section>

    <section class="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
      <div class="surface px-6 py-10 sm:px-10">
        <h2 class="max-w-2xl text-balance text-3xl font-semibold tracking-tight">{{ locale.t(messages.home.finalTitle) }}</h2>
        <p class="mt-3 max-w-2xl text-muted">{{ locale.t(messages.home.finalText) }}</p>
        <a routerLink="/contact" class="btn btn-primary mt-6">{{ locale.t(messages.home.finalCta) }}</a>
        <p class="mt-6 text-xs text-muted" translate="no">{{ brand.name }}</p>
      </div>
    </section>
  `,
})
export class HomePageComponent {
  readonly locale = inject(LocaleService);
  readonly messages = messages;
  readonly products = products;
  readonly services = services;
  readonly brand = brand;
  readonly demos = products.filter((product) => product.demo?.enabled);
  private readonly seo = inject(SeoService);

  constructor() {
    effect(() => {
      this.locale.locale();
      this.seo.apply({
        title: this.locale.t(messages.meta.homeTitle),
        description: this.locale.t(messages.meta.homeDescription),
        path: '/',
      });
    });
  }
}
