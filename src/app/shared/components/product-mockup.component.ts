import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { fintrackTotals, fintrackTransactions, money } from '../../core/data/demo-data';
import { messages } from '../../core/data/messages';
import { LocaleService } from '../../core/i18n/locale.service';

@Component({
  selector: 'app-product-mockup',
  imports: [NgTemplateOutlet],
  template: `
    <figure class="min-w-0">
      @switch (variant()) {
        @case ('stage') {
          <div class="grid gap-4 lg:relative lg:block lg:min-h-[560px]">
            <div class="lg:absolute lg:right-0 lg:top-0 lg:w-[78%]">
              <ng-container *ngTemplateOutlet="luna" />
            </div>
            <div class="phone mx-auto w-[230px] lg:absolute lg:bottom-2 lg:left-0 lg:mx-0 float-soft">
              <ng-container *ngTemplateOutlet="phone" />
            </div>
          </div>
        }
        @case ('fintrack') {
          <div class="phone mx-auto w-[250px] float-soft"><ng-container *ngTemplateOutlet="phone" /></div>
        }
        @case ('lunaveta') {
          <ng-container *ngTemplateOutlet="luna" />
        }
        @case ('bloodconnectrd') {
          <div class="surface p-5">
            <p class="text-xs uppercase tracking-[0.14em] text-[#f0a8a0]">BloodConnectRD</p>
            <ol class="mt-4 space-y-3">
              @for (step of bloodSteps; track step.n) {
                <li class="flex items-center gap-3 border-t border-line pt-3">
                  <span class="grid size-8 place-items-center rounded-full border border-line text-xs text-muted">{{ step.n }}</span>
                  <span>{{ locale.t(step.label) }}</span>
                </li>
              }
            </ol>
          </div>
        }
        @case ('comercia-multi-tenant') {
          <div class="surface overflow-hidden">
            <div class="flex items-center gap-2 border-b border-line px-4 py-3 text-sm text-muted">
              <i class="dot"></i><i class="dot"></i><i class="dot"></i>
              <span translate="no">Comercia</span>
            </div>
            <div class="p-4">
              <p class="text-xs uppercase tracking-[0.14em] text-[#c4b5fd]">{{ locale.t(messages.mockup.shared) }}</p>
              <div class="mt-4 grid gap-3 sm:grid-cols-2">
                @for (name of tenants; track name) {
                  <div class="rounded-xl border border-line bg-canvas/70 p-3">
                    <p class="text-xs text-muted">{{ locale.t(messages.mockup.workspace) }}</p>
                    <p class="mt-1 font-medium" translate="no">{{ name }}</p>
                    <p class="mt-4 text-sm text-muted">{{ locale.t(messages.mockup.emptyWorkspace) }}</p>
                  </div>
                }
              </div>
            </div>
          </div>
        }
      }
      <figcaption class="mt-3 text-xs text-muted">{{ locale.t(messages.mockup.conceptual) }}</figcaption>
    </figure>

    <ng-template #phone>
      <div class="rounded-[1.8rem] border border-white/10 bg-[#0c1220] p-3 text-ink shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
        <div class="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/15"></div>
        <div class="flex items-center justify-between px-1">
          <p class="font-semibold tracking-tight" translate="no">FinTrack</p>
          <span class="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted">{{ locale.t(messages.mockup.fictional) }}</span>
        </div>
        <p class="mt-4 px-1 text-xs text-muted">{{ locale.t(messages.mockup.balance) }}</p>
        <p class="px-1 text-3xl font-semibold tracking-tight tabular-nums">{{ money(totals.balance, 'DOP', locale.locale()) }}</p>
        <div class="mt-3 grid grid-cols-2 gap-2 px-1 text-sm">
          <div class="border-t border-white/10 pt-2">
            <span class="block text-xs text-muted">{{ locale.t(messages.mockup.income) }}</span>
            <strong class="tabular-nums text-[#6ee7b7]">{{ money(totals.income, 'DOP', locale.locale()) }}</strong>
          </div>
          <div class="border-t border-white/10 pt-2">
            <span class="block text-xs text-muted">{{ locale.t(messages.mockup.expense) }}</span>
            <strong class="tabular-nums text-[#f0a8a0]">{{ money(totals.expense, 'DOP', locale.locale()) }}</strong>
          </div>
        </div>
        <ul class="mt-3 px-1 text-sm">
          @for (item of previewTx; track item.id) {
            <li class="flex items-center justify-between gap-3 border-t border-white/10 py-2">
              <span class="min-w-0 truncate">{{ locale.t(item.description) }}</span>
              <span class="shrink-0 tabular-nums" [class.text-[#6ee7b7]]="item.type === 'income'" [class.text-[#f0a8a0]]="item.type === 'expense'">
                {{ item.type === 'income' ? '+' : '−' }}{{ money(item.amount, 'DOP', locale.locale()) }}
              </span>
            </li>
          }
        </ul>
      </div>
    </ng-template>

    <ng-template #luna>
      <div class="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_24px_70px_rgba(0,0,0,0.32)]">
        <div class="flex items-center gap-2 border-b border-line px-4 py-3 text-sm text-muted">
          <i class="dot"></i><i class="dot"></i><i class="dot"></i>
          <span translate="no">LunaVeta · {{ locale.locale() === 'es' ? 'Clínica de ejemplo' : 'Sample clinic' }}</span>
        </div>
        <div class="p-4">
          <p class="text-xs uppercase tracking-[0.14em] text-[#93c5fd]">{{ locale.t(messages.mockup.schedule) }}</p>
          <ul class="mt-3 text-sm">
            @for (row of agenda; track row.time) {
              <li class="flex items-center justify-between gap-3 border-t border-line py-2.5">
                <span class="tabular-nums text-muted">{{ row.time }}</span>
                <span class="min-w-0 flex-1 truncate" translate="no">{{ row.pet }}</span>
                <span class="text-muted">{{ locale.t(row.kind) }}</span>
              </li>
            }
          </ul>
        </div>
      </div>
    </ng-template>
  `,
})
export class ProductMockupComponent {
  readonly locale = inject(LocaleService);
  readonly messages = messages;
  readonly variant = input.required<string>();
  readonly totals = fintrackTotals();
  readonly previewTx = fintrackTransactions.slice(0, 3);
  readonly money = money;
  readonly tenants = ['Negocio A', 'Negocio B'];
  readonly bloodSteps = [
    { n: '01', label: { es: 'Necesidad', en: 'Need' } },
    { n: '02', label: { es: 'Posible donante', en: 'Possible donor' } },
    { n: '03', label: { es: 'Centro', en: 'Center' } },
    { n: '04', label: { es: 'Fuera de esta web', en: 'Outside this website' } },
  ];
  readonly agenda = [
    { time: '09:00', pet: 'Nube', kind: { es: 'Consulta', en: 'Consult' } },
    { time: '10:30', pet: 'Canela', kind: { es: 'Vacuna', en: 'Vaccine' } },
    { time: '12:00', pet: 'Otto', kind: { es: 'Consulta', en: 'Consult' } },
  ];
}
