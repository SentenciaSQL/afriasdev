import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { fintrackCategories, fintrackTransactions, fintrackTotals, formatDay, money, type SampleTransaction } from '../../core/data/demo-data';
import { LocaleService } from '../../core/i18n/locale.service';

@Component({
  selector: 'app-fintrack-demo',
  imports: [FormsModule],
  template: `
    <div class="grid gap-4">
      <p class="demo-banner">
        <strong>Demo</strong>
        <span>{{ locale.locale() === 'es'
          ? 'Mes ficticio de marzo 2026. No es tu cuenta de FinTrack y no se conecta a la aplicación.'
          : 'Fictional March 2026. This is not your FinTrack account and it does not connect to the app.' }}</span>
      </p>
      <div class="grid gap-3 sm:grid-cols-3">
        <article class="surface px-4 py-3">
          <span class="text-sm text-muted">{{ copy('balance') }}</span>
          <strong class="mt-1 block text-2xl tabular-nums">{{ money(totals().balance, 'DOP', locale.locale()) }}</strong>
        </article>
        <article class="surface px-4 py-3">
          <span class="text-sm text-muted">{{ copy('income') }}</span>
          <strong class="mt-1 block text-2xl tabular-nums text-[#6ee7b7]">{{ money(totals().income, 'DOP', locale.locale()) }}</strong>
        </article>
        <article class="surface px-4 py-3">
          <span class="text-sm text-muted">{{ copy('expense') }}</span>
          <strong class="mt-1 block text-2xl tabular-nums text-[#f0a8a0]">{{ money(totals().expense, 'DOP', locale.locale()) }}</strong>
        </article>
      </div>
      <div class="grid gap-3 lg:grid-cols-[auto_1fr_12rem_10rem] lg:items-end">
        <div class="flex flex-wrap gap-2" role="group" [attr.aria-label]="copy('filter')">
          @for (value of types; track value) {
            <button type="button" class="btn btn-sm" [class.btn-primary]="type() === value" [class.btn-outline]="type() !== value" [attr.aria-pressed]="type() === value" (click)="type.set(value)">
              {{ copy(value) }}
            </button>
          }
        </div>
        <label class="grid gap-1 text-sm">
          <span>{{ copy('search') }}</span>
          <input class="input w-full" type="search" [ngModel]="query()" (ngModelChange)="query.set($event)" />
        </label>
        <label class="grid gap-1 text-sm">
          <span>{{ copy('category') }}</span>
          <select class="select w-full" [ngModel]="category()" (ngModelChange)="category.set($event)">
            <option value="all">{{ copy('all') }}</option>
            @for (entry of categoryEntries; track entry[0]) {
              <option [value]="entry[0]">{{ locale.t(entry[1]) }}</option>
            }
          </select>
        </label>
        <label class="grid gap-1 text-sm">
          <span>{{ copy('sort') }}</span>
          <select class="select w-full" [ngModel]="sort()" (ngModelChange)="sort.set($event)">
            <option value="date">{{ copy('byDate') }}</option>
            <option value="amount">{{ copy('byAmount') }}</option>
          </select>
        </label>
      </div>
      <div class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          @if (items().length === 0) {
            <p class="text-muted">{{ copy('empty') }}</p>
          } @else {
            <ul>
              @for (item of items(); track item.id) {
                <li>
                  <button type="button" class="flex w-full items-center justify-between gap-3 border-t border-line py-3 text-left" [class.is-selected]="selectedId() === item.id" [attr.aria-pressed]="selectedId() === item.id" (click)="selectedId.set(item.id)">
                    <span class="min-w-0">
                      <strong class="block truncate">{{ locale.t(item.description) }}</strong>
                      <small class="text-muted">{{ formatDay(item.date, locale.locale()) }} · {{ locale.t(categories[item.category]) }}</small>
                    </span>
                    <b class="shrink-0 tabular-nums" [class.text-[#6ee7b7]]="item.type === 'income'" [class.text-[#f0a8a0]]="item.type === 'expense'">
                      {{ item.type === 'income' ? '+' : '−' }}{{ money(item.amount, 'DOP', locale.locale()) }}
                    </b>
                  </button>
                </li>
              }
            </ul>
          }
        </div>
        <aside class="grid content-start gap-5">
          @if (selected(); as item) {
            <div class="surface p-4">
              <p class="text-xs uppercase tracking-[0.14em] text-action">{{ copy('detail') }}</p>
              <h3 class="mt-2 text-xl font-medium">{{ locale.t(item.description) }}</h3>
              <p class="mt-2 text-2xl tabular-nums">{{ money(item.amount, 'DOP', locale.locale()) }}</p>
              <p class="text-sm text-muted">{{ formatDay(item.date, locale.locale()) }} · {{ locale.t(item.method) }}</p>
            </div>
          }
          <div>
            <p class="text-xs uppercase tracking-[0.14em] text-muted">{{ copy('expense') }}</p>
            <ul class="mt-3 space-y-2">
              @for (bar of bars(); track bar.key) {
                <li class="grid grid-cols-[6rem_1fr_auto] items-center gap-2 text-sm">
                  <span class="truncate">{{ bar.label }}</span>
                  <span class="h-2 overflow-hidden rounded-full bg-line" aria-hidden="true">
                    <i class="block h-full bg-action" [style.width.%]="(bar.amount / maxBar()) * 100"></i>
                  </span>
                  <b class="tabular-nums">{{ money(bar.amount, 'DOP', locale.locale()) }}</b>
                </li>
              }
            </ul>
          </div>
        </aside>
      </div>
    </div>
  `,
})
export class FintrackDemoComponent {
  readonly locale = inject(LocaleService);
  readonly categories = fintrackCategories;
  readonly categoryEntries = Object.entries(fintrackCategories);
  readonly money = money;
  readonly formatDay = formatDay;
  readonly types = ['all', 'income', 'expense'] as const;
  readonly type = signal<(typeof this.types)[number]>('all');
  readonly category = signal('all');
  readonly query = signal('');
  readonly sort = signal<'date' | 'amount'>('date');
  readonly selectedId = signal('t1');

