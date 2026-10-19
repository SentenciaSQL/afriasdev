import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { messages, serviceInquiry } from '../../core/data/messages';
import { services } from '../../core/data/services';
import { LocaleService } from '../../core/i18n/locale.service';
import { SeoService } from '../../core/seo/seo.service';

@Component({
  selector: 'app-services-page',
  imports: [RouterLink],
  template: `
    <section class="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <p class="text-xs font-medium uppercase tracking-[0.16em] text-action">{{ locale.t(messages.services.kicker) }}</p>
      <h1 class="mt-3 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">{{ locale.t(messages.services.title) }}</h1>
      <p class="mt-4 max-w-2xl text-lg text-muted">{{ locale.t(messages.services.lede) }}</p>

      <div class="mt-12 space-y-12">
        @for (service of services; track service.id) {
          <article [id]="service.id" class="scroll-mt-24 border-t border-line pt-8">
            <h2 class="text-3xl font-semibold tracking-tight">{{ locale.t(service.title) }}</h2>
            <p class="mt-3 max-w-2xl text-muted">{{ locale.t(service.summary) }}</p>
            <div class="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 class="text-sm font-medium uppercase tracking-[0.12em] text-muted">{{ locale.t(messages.services.problem) }}</h3>
                <p class="mt-2">{{ locale.t(service.problem) }}</p>
                <h3 class="mt-5 text-sm font-medium uppercase tracking-[0.12em] text-muted">{{ locale.t(messages.services.audience) }}</h3>
                <p class="mt-2">{{ locale.t(service.audience) }}</p>
              </div>
              <div>
                <h3 class="text-sm font-medium uppercase tracking-[0.12em] text-muted">{{ locale.t(messages.services.deliverables) }}</h3>
                <ul class="mt-2 space-y-2">
                  @for (item of service.deliverables; track item.es) {
                    <li class="border-t border-line pt-2">{{ locale.t(item) }}</li>
                  }
                </ul>
                <p class="mt-4 text-sm text-muted">
                  <span class="text-ink">{{ locale.t(messages.services.tools) }}:</span>
                  {{ service.tools.join(', ') }}
                </p>
              </div>
            </div>
            @if (service.packages.length) {
              <h3 class="mt-6 text-lg font-medium">{{ locale.t(messages.services.packages) }}</h3>
              <ul class="mt-3 grid gap-3 md:grid-cols-2">
                @for (pack of service.packages; track pack.id) {
                  <li class="surface p-4">
                    <strong>{{ locale.t(pack.name) }}</strong>
                    @if (pack.priceLabel) {
                      <p class="mt-1 tabular-nums">{{ locale.t(pack.priceLabel) }}</p>
                    }
                    <p class="mt-2 text-sm text-muted">{{ locale.t(pack.text) }}</p>
                  </li>
                }
              </ul>
            }
            <a class="btn btn-outline mt-6" [routerLink]="['/contact']" [queryParams]="{ interes: inquiry(service.id) }">
              {{ locale.t(messages.services.cta) }}
            </a>
          </article>
        }
      </div>

      <section class="mt-16">
        <p class="text-xs font-medium uppercase tracking-[0.16em] text-action">{{ locale.t(messages.services.processKicker) }}</p>
        <h2 class="mt-2 max-w-2xl text-balance text-3xl font-semibold tracking-tight">{{ locale.t(messages.services.processTitle) }}</h2>
        <p class="mt-3 max-w-2xl text-muted">{{ locale.t(messages.services.processIntro) }}</p>
        <ol class="mt-6 divide-y divide-line border-y border-line">
          @for (step of messages.process; track step.title.es; let index = $index) {
            <li class="grid gap-2 py-4 sm:grid-cols-[4rem_1fr]">
              <span class="tabular-nums text-action">{{ (index + 1).toString().padStart(2, '0') }}</span>
              <div>
                <h3 class="font-medium">{{ locale.t(step.title) }}</h3>
                <p class="text-muted">{{ locale.t(step.text) }}</p>
              </div>
            </li>
          }
        </ol>
      </section>
    </section>
  `,
})
export class ServicesPageComponent {
  readonly locale = inject(LocaleService);
  readonly messages = messages;
  readonly services = services;
  private readonly seo = inject(SeoService);

  constructor() {
    effect(() => {
      this.locale.locale();
      this.seo.apply({
        title: this.locale.t(messages.meta.servicesTitle),
        description: this.locale.t(messages.meta.servicesDescription),
        path: '/services',
      });
    });
  }

  inquiry(id: string): string {
    return serviceInquiry[id] ?? 'custom';
  }
}
