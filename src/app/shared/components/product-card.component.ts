import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideArrowRight, LucideMonitor, LucidePlay, LucideSmartphone } from '@lucide/angular';
import { messages } from '../../core/data/messages';
import { LocaleService } from '../../core/i18n/locale.service';
import type { Product } from '../../core/models/content.model';
import { ActionLinkComponent } from './action-link.component';
import { ProductMockupComponent } from './product-mockup.component';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, ActionLinkComponent, ProductMockupComponent, LucidePlay, LucideArrowRight, LucideSmartphone, LucideMonitor],
  template: `
    <article
      class="product-card surface flex h-full flex-col overflow-hidden"
      [style.--accent]="product().accent"
    >
      <div class="border-b border-line bg-canvas/40 p-4 sm:p-5">
        <app-product-mockup [variant]="product().id" />
      </div>
      <div class="flex flex-1 flex-col p-5">
        <div class="flex flex-wrap items-center gap-2">
          <span class="badge badge-outline border-line text-muted">{{ locale.t(product().category) }}</span>
          <span class="badge border-transparent bg-white/5 text-ink">{{ locale.t(messages.status[product().status]) }}</span>
          @if (product().demo?.enabled) {
            <span class="badge border-transparent text-canvas" [style.background]="product().accent">Demo</span>
          }
          @if (product().video) {
            <span class="badge badge-outline border-line text-muted">Video</span>
          }
        </div>
        <h3 class="mt-4 text-2xl font-semibold tracking-tight">
          <a class="hover:text-action" [routerLink]="['/apps', product().slug]" translate="no">{{ product().name }}</a>
        </h3>
        <p class="mt-2 flex-1 text-sm leading-6 text-muted">{{ locale.t(product().shortDescription) }}</p>
        <ul class="mt-4 flex flex-wrap gap-2 text-xs text-muted">
          @for (platform of product().platforms; track platform) {
            <li class="inline-flex items-center gap-1 rounded-full border border-line px-2.5 py-1">
              @if (platform === 'mobile') {
                <svg lucideSmartphone [size]="14" />
              } @else {
                <svg lucideMonitor [size]="14" />
              }
              {{ locale.t(messages.platforms[platform]) }}
            </li>
          }
        </ul>
        <div class="mt-5 flex flex-wrap gap-2">
          <a class="btn btn-outline" [routerLink]="['/apps', product().slug]">
            {{ locale.t(messages.product.details) }}
            <svg lucideArrowRight [size]="16" />
          </a>
          @if (product().demo?.enabled && product().demo?.route) {
            <a class="btn btn-primary" [routerLink]="product().demo!.route">
              <svg lucidePlay [size]="15" />
              {{ locale.t(messages.product.openDemo) }}
            </a>
          }
          @if (showPrimary()) {
            <app-action-link
              className="btn btn-ghost border border-line"
              [url]="product().primaryAction!.url"
              [label]="locale.t(product().primaryAction!.label)"
              [external]="!!product().primaryAction!.external"
            />
          }
        </div>
      </div>
    </article>
  `,
})
export class ProductCardComponent {
  readonly locale = inject(LocaleService);
  readonly messages = messages;
  readonly product = input.required<Product>();

  showPrimary(): boolean {
    const action = this.product().primaryAction;
    if (!action?.url) return false;
    return action.url !== this.product().demo?.route;
  }
}
