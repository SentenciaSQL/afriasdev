import { Component, ElementRef, HostListener, inject, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { LucideArrowRight, LucideMenu, LucideX } from '@lucide/angular';
import { brand } from '../../core/config/brand';
import { messages } from '../../core/data/messages';
import { LocaleService } from '../../core/i18n/locale.service';
import type { Locale } from '../../core/models/content.model';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive, LucideMenu, LucideX, LucideArrowRight],
  template: `
    <header class="site-header sticky top-0 z-40 border-b border-line/80 bg-canvas/80 backdrop-blur-xl">
      <div class="mx-auto flex h-16 w-full max-w-6xl items-center gap-3 px-4 sm:px-6">
        <a routerLink="/" class="flex min-w-0 items-center gap-2.5 font-semibold tracking-tight text-ink" translate="no">
          <svg class="size-8 shrink-0" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="9" fill="#111827" stroke="#273449" />
            <path d="M8 23V13.2C8 9.2 11.2 7 16 7s8 2.2 8 6.2V23" fill="none" stroke="#3B82F6" stroke-width="2.2" stroke-linecap="round" />
            <path d="M12.2 23v-8c0-2.1 1.6-3.4 3.8-3.4s3.8 1.3 3.8 3.4V23" fill="none" stroke="#8B5CF6" stroke-width="2.2" stroke-linecap="round" />
          </svg>
          <span class="truncate">{{ brand.name }}</span>
        </a>

        <nav class="ml-6 hidden items-center gap-1 lg:flex" [attr.aria-label]="locale.t(messages.nav.main)">
          @for (item of links; track item.path) {
            <a
              class="rounded-full px-3 py-2 text-sm text-muted transition-colors duration-200 hover:text-ink"
              [routerLink]="item.path"
              routerLinkActive="bg-white/5 text-ink"
              [routerLinkActiveOptions]="{ exact: item.exact }"
            >
              {{ locale.t(item.label) }}
            </a>
          }
        </nav>

        <div class="ml-auto flex items-center gap-2">
          <div class="flex rounded-full border border-line p-0.5" role="group" [attr.aria-label]="locale.t(messages.nav.language)">
            @for (code of languages; track code) {
              <button
                type="button"
                class="min-h-11 min-w-11 rounded-full px-2 text-xs font-semibold tracking-wide"
                [class.bg-ink]="locale.locale() === code"
                [class.text-canvas]="locale.locale() === code"
                [class.text-muted]="locale.locale() !== code"
                [attr.aria-pressed]="locale.locale() === code"
                (click)="locale.set(code)"
              >
                {{ code === 'es' ? 'ES' : 'EN' }}
              </button>
            }
          </div>
          <a routerLink="/apps" class="btn btn-primary hidden sm:inline-flex">
            {{ locale.t(messages.nav.primary) }}
            <svg lucideArrowRight [size]="16" />
          </a>
          <button
            type="button"
            class="btn btn-ghost border border-line lg:hidden"
            [attr.aria-expanded]="open()"
            aria-controls="mobile-nav"
            [attr.aria-label]="locale.t(open() ? messages.nav.closeMenu : messages.nav.openMenu)"
            (click)="toggle()"
          >
            @if (open()) {
              <svg lucideX [size]="20" />
            } @else {
              <svg lucideMenu [size]="20" />
            }
          </button>
        </div>
      </div>

      @if (open()) {
        <div
          id="mobile-nav"
          #panel
          class="border-t border-line bg-canvas px-4 py-4 lg:hidden"
          [attr.aria-label]="locale.t(messages.nav.mobile)"
        >
          <nav class="flex flex-col">
            @for (item of links; track item.path) {
              <a
                class="border-b border-line py-3 text-2xl tracking-tight"
                [routerLink]="item.path"
                routerLinkActive="text-action"
                [routerLinkActiveOptions]="{ exact: item.exact }"
                (click)="open.set(false)"
              >
                {{ locale.t(item.label) }}
              </a>
            }
          </nav>
          <a routerLink="/apps" class="btn btn-primary mt-4 w-full" (click)="open.set(false)">
            {{ locale.t(messages.nav.primary) }}
          </a>
        </div>
      }
    </header>
  `,
})
export class SiteHeaderComponent {
  readonly locale = inject(LocaleService);
  readonly messages = messages;
  readonly brand = brand;
  readonly open = signal(false);
  readonly languages: Locale[] = ['es', 'en'];
  readonly links = [
    { path: '/', label: messages.nav.home, exact: true },
    { path: '/apps', label: messages.nav.apps, exact: false },
    { path: '/demos', label: messages.nav.demos, exact: false },
    { path: '/services', label: messages.nav.services, exact: false },
    { path: '/contact', label: messages.nav.contact, exact: false },
  ];
  private readonly panel = viewChild<ElementRef<HTMLElement>>('panel');
  private readonly router = inject(Router);

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.open.set(false));
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }

  toggle(): void {
    this.open.update((value) => !value);
    if (this.open()) {
      queueMicrotask(() => this.panel()?.nativeElement.querySelector('a')?.focus());
    }
  }

  close(): void {
    this.open.set(false);
  }
}
