import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideArrowUpRight } from '@lucide/angular';
import { messages } from '../../core/data/messages';
import { LocaleService } from '../../core/i18n/locale.service';
import { splitLink } from '../link';

@Component({
  selector: 'app-action-link',
  imports: [RouterLink, LucideArrowUpRight],
  host: { class: 'contents' },
  template: `
    @if (external()) {
      <a [class]="className()" [href]="url()" target="_blank" rel="noopener noreferrer">
        {{ label() }}
        <svg lucideArrowUpRight [size]="16" />
        <span class="sr-only">{{ locale.t(messages.nav.newTab) }}</span>
      </a>
    } @else {
      <a [class]="className()" [routerLink]="parts().path" [queryParams]="parts().query">
        {{ label() }}
      </a>
    }
  `,
})
export class ActionLinkComponent {
  readonly locale = inject(LocaleService);
  readonly messages = messages;
  readonly url = input.required<string>();
  readonly label = input.required<string>();
  readonly external = input(false);
  readonly className = input('btn btn-primary');
  readonly parts = computed(() => splitLink(this.url()));
}
