import { Component, inject, input } from '@angular/core';
import { messages } from '../../core/data/messages';
import { LocaleService } from '../../core/i18n/locale.service';
import type { ProductFeature } from '../../core/models/content.model';

@Component({
  selector: 'app-product-feature-list',
  template: `
    <section [attr.aria-labelledby]="'features-' + headingId">
      <h2 [id]="'features-' + headingId" class="text-balance text-3xl font-semibold tracking-tight">
        {{ locale.t(messages.product.features) }}
      </h2>
      <ol class="mt-6 divide-y divide-line border-y border-line">
        @for (feature of features(); track feature.title.es; let index = $index) {
          <li class="grid gap-3 py-5 sm:grid-cols-[4rem_1fr]">
            <span class="text-sm tabular-nums text-action">{{ (index + 1).toString().padStart(2, '0') }}</span>
            <div class="min-w-0">
              <h3 class="text-lg font-medium tracking-tight">{{ locale.t(feature.title) }}</h3>
              <p class="mt-1 max-w-2xl text-muted">{{ locale.t(feature.text) }}</p>
            </div>
          </li>
        }
      </ol>
    </section>
  `,
})
export class ProductFeatureListComponent {
  readonly locale = inject(LocaleService);
  readonly messages = messages;
  readonly features = input.required<ProductFeature[]>();
  readonly headingId = Math.random().toString(36).slice(2, 8);
}
