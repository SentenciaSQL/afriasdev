import { Component, computed, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { brand } from '../../core/config/brand';
import { messages } from '../../core/data/messages';
import { getProduct } from '../../core/data/products';
import { LocaleService } from '../../core/i18n/locale.service';
import { SeoService } from '../../core/seo/seo.service';
import { BloodconnectTourComponent } from './bloodconnect-tour.component';
import { FintrackDemoComponent } from './fintrack-demo.component';
import { LunavetaDemoComponent } from './lunaveta-demo.component';

@Component({
  selector: 'app-demo-page',
  imports: [RouterLink, FintrackDemoComponent, LunavetaDemoComponent, BloodconnectTourComponent],
  template: `
    <section class="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      @if (product(); as item) {
        @if (item.demo?.enabled && item.demo?.type === 'internal') {
          <a class="text-sm text-muted hover:text-ink" [routerLink]="['/apps', item.slug]">← {{ locale.t(messages.demos.back) }}</a>
          <h1 class="mt-4 text-4xl font-semibold tracking-tight" translate="no">{{ item.name }}</h1>
          <p class="mt-3 max-w-2xl text-muted">{{ locale.t(item.shortDescription) }}</p>
          <div class="mt-8">
            @switch (item.id) {
              @case ('fintrack') { <app-fintrack-demo /> }
              @case ('lunaveta') { <app-lunaveta-demo /> }
              @case ('bloodconnectrd') { <app-bloodconnect-tour /> }
            }
          </div>
        } @else {
          <h1 class="text-4xl font-semibold tracking-tight">{{ locale.t(messages.demos.unavailableTitle) }}</h1>
          <p class="mt-3 max-w-xl text-muted">{{ locale.t(messages.demos.empty) }}</p>
          <a class="btn btn-outline mt-6" [routerLink]="['/apps', item.slug]">{{ locale.t(messages.product.details) }}</a>
        }
      } @else {
        <h1 class="text-4xl font-semibold tracking-tight">{{ locale.t(messages.notFound.title) }}</h1>
        <p class="mt-3 text-muted">{{ locale.t(messages.notFound.text) }}</p>
        <a routerLink="/demos" class="btn btn-primary mt-6">{{ locale.t(messages.nav.demos) }}</a>
      }
    </section>
  `,
})
export class DemoPageComponent {
  readonly locale = inject(LocaleService);
  readonly messages = messages;
  readonly slug = input('');
  readonly product = computed(() => getProduct(this.slug()));
  private readonly seo = inject(SeoService);

  constructor() {
    effect(() => {
      const item = this.product();
      const locale = this.locale.locale();
      this.seo.apply({
        title: item ? `${item.name} demo — ${brand.name}` : this.locale.t(messages.notFound.title),
        description: item ? item.shortDescription[locale] : this.locale.t(messages.notFound.text),
        path: item ? `/demos/${item.slug}` : '/demos',
      });
    });
  }
}
