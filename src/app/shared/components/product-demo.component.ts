import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { messages } from '../../core/data/messages';
import { LocaleService } from '../../core/i18n/locale.service';
import type { Product } from '../../core/models/content.model';
import { BloodconnectTourComponent } from '../../features/demos/bloodconnect-tour.component';
import { FintrackDemoComponent } from '../../features/demos/fintrack-demo.component';
import { LunavetaDemoComponent } from '../../features/demos/lunaveta-demo.component';

@Component({
  selector: 'app-product-demo',
  imports: [RouterLink, FintrackDemoComponent, LunavetaDemoComponent, BloodconnectTourComponent],
  template: `
    <section [attr.aria-labelledby]="'demo-' + product().id">
      <div class="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 [id]="'demo-' + product().id" class="text-3xl font-semibold tracking-tight">{{ locale.t(messages.product.demo) }}</h2>
          <p class="mt-2 max-w-2xl text-sm text-muted">{{ locale.t(messages.product.demoNote) }}</p>
        </div>
        @if (product().demo?.route) {
          <a class="btn btn-outline" [routerLink]="product().demo?.route">{{ locale.t(messages.product.openDemo) }}</a>
        }
      </div>
      @switch (product().id) {
        @case ('fintrack') {
          @defer (on viewport) {
            <app-fintrack-demo />
          } @placeholder {
            <div class="surface h-40 animate-pulse"></div>
          }
        }
        @case ('lunaveta') {
          @defer (on viewport) {
            <app-lunaveta-demo />
          } @placeholder {
            <div class="surface h-40 animate-pulse"></div>
          }
        }
        @case ('bloodconnectrd') {
          @defer (on viewport) {
            <app-bloodconnect-tour />
          } @placeholder {
            <div class="surface h-40 animate-pulse"></div>
          }
        }
        @default {
          @if (frame(); as src) {
            <iframe
              class="aspect-video w-full rounded-2xl border border-line bg-canvas"
              [src]="src"
              [title]="product().name + ' demo'"
              loading="lazy"
              referrerpolicy="no-referrer"
              sandbox="allow-scripts allow-forms"
            ></iframe>
          } @else if (product().demo?.type === 'external' && product().demo?.url) {
            <a class="btn btn-primary" [href]="product().demo?.url" target="_blank" rel="noopener noreferrer">
              {{ locale.t(messages.product.openDemo) }}
              <span class="sr-only">{{ locale.t(messages.nav.newTab) }}</span>
            </a>
          }
        }
      }
    </section>
  `,
})
export class ProductDemoComponent {
  readonly locale = inject(LocaleService);
  readonly messages = messages;
  readonly product = input.required<Product>();
  private readonly sanitizer = inject(DomSanitizer);
  readonly frame = computed(() => {
    const demo = this.product().demo;
    if (!demo?.enabled || demo.type !== 'iframe' || !demo.url?.startsWith('https://')) return null;
    return this.sanitizer.bypassSecurityTrustResourceUrl(demo.url);
  });
}
