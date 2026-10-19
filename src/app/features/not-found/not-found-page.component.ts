import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { messages } from '../../core/data/messages';
import { LocaleService } from '../../core/i18n/locale.service';
import { SeoService } from '../../core/seo/seo.service';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink],
  template: `
    <section class="mx-auto w-full max-w-3xl px-4 py-20 sm:px-6">
      <h1 class="text-4xl font-semibold tracking-tight">{{ locale.t(messages.notFound.title) }}</h1>
      <p class="mt-3 text-muted">{{ locale.t(messages.notFound.text) }}</p>
      <a routerLink="/" class="btn btn-primary mt-6">{{ locale.t(messages.notFound.cta) }}</a>
    </section>
  `,
})
export class NotFoundPageComponent {
  readonly locale = inject(LocaleService);
  readonly messages = messages;
  private readonly seo = inject(SeoService);

  constructor() {
    effect(() => {
      this.locale.locale();
      this.seo.apply({
        title: this.locale.t(messages.notFound.title),
        description: this.locale.t(messages.notFound.text),
        path: '/',
      });
    });
  }
}
