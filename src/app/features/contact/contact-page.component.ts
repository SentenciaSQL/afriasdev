import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import type { CanDeactivateFn } from '@angular/router';
import { environment } from '../../../environments/environment';
import { budgets, inquiries, messages } from '../../core/data/messages';
import { LocaleService } from '../../core/i18n/locale.service';
import { SeoService } from '../../core/seo/seo.service';

type FormStatus = 'idle' | 'working' | 'prepared' | 'sent' | 'error';

@Component({
  selector: 'app-contact-page',
  imports: [ReactiveFormsModule, RouterLink],
  template: `
    <section class="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p class="text-xs font-medium uppercase tracking-[0.16em] text-action">{{ locale.t(messages.contact.kicker) }}</p>
        <h1 class="mt-3 text-balance text-4xl font-semibold tracking-tight">{{ locale.t(messages.contact.title) }}</h1>
        <p class="mt-4 text-muted">{{ locale.t(messages.contact.lede) }}</p>
        <p class="mt-6 text-sm text-muted">{{ locale.t(messages.contact.direct) }}</p>
        <a class="mt-1 inline-flex text-action underline-offset-4 hover:underline" [href]="'mailto:' + email">{{ email }}</a>
        <p class="mt-6 text-sm text-muted">
          <a routerLink="/privacy" class="underline-offset-4 hover:underline">{{ locale.t(messages.nav.privacy) }}</a>
        </p>
      </div>

      <div>
        @if (status() === 'sent') {
          <div class="surface p-6" role="status">
            <h2 class="text-2xl font-semibold tracking-tight">{{ locale.t(messages.contact.sentTitle) }}</h2>
            <p class="mt-2 text-muted">{{ locale.t(messages.contact.sentText) }}</p>
            <button type="button" class="btn btn-outline mt-5" (click)="reset()">{{ locale.t(messages.contact.another) }}</button>
          </div>
        } @else if (status() === 'prepared') {
          <div class="surface p-6" role="status">
            <h2 class="text-2xl font-semibold tracking-tight">{{ locale.t(messages.contact.preparedTitle) }}</h2>
            <p class="mt-2 text-muted">{{ locale.t(messages.contact.preparedText) }}</p>
            <textarea class="textarea mt-4 w-full" rows="8" readonly [value]="plainText()"></textarea>
            <div class="mt-4 flex flex-wrap gap-2">
              <a class="btn btn-primary" [href]="mailto()">{{ locale.t(messages.contact.openMail) }}</a>
              <button type="button" class="btn btn-outline" (click)="copy()">{{ locale.t(messages.contact.copy) }}</button>
              <button type="button" class="btn btn-ghost" (click)="reset()">{{ locale.t(messages.contact.another) }}</button>
            </div>
            <p class="mt-3 text-sm text-muted" aria-live="polite">{{ notice() }}</p>
          </div>
        } @else {
          <form class="grid gap-4" [formGroup]="form" (ngSubmit)="submit()" novalidate>
            <p class="text-sm text-error" role="alert" [hidden]="!summary()">{{ summary() }}</p>
            <label class="grid gap-1.5 text-sm">
              <span>{{ locale.t(messages.contact.name) }}</span>
              <input class="input w-full" type="text" name="name" autocomplete="name" formControlName="name" [placeholder]="locale.t(messages.contact.namePlaceholder)" [attr.aria-invalid]="invalid('name')" [attr.aria-describedby]="invalid('name') ? 'err-name' : null" />
              @if (invalid('name')) { <small id="err-name" class="text-error">{{ locale.t(messages.contact.errors.name) }}</small> }
            </label>
            <label class="grid gap-1.5 text-sm">
              <span>{{ locale.t(messages.contact.email) }}</span>
              <input class="input w-full" type="email" name="email" autocomplete="email" inputmode="email" spellcheck="false" formControlName="email" [placeholder]="locale.t(messages.contact.emailPlaceholder)" [attr.aria-invalid]="invalid('email')" [attr.aria-describedby]="invalid('email') ? 'err-email' : null" />
              @if (invalid('email')) { <small id="err-email" class="text-error">{{ locale.t(messages.contact.errors.email) }}</small> }
            </label>
            <label class="grid gap-1.5 text-sm">
              <span>{{ locale.t(messages.contact.type) }}</span>
              <select class="select w-full" name="projectType" autocomplete="off" formControlName="projectType" [attr.aria-invalid]="invalid('projectType')" [attr.aria-describedby]="invalid('projectType') ? 'err-type' : null">
                <option value="">{{ locale.t(messages.contact.choose) }}</option>
                @for (item of inquiries; track item.id) {
                  <option [value]="item.id">{{ locale.t(item.label) }}</option>
                }
              </select>
              @if (invalid('projectType')) { <small id="err-type" class="text-error">{{ locale.t(messages.contact.errors.type) }}</small> }
            </label>
            <label class="grid gap-1.5 text-sm">
              <span>{{ locale.t(messages.contact.budget) }}</span>
              <select class="select w-full" name="budget" autocomplete="off" formControlName="budget">
                @for (item of budgets; track item.id) {
                  <option [value]="item.id">{{ locale.t(item.label) }}</option>
                }
              </select>
              <small class="text-muted">{{ locale.t(messages.contact.budgetHint) }}</small>
            </label>
            <label class="grid gap-1.5 text-sm">
              <span>{{ locale.t(messages.contact.description) }}</span>
              <textarea class="textarea w-full" name="message" rows="6" autocomplete="off" formControlName="message" [placeholder]="locale.t(messages.contact.descriptionPlaceholder)" [attr.aria-invalid]="invalid('message')" [attr.aria-describedby]="invalid('message') ? 'err-message' : null"></textarea>
              @if (invalid('message')) { <small id="err-message" class="text-error">{{ locale.t(messages.contact.errors.description) }}</small> }
            </label>
            <label class="hp">
              <span>Website</span>
              <input type="text" tabindex="-1" autocomplete="off" formControlName="companyWebsite" />
            </label>
            <button class="btn btn-primary w-fit" type="submit" [disabled]="status() === 'working'">
              {{ locale.t(status() === 'working' ? messages.contact.sending : messages.contact.submit) }}
            </button>
            <p class="text-sm text-muted">{{ locale.t(messages.contact.privacy) }}</p>
            @if (status() === 'error') {
              <p class="text-sm text-error" role="alert">{{ errorText() }}</p>
            }
          </form>
        }
      </div>
    </section>
  `,
})
export class ContactPageComponent {
  readonly locale = inject(LocaleService);
  readonly messages = messages;
  readonly inquiries = inquiries;
  readonly budgets = budgets;
  readonly email = environment.contactEmail;
  readonly status = signal<FormStatus>('idle');
  readonly summary = signal('');
  readonly notice = signal('');
  readonly errorText = signal('');
  readonly mailto = signal(`mailto:${environment.contactEmail}`);
  readonly plainText = signal('');
  private readonly http = inject(HttpClient);
  private readonly route = inject(ActivatedRoute);
  private readonly fb = inject(FormBuilder);
  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    projectType: ['', Validators.required],
    budget: [''],
    message: ['', [Validators.required, Validators.minLength(20)]],
    companyWebsite: [''],
  });
  private readonly seo = inject(SeoService);

  constructor() {
    effect(() => {
      this.locale.locale();
      this.seo.apply({
        title: this.locale.t(messages.meta.contactTitle),
        description: this.locale.t(messages.meta.contactDescription),
        path: '/contact',
      });
    });
    this.route.queryParamMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      const interest = params.get('interes') ?? '';
      if (inquiries.some((item) => item.id === interest)) {
        this.form.controls.projectType.setValue(interest);
      }
    });
  }

  invalid(name: 'name' | 'email' | 'projectType' | 'message'): boolean {
    const control = this.form.controls[name];
    return control.invalid && (control.touched || this.summary() !== '');
  }

  submit(): void {
    this.notice.set('');
    if (this.form.controls.companyWebsite.value.trim()) {
      this.status.set('error');
      this.errorText.set(this.locale.t(messages.contact.errors.rejected));
      return;
    }
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.summary.set(this.locale.t(messages.contact.errors.summary));
      queueMicrotask(() => document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
      return;
    }
    this.summary.set('');
    const value = this.form.getRawValue();
    const payload = {
      name: value.name.trim(),
      email: value.email.trim(),
      projectType: value.projectType,
      budget: value.budget,
      message: value.message.trim(),
      locale: this.locale.locale(),
    };
    if (!environment.contactFormUrl) {
      this.prepare(payload);
      return;
    }
    this.status.set('working');
    this.http.post(environment.contactFormUrl, payload).subscribe({
      next: () => {
        this.status.set('sent');
        this.form.markAsPristine();
      },
      error: (error: HttpErrorResponse) => {
        this.prepare(payload);
        this.notice.set(
          this.locale.t(error.status === 0 || error.status >= 500 ? messages.contact.errors.upstream : messages.contact.errors.rejected),
        );
      },
    });
  }

  copy(): void {
    navigator.clipboard.writeText(this.plainText()).then(
      () => this.notice.set(this.locale.t(messages.contact.copied)),
      () => this.notice.set(this.locale.t(messages.contact.copyFailed)),
    );
  }

  reset(): void {
    this.form.reset({ name: '', email: '', projectType: '', budget: '', message: '', companyWebsite: '' });
    this.status.set('idle');
    this.summary.set('');
    this.notice.set('');
    this.errorText.set('');
  }

  private prepare(payload: { name: string; email: string; projectType: string; budget: string; message: string; locale: string }): void {
    const type = inquiries.find((item) => item.id === payload.projectType);
    const budget = budgets.find((item) => item.id === payload.budget);
    const text = [
      `${payload.name} <${payload.email}>`,
      type ? this.locale.t(type.label) : payload.projectType,
      budget ? this.locale.t(budget.label) : '',
      '',
      payload.message,
    ].filter((line, index) => line !== '' || index > 2).join('\n');
    this.plainText.set(text);
    const subject = encodeURIComponent(this.locale.t(messages.contact.subject));
    const body = text.length > 1500 ? '' : encodeURIComponent(text);
    this.mailto.set(`mailto:${environment.contactEmail}?subject=${subject}${body ? `&body=${body}` : ''}`);
    this.status.set('prepared');
    this.form.markAsPristine();
  }
}

export const contactCanDeactivate: CanDeactivateFn<ContactPageComponent> = (component) => {
  if (component.form.dirty && component.status() === 'idle') {
    return confirm(component.locale.t(messages.contact.unsaved));
  }
  return true;
};
