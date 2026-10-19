import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { brand } from '../../core/config/brand';
import { messages } from '../../core/data/messages';
import { services } from '../../core/data/services';
import { environment } from '../../../environments/environment';
import { LocaleService } from '../../core/i18n/locale.service';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink],
  template: `
    <footer class="mt-8 border-t border-line">
      <div class="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_0.8fr_1fr]">
        <div>
          <p class="text-xl font-semibold tracking-tight" translate="no">{{ brand.name }}</p>
          <p class="mt-3 max-w-sm text-sm text-muted">{{ locale.t(messages.footer.provisional) }}</p>
          <p class="mt-3 max-w-sm text-sm text-muted">{{ locale.t(messages.footer.independent) }}</p>
          <a class="mt-4 inline-flex text-sm text-action underline-offset-4 hover:underline" [href]="brand.portfolioUrl" target="_blank" rel="noopener noreferrer">
            {{ locale.t(messages.footer.portfolio) }}
            <span class="sr-only">{{ locale.t(messages.nav.newTab) }}</span>
          </a>
        </div>
        <div>
          <p class="text-sm font-medium text-ink">{{ locale.t(messages.footer.explore) }}</p>
          <ul class="mt-3 space-y-2 text-sm text-muted">
            <li><a class="hover:text-ink" routerLink="/apps">{{ locale.t(messages.nav.apps) }}</a></li>
            <li><a class="hover:text-ink" routerLink="/demos">{{ locale.t(messages.nav.demos) }}</a></li>
            <li><a class="hover:text-ink" routerLink="/services">{{ locale.t(messages.nav.services) }}</a></li>
            <li><a class="hover:text-ink" routerLink="/contact">{{ locale.t(messages.nav.contact) }}</a></li>
            <li><a class="hover:text-ink" routerLink="/privacy">{{ locale.t(messages.nav.privacy) }}</a></li>
          </ul>
        </div>
        <div>
          <p class="text-sm font-medium text-ink">{{ locale.t(messages.footer.services) }}</p>
          <ul class="mt-3 space-y-2 text-sm text-muted">
            @for (service of services; track service.id) {
              <li>
                <a class="hover:text-ink" [routerLink]="['/services']" [fragment]="service.id">{{ locale.t(service.title) }}</a>
              </li>
            }
          </ul>
          <p class="mt-6 text-sm font-medium text-ink">{{ locale.t(messages.footer.contact) }}</p>
          <a class="mt-2 inline-flex text-sm text-action underline-offset-4 hover:underline" [href]="'mailto:' + email">{{ email }}</a>
        </div>
      </div>
    </footer>
  `,
})
export class SiteFooterComponent {
  readonly locale = inject(LocaleService);
  readonly messages = messages;
  readonly brand = brand;
  readonly services = services;
  readonly email = environment.contactEmail;
}
