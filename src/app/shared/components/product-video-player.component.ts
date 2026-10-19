import { Component, ElementRef, computed, inject, input, signal, viewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LucidePlay, LucideX } from '@lucide/angular';
import { messages } from '../../core/data/messages';
import { LocaleService } from '../../core/i18n/locale.service';
import type { ProductVideo } from '../../core/models/content.model';
import { videoEmbed } from '../video-embed';

@Component({
  selector: 'app-product-video-player',
  imports: [LucidePlay, LucideX],
  template: `
    <section [attr.aria-labelledby]="'video-' + headingId">
      <h2 [id]="'video-' + headingId" class="text-3xl font-semibold tracking-tight">{{ locale.t(messages.product.video) }}</h2>
      <p class="mt-2 text-muted">{{ locale.t(video().title) }}</p>
      <div class="mt-5" [class]="frameClass()">
        @if (!started()) {
          <button type="button" class="video-poster" (click)="play()">
            @if (video().poster) {
              <img [src]="video().poster" [alt]="locale.t(video().title)" width="1280" height="720" />
            }
            <span class="play-badge">
              <svg lucidePlay [size]="16" />
              {{ locale.t(messages.video.play) }}
            </span>
          </button>
        } @else if (video().type === 'local') {
          <video controls autoplay playsinline preload="none" [attr.poster]="video().poster || null">
            <source [src]="video().url" type="video/mp4" />
          </video>
        } @else if (embed()) {
          <iframe
            [src]="embed()"
            [title]="locale.t(video().title)"
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            sandbox="allow-scripts allow-same-origin allow-presentation"
            allow="fullscreen; picture-in-picture"
          ></iframe>
        } @else {
          <a class="btn btn-primary" [href]="video().url" target="_blank" rel="noopener noreferrer">
            {{ locale.t(messages.video.external) }}
          </a>
        }
      </div>
      @if (presentation() === 'modal') {
        <dialog #player class="media-dialog" [attr.aria-label]="locale.t(messages.video.dialog)" (close)="started.set(false)">
          <div class="mb-3 flex justify-end">
            <button type="button" class="btn btn-ghost border border-line" [attr.aria-label]="locale.t(messages.video.close)" (click)="close()">
              <svg lucideX [size]="18" />
            </button>
          </div>
          <div [class]="frameClass()">
            @if (started() && video().type === 'local') {
              <video controls autoplay playsinline preload="none">
                <source [src]="video().url" type="video/mp4" />
              </video>
            }
          </div>
        </dialog>
      }
    </section>
  `,
})
export class ProductVideoPlayerComponent {
  readonly locale = inject(LocaleService);
  readonly messages = messages;
  readonly video = input.required<ProductVideo>();
  readonly presentation = input<'inline' | 'modal'>('inline');
  readonly started = signal(false);
  readonly headingId = Math.random().toString(36).slice(2, 8);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly dialog = viewChild<ElementRef<HTMLDialogElement>>('player');
  readonly embed = computed(() => {
    const video = this.video();
    if (video.type !== 'external') return null;
    const src = videoEmbed(video.url);
    return src ? this.sanitizer.bypassSecurityTrustResourceUrl(src) : null;
  });

  frameClass(): string {
    const ratio = this.video().aspectRatio ?? '16:9';
    if (ratio === '9:16') return 'video-frame vertical';
    if (ratio === '1:1') return 'video-frame square';
    return 'video-frame';
  }

  play(): void {
    if (this.presentation() === 'modal') {
      this.dialog()?.nativeElement.showModal();
    }
    this.started.set(true);
  }

  close(): void {
    this.dialog()?.nativeElement.close();
    this.started.set(false);
  }
}
