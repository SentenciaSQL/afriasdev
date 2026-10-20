import { Component, ElementRef, inject, input, signal, viewChild } from '@angular/core';
import { LucideChevronLeft, LucideChevronRight, LucideX } from '@lucide/angular';
import { messages } from '../../core/data/messages';
import { LocaleService } from '../../core/i18n/locale.service';
import type { ProductMedia } from '../../core/models/content.model';

@Component({
  selector: 'app-product-media-gallery',
  imports: [LucideChevronLeft, LucideChevronRight, LucideX],
  template: `
    <section [attr.aria-labelledby]="'gallery-' + productName()">
      <h2 [id]="'gallery-' + productName()" class="text-3xl font-semibold tracking-tight">
        {{ locale.t(messages.product.gallery) }}
      </h2>
      <ul class="mt-6 grid gap-4 sm:grid-cols-2">
        @for (image of images(); track image.src; let index = $index) {
          <li>
            <button type="button" class="surface w-full overflow-hidden text-left" (click)="open(index)">
              <img
                class="aspect-video w-full object-cover"
                [src]="image.src"
                [alt]="locale.t(image.alt)"
                [width]="image.width"
                [height]="image.height"
                [attr.loading]="index === 0 ? 'eager' : 'lazy'"
              />
              @if (image.caption) {
                <span class="block px-3 py-2 text-sm text-muted">{{ locale.t(image.caption) }}</span>
              }
            </button>
          </li>
        }
      </ul>
    </section>

    <dialog
      #lightbox
      class="media-dialog"
      [attr.aria-label]="locale.t(messages.gallery.dialog)"
      (click)="onBackdrop($event)"
      (keydown)="onKeys($event)"
      (close)="index.set(0)"
    >
      @if (current(); as image) {
        <div class="flex items-center justify-between gap-3 px-1 pb-3">
          <p class="min-w-0 truncate text-sm text-muted">{{ image.caption ? locale.t(image.caption) : locale.t(image.alt) }}</p>
          <button type="button" class="btn btn-ghost border border-line" [attr.aria-label]="locale.t(messages.gallery.close)" (click)="close()">
            <svg lucideX [size]="18" />
          </button>
        </div>
        <img [src]="image.src" [alt]="locale.t(image.alt)" [width]="image.width" [height]="image.height" />
        @if (images().length > 1) {
          <div class="mt-3 flex justify-between gap-2">
            <button type="button" class="btn btn-outline" [attr.aria-label]="locale.t(messages.gallery.prev)" (click)="step(-1)">
              <svg lucideChevronLeft [size]="18" />
            </button>
            <button type="button" class="btn btn-outline" [attr.aria-label]="locale.t(messages.gallery.next)" (click)="step(1)">
              <svg lucideChevronRight [size]="18" />
            </button>
          </div>
        }
      }
    </dialog>
  `,
})
export class ProductMediaGalleryComponent {
  readonly locale = inject(LocaleService);
  readonly messages = messages;
  readonly images = input.required<ProductMedia[]>();
  readonly productName = input('gallery');
  readonly index = signal(0);
  private readonly dialog = viewChild<ElementRef<HTMLDialogElement>>('lightbox');

  current(): ProductMedia | undefined {
    return this.images()[this.index()];
  }

  open(index: number): void {
    this.index.set(index);
    this.dialog()?.nativeElement.showModal();
  }

  close(): void {
    this.dialog()?.nativeElement.close();
  }

  step(delta: number): void {
    const total = this.images().length;
    this.index.update((value) => (value + delta + total) % total);
  }

  onBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) this.close();
  }

  onKeys(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') this.step(1);
    if (event.key === 'ArrowLeft') this.step(-1);
  }
}
