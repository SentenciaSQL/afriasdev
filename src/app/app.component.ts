import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { messages } from './core/data/messages';
import { LocaleService } from './core/i18n/locale.service';
import { SiteFooterComponent } from './shared/components/site-footer.component';
import { SiteHeaderComponent } from './shared/components/site-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent],
  template: `
    <a class="skip" href="#contenido">{{ locale.t(messages.skip) }}</a>
    <app-site-header />
    <main id="contenido" tabindex="-1">
      <router-outlet />
    </main>
    <app-site-footer />
  `,
})
export class AppComponent {
  constructor(readonly locale: LocaleService) {}
  readonly messages = messages;
}
