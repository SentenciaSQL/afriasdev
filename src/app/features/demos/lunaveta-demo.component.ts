import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import type { Copy } from '../../core/models/content.model';
import { LocaleService } from '../../core/i18n/locale.service';

type View = 'today' | 'pets' | 'visits' | 'record';

@Component({
  selector: 'app-lunaveta-demo',
  imports: [NgTemplateOutlet],
  template: `
    <div class="grid gap-4">
      <p class="demo-banner">
        <strong>Demo</strong>
        <span>{{ locale.locale() === 'es'
          ? 'Clínica de ejemplo, desconectada de lunaveta.com. No inicies sesión ni uses pacientes reales.'
          : 'A sample clinic, disconnected from lunaveta.com. Do not sign in or use real patients.' }}</span>
      </p>
      <div class="surface overflow-hidden">
        <div class="flex items-center gap-2 border-b border-line px-4 py-3 text-sm text-muted">
          <i class="dot"></i><i class="dot"></i><i class="dot"></i>
          <span translate="no">LunaVeta · {{ copy('clinic') }}</span>
        </div>
        <div class="flex flex-wrap gap-2 p-3" role="tablist" aria-label="LunaVeta">
          @for (tab of tabs; track tab.id) {
            <button type="button" role="tab" class="btn btn-sm" [class.btn-primary]="view() === tab.id" [class.btn-outline]="view() !== tab.id" [attr.aria-selected]="view() === tab.id" (click)="view.set(tab.id)">
              {{ copy(tab.id) }}
            </button>
          }
        </div>
        <div class="p-4" role="tabpanel">
          <p class="text-sm text-muted">{{ copy('day') }}</p>
          @switch (view()) {
            @case ('today') {
              <div class="mt-4 grid gap-3 sm:grid-cols-3">
                <article class="border-t border-line pt-2"><span class="text-sm text-muted">{{ copy('visits') }}</span><strong class="block text-2xl tabular-nums">{{ appointments.length }}</strong></article>
                <article class="border-t border-line pt-2"><span class="text-sm text-muted">{{ copy('pets') }}</span><strong class="block text-2xl tabular-nums">{{ pets.length }}</strong></article>
                <article class="border-t border-line pt-2"><span class="text-sm text-muted">{{ copy('owners') }}</span><strong class="block text-2xl tabular-nums">2</strong></article>
              </div>
              <ng-container *ngTemplateOutlet="agenda; context: { items: appointments }" />
            }
            @case ('pets') {
              <ul class="mt-2">
                @for (pet of pets; track pet.id) {
                  <li class="flex items-center justify-between gap-3 border-t border-line py-3">
                    <div class="min-w-0">
                      <strong translate="no">{{ pet.name }}</strong>
                      <small class="block text-muted">{{ locale.t(pet.species) }} · <span translate="no">{{ pet.owner }}</span></small>
                    </div>
                    <button type="button" class="btn btn-outline btn-sm" (click)="openPet(pet.id)">{{ copy('open') }}</button>
                  </li>
                }
              </ul>
            }
            @case ('visits') {
              <div class="mt-3 flex flex-wrap gap-2" role="group" [attr.aria-label]="copy('visits')">
                @for (value of kinds; track value) {
                  <button type="button" class="btn btn-sm" [class.btn-primary]="kind() === value" [class.btn-outline]="kind() !== value" [attr.aria-pressed]="kind() === value" (click)="kind.set(value)">
                    {{ copy(value) }}
                  </button>
                }
              </div>
              @if (visible().length === 0) {
                <p class="mt-4 text-muted">{{ copy('empty') }}</p>
              } @else {
                <ng-container *ngTemplateOutlet="agenda; context: { items: visible() }" />
              }
            }
            @case ('record') {
              <article class="mt-4 border-t border-line pt-4">
                <p class="text-xs uppercase tracking-[0.14em] text-[#93c5fd]">{{ copy('record') }}</p>
                <h3 class="mt-2 text-2xl font-semibold" translate="no">{{ pet().name }}</h3>
                <p class="text-muted">{{ locale.t(pet().species) }} · <span translate="no">{{ pet().owner }}</span></p>
                <p class="mt-3 max-w-xl">{{ locale.t(pet().note) }}</p>
              </article>
            }
          }
        </div>
      </div>
    </div>

    <ng-template #agenda let-items="items">
      <ul class="mt-4">
        @for (item of items; track item.id) {
          <li class="flex items-center gap-3 border-t border-line py-2.5">
            <span class="w-14 tabular-nums text-muted">{{ item.time }}</span>
            <button type="button" class="min-w-0 flex-1 text-left font-medium" (click)="openPet(item.pet)">{{ petName(item.pet) }}</button>
            <em class="text-sm text-muted">{{ copy(item.kind) }}</em>
          </li>
        }
      </ul>
    </ng-template>
  `,
})
export class LunavetaDemoComponent {
  readonly locale = inject(LocaleService);
  readonly view = signal<View>('today');
  readonly petId = signal('nube');
  readonly kind = signal<'all' | 'consult' | 'vaccine'>('all');
  readonly kinds = ['all', 'consult', 'vaccine'] as const;
  readonly tabs: { id: View }[] = [{ id: 'today' }, { id: 'pets' }, { id: 'visits' }, { id: 'record' }];
  readonly pets: { id: string; name: string; species: Copy; owner: string; note: Copy }[] = [
    {
      id: 'nube',
      name: 'Nube',
      species: { es: 'Perro', en: 'Dog' },
      owner: 'Elena Marte',
      note: {
        es: 'Vacuna antirrábica registrada en el ejemplo del 2 de marzo. No es una historia real.',
        en: 'Rabies vaccine recorded in the sample on March 2. This is not a real record.',
      },
    },
    {
      id: 'canela',
      name: 'Canela',
      species: { es: 'Gato', en: 'Cat' },
      owner: 'Luis Paredes',
      note: {
        es: 'Control de ejemplo. Sin laboratorio ni archivos adjuntos.',
        en: 'Sample checkup. No laboratory results or attachments.',
      },
    },
    {
      id: 'otto',
      name: 'Otto',
      species: { es: 'Perro', en: 'Dog' },
      owner: 'Elena Marte',
      note: {
        es: 'Ficha breve de ejemplo para abrir la historia desde la lista.',
        en: 'A short sample chart so the record can be opened from the list.',
      },
    },
  ];
  readonly appointments = [
    { id: 'a1', time: '09:00', pet: 'nube', kind: 'consult' as const },
    { id: 'a2', time: '10:30', pet: 'canela', kind: 'vaccine' as const },
    { id: 'a3', time: '12:00', pet: 'otto', kind: 'consult' as const },
    { id: 'a4', time: '16:15', pet: 'canela', kind: 'consult' as const },
  ];
  readonly visible = computed(() => this.appointments.filter((item) => this.kind() === 'all' || item.kind === this.kind()));
  readonly pet = computed(() => this.pets.find((item) => item.id === this.petId()) ?? this.pets[0]);

  openPet(id: string): void {
    this.petId.set(id);
    this.view.set('record');
  }

  petName(id: string): string {
    return this.pets.find((item) => item.id === id)?.name ?? id;
  }

  copy(key: string): string {
    const locale = this.locale.locale();
    const text: Record<string, Record<string, string>> = {
      clinic: { es: 'Clínica de ejemplo', en: 'Sample clinic' },
      day: { es: 'Día fijo de la demo: 12 mar 2026', en: 'Fixed demo day: Mar 12, 2026' },
      today: { es: 'Hoy', en: 'Today' },
      pets: { es: 'Pacientes', en: 'Patients' },
      visits: { es: 'Citas', en: 'Appointments' },
      record: { es: 'Historia', en: 'Record' },
      all: { es: 'Todas', en: 'All' },
      consult: { es: 'Consulta', en: 'Consult' },
      vaccine: { es: 'Vacuna', en: 'Vaccine' },
      open: { es: 'Ver historia', en: 'View record' },
      owners: { es: 'Tutores en el ejemplo', en: 'Owners in the sample' },
      empty: { es: 'No hay citas de ese tipo en el ejemplo.', en: 'There are no sample appointments of that type.' },
    };
    return text[key]?.[locale] ?? key;
  }
}