  readonly items = computed(() => {
    const locale = this.locale.locale();
    const filtered = fintrackTransactions.filter((item) => {
      if (this.type() !== 'all' && item.type !== this.type()) return false;
      if (this.category() !== 'all' && item.category !== this.category()) return false;
      const haystack = `${item.description[locale]} ${item.method[locale]}`.toLowerCase();
      const query = this.query().trim().toLowerCase();
      return !query || haystack.includes(query);
    });
    return filtered.sort((a, b) => (this.sort() === 'amount' ? b.amount - a.amount : b.date.localeCompare(a.date)));
  });

  readonly totals = computed(() => fintrackTotals(this.items()));
  readonly selected = computed<SampleTransaction | undefined>(() => this.items().find((item) => item.id === this.selectedId()) ?? this.items()[0]);
  readonly bars = computed(() => {
    const locale = this.locale.locale();
    return Object.entries(fintrackCategories)
      .filter(([key]) => key !== 'income')
      .map(([key, label]) => ({
        key,
        label: label[locale],
        amount: this.items().filter((item) => item.category === key).reduce((sum, item) => sum + item.amount, 0),
      }))
      .filter((bar) => bar.amount > 0);
  });
  readonly maxBar = computed(() => Math.max(...this.bars().map((bar) => bar.amount), 1));

  copy(key: string): string {
    const locale = this.locale.locale();
    const text: Record<string, Record<string, string>> = {
      all: { es: 'Todos', en: 'All' },
      income: { es: 'Ingresos', en: 'Income' },
      expense: { es: 'Gastos', en: 'Expenses' },
      search: { es: 'Buscar movimiento', en: 'Search transactions' },
      category: { es: 'Categoría', en: 'Category' },
      sort: { es: 'Orden', en: 'Sort' },
      byDate: { es: 'Fecha', en: 'Date' },
      byAmount: { es: 'Importe', en: 'Amount' },
      empty: { es: 'Ningún movimiento coincide con el filtro.', en: 'No transactions match the filter.' },
      balance: { es: 'Balance', en: 'Balance' },
      detail: { es: 'Detalle', en: 'Detail' },
      filter: { es: 'Tipo de movimiento', en: 'Transaction type' },
    };
    return text[key]?.[locale] ?? key;
  }
}
