import { Component, inject, input } from '@angular/core';
import { messages } from '../../core/data/messages';
import { relatedProducts } from '../../core/data/products';
import { LocaleService } from '../../core/i18n/locale.service';
import type { Product } from '../../core/models/content.model';
import { ActionLinkComponent } from './action-link.component';
import { ProductDemoComponent } from './product-demo.component';
import { ProductFeatureListComponent } from './product-feature-list.component';
import { ProductMediaGalleryComponent } from './product-media-gallery.component';
import { ProductMockupComponent } from './product-mockup.component';
import { ProductShowcaseComponent } from './product-showcase.component';
import { ProductVideoPlayerComponent } from './product-video-player.component';

@Component({
  selector: 'app-product-details',
  imports: [
    ActionLinkComponent,
    ProductMockupComponent,
    ProductFeatureListComponent,
    ProductMediaGalleryComponent,
    ProductVideoPlayerComponent,
    ProductDemoComponent,
    ProductShowcaseComponent,
  ],
  template: `
    <article class="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <header class="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div class="flex flex-wrap gap-2">
            <span class="badge badge-outline border-line text-muted">{{ locale.t(product().category) }}</span>
            <span class="badge border-transparent bg-white/5">{{ locale.t(messages.status[product().status]) }}</span>
          </div>
          <h1 class="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl" translate="no">{{ product().name }}</h1>
          <p class="mt-4 max-w-xl text-lg text-muted">{{ locale.t(product().description) }}</p>
          <div class="mt-6 flex flex-wrap gap-2">
            @if (product().primaryAction; as action) {
              <app-action-link [url]="action.url" [label]="locale.t(action.label)" [external]="!!action.external" className="btn btn-primary" />
            }
            @if (product().secondaryAction; as action) {
              <app-action-link [url]="action.url" [label]="locale.t(action.label)" [external]="!!action.external" className="btn btn-outline" />
            }
          </div>
          @if (!product().video && !product().screenshots?.length) {
            <p class="mt-4 max-w-xl text-sm text-muted">{{ locale.t(messages.product.mediaLater) }}</p>
          }
        </div>
        <app-product-mockup [variant]="product().id" />
      </header>

      <div class="mt-16 grid gap-6 md:grid-cols-2">
        <section class="surface p-5">
          <h2 class="text-lg font-medium">{{ locale.t(messages.product.problem) }}</h2>
          <p class="mt-2 text-muted">{{ locale.t(product().problem) }}</p>
        </section>
        <section class="surface p-5">
          <h2 class="text-lg font-medium">{{ locale.t(messages.product.value) }}</h2>
          <p class="mt-2 text-muted">{{ locale.t(product().value) }}</p>
        </section>
      </div>

      <div class="mt-14">
        <app-product-feature-list [features]="product().features" />
      </div>

      @if (product().architecture; as architecture) {
        <section class="mt-14">
          <h2 class="text-3xl font-semibold tracking-tight">{{ locale.t(architecture.title) }}</h2>
          <p class="mt-3 max-w-2xl text-muted">{{ locale.t(architecture.intro) }}</p>
          <ul class="mt-5 space-y-3">
            @for (point of architecture.points; track point.es) {
              <li class="border-t border-line pt-3">{{ locale.t(point) }}</li>
            }
          </ul>
        </section>
      }

      @if (product().pricing; as pricing) {
        <section class="mt-14" aria-labelledby="pricing">
          <h2 id="pricing" class="text-3xl font-semibold tracking-tight">{{ locale.t(messages.product.pricing) }}</h2>
          <p class="mt-3 max-w-2xl text-sm text-muted">{{ locale.t(pricing.note) }}</p>
          <div class="mt-6 grid gap-4 lg:grid-cols-3">
            @for (plan of pricing.plans; track plan.name) {
              <article class="surface p-5">
                <h3 class="text-lg font-medium" translate="no">{{ plan.name }}</h3>
                <p class="mt-2 text-3xl font-semibold tabular-nums tracking-tight">{{ locale.t(plan.price) }}</p>
                <p class="text-sm text-muted">{{ locale.t(plan.cadence) }}</p>
                <p class="mt-3 text-sm">{{ locale.t(plan.detail) }}</p>
                <ul class="mt-4 list-disc space-y-1 pl-4 text-sm text-muted">
                  @for (item of plan.items; track item.es) {
                    <li>{{ locale.t(item) }}</li>
                  }
                </ul>
              </article>
            }
          </div>
          <a class="btn btn-outline mt-5" [href]="pricing.sourceUrl" target="_blank" rel="noopener noreferrer">
            {{ locale.t(pricing.sourceLabel) }}
            <span class="sr-only">{{ locale.t(messages.nav.newTab) }}</span>
          </a>
        </section>
      }

      <section class="mt-14">
        <h2 class="text-3xl font-semibold tracking-tight">{{ locale.t(messages.product.platforms) }}</h2>
        <ul class="mt-4 space-y-2 text-muted">
          @for (note of product().platformNotes; track note.es) {
            <li class="border-t border-line pt-2">{{ locale.t(note) }}</li>
          }
        </ul>
        @if (product().stack?.length) {
          <p class="mt-4 text-sm text-muted">
            <span class="text-ink">{{ locale.t(messages.product.stack) }}:</span>
            {{ product().stack?.join(', ') }}
          </p>
        }
      </section>

      @if (product().screenshots?.length) {
        <div class="mt-14">
          @defer (on viewport) {
            <app-product-media-gallery [images]="product().screenshots!" [productName]="product().slug" />
          } @placeholder {
            <div class="surface h-48"></div>
          }
        </div>
      }

      @if (product().demo?.enabled) {
        <div class="mt-14">
          @defer (on viewport) {
            <app-product-demo [product]="product()" />
          } @placeholder {
            <div class="surface h-48"></div>
          }
        </div>
      }

      @if (product().video; as video) {
        <div class="mt-14">
          @defer (on viewport) {
            <app-product-video-player [video]="video" />
          } @placeholder {
            <div class="surface h-48"></div>
          }
        </div>
      }

      @if (product().faqs?.length) {
        <section class="mt-14">
          <h2 class="text-3xl font-semibold tracking-tight">{{ locale.t(messages.product.faq) }}</h2>
          <div class="mt-4 divide-y divide-line border-y border-line">
            @for (faq of product().faqs; track faq.q.es) {
              <details class="group py-3">
                <summary class="cursor-pointer py-2 font-medium">{{ locale.t(faq.q) }}</summary>
                <p class="max-w-2xl pb-2 text-muted">{{ locale.t(faq.a) }}</p>
              </details>
            }
          </div>
        </section>
      }

      <section class="mt-16">
        <h2 class="mb-6 text-3xl font-semibold tracking-tight">{{ locale.t(messages.product.related) }}</h2>
        <app-product-showcase [products]="related()" />
      </section>
    </article>
  `,
})
export class ProductDetailsComponent {
  readonly locale = inject(LocaleService);
  readonly messages = messages;
  readonly product = input.required<Product>();
  related() {
    return relatedProducts(this.product().slug);
  }
}
