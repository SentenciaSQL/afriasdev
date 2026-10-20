import { Component, effect, inject } from '@angular/core';
import { messages } from '../../core/data/messages';
import { LocaleService } from '../../core/i18n/locale.service';
import { SeoService } from '../../core/seo/seo.service';

@Component({
  selector: 'app-privacy-page',
  template: `
    <section class="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6">
      <p class="text-xs font-medium uppercase tracking-[0.16em] text-action">{{ locale.t(messages.privacy.kicker) }}</p>
      <h1 class="mt-3 text-balance text-4xl font-semibold tracking-tight">{{ locale.t(messages.privacy.title) }}</h1>
      <div class="mt-8 space-y-4 text-muted">
        @for (paragraph of messages.privacy.paragraphs; track paragraph.es) {
          <p>{{ locale.t(paragraph) }}</p>
        }
      </div>
    </section>
  `,
})
export class PrivacyPageComponent {
  readonly locale = inject(LocaleService);
  readonly messages = messages;
  private readonly seo = inject(SeoService);

  constructor() {
    effect(() => {
      this.locale.locale();
      this.seo.apply({
        title: this.locale.t(messages.meta.privacyTitle),
        description: this.locale.t(messages.meta.privacyDescription),
        path: '/privacy',
      });
    });
  }
}
