import { Component, inject, signal } from '@angular/core';
import type { Copy } from '../../core/models/content.model';
import { LocaleService } from '../../core/i18n/locale.service';

@Component({
  selector: 'app-bloodconnect-tour',
  template: `
    <div class="grid gap-5">
      <aside class="rounded-2xl border border-line border-l-[#f0a8a0] bg-surface p-4" role="note">
        <strong>{{ locale.locale() === 'es' ? 'Recorrido ilustrativo' : 'Illustrated tour' }}</strong>
        <p class="mt-1 text-sm text-muted">
          {{ locale.locale() === 'es'
            ? 'No envía solicitudes ni muestra donantes reales. Si necesitas atención, acude a un centro de salud.'
            : 'It does not submit requests or show real donors. If you need care, go to a health center.' }}
        </p>
      </aside>
      <div class="grid gap-4 lg:grid-cols-[16rem_1fr]">
        <div class="flex flex-wrap gap-2 lg:flex-col" role="tablist" [attr.aria-label]="progress()">
          @for (item of steps; track item.title.es; let itemIndex = $index) {
            <button type="button" role="tab" class="btn justify-start" [class.btn-primary]="index() === itemIndex" [class.btn-outline]="index() !== itemIndex" [attr.aria-selected]="index() === itemIndex" (click)="index.set(itemIndex)">
              <span class="tabular-nums">{{ (itemIndex + 1).toString().padStart(2, '0') }}</span>
              {{ locale.t(item.title) }}
            </button>
          }
        </div>
        <article class="surface p-5" role="tabpanel" aria-live="polite">
          <p class="text-xs uppercase tracking-[0.14em] text-[#f0a8a0]">{{ progress() }}</p>
          <h3 class="mt-2 text-2xl font-semibold tracking-tight">{{ locale.t(step().title) }}</h3>
          <p class="mt-3 max-w-2xl text-muted">{{ locale.t(step().text) }}</p>
          <ol class="mt-4 space-y-2">
            @for (point of step().points; track point.es) {
              <li class="flex items-center gap-2 border-t border-line pt-2">
                <span class="size-2 rounded-full bg-[#f0a8a0]"></span>
                {{ locale.t(point) }}
              </li>
            }
          </ol>
          <div class="mt-5 flex flex-wrap gap-2">
            <button type="button" class="btn btn-outline" (click)="previous()" [disabled]="index() === 0">
              {{ locale.locale() === 'es' ? 'Anterior' : 'Previous' }}
            </button>
            <button type="button" class="btn btn-primary" (click)="next()" [disabled]="index() === steps.length - 1">
              {{ locale.locale() === 'es' ? 'Siguiente' : 'Next' }}
            </button>
          </div>
        </article>
      </div>
    </div>
  `,
})
export class BloodconnectTourComponent {
  readonly locale = inject(LocaleService);
  readonly index = signal(0);
  readonly steps: { title: Copy; text: Copy; points: Copy[] }[] = [
    {
      title: { es: 'Para qué existe', en: 'Why it exists' },
      text: {
        es: 'BloodConnectRD quiere ordenar, en República Dominicana, el camino entre quien necesita un donante de sangre, quien puede donar y un centro donde hacerlo.',
        en: 'BloodConnectRD aims to organize, in the Dominican Republic, the path between someone who needs a blood donor, someone who can donate, and a place to do it.',
      },
      points: [
        { es: 'Es un proyecto, no un servicio abierto.', en: 'It is a project, not an open service.' },
        { es: 'Esta página no sustituye atención médica.', en: 'This page does not replace medical care.' },
      ],
    },
    {
      title: { es: 'Registro de donantes', en: 'Donor registry' },
      text: {
        es: 'El alcance publicado incluye un registro de personas dispuestas a donar. Aquí no hay formulario ni lista de personas.',
        en: 'The published scope includes a registry of people willing to donate. There is no form and no list of people here.',
      },
      points: [
        { es: 'Sin nombres.', en: 'No names.' },
        { es: 'Sin datos de contacto.', en: 'No contact details.' },
      ],
    },
    {
      title: { es: 'Solicitudes', en: 'Requests' },
      text: {
        es: 'El proyecto contempla solicitudes de sangre. Este recorrido no las crea, no las envía y no confirma disponibilidad.',
        en: 'The project includes blood requests. This tour does not create them, send them, or confirm availability.',
      },
      points: [
        { es: 'No escribas datos clínicos.', en: 'Do not enter clinical data.' },
        { es: 'No hay un botón de envío.', en: 'There is no submit button.' },
      ],
    },
    {
      title: { es: 'Compatibilidad', en: 'Compatibility' },
      text: {
        es: 'La búsqueda de donantes compatibles forma parte del proyecto. El esquema solo muestra el orden del flujo. No es una guía de transfusión ni un inventario.',
        en: 'Compatible-donor search is part of the project. The diagram only shows the order of the flow. It is not transfusion guidance or an inventory.',
      },
      points: [
        { es: 'Necesidad', en: 'Need' },
        { es: 'Criterio', en: 'Criterion' },
        { es: 'Resultado, fuera de esta web', en: 'Result, outside this website' },
      ],
    },
    {
      title: { es: 'Centros', en: 'Centers' },
      text: {
        es: 'Hospitales, clínicas y bancos de sangre aparecen en el propósito del proyecto. No se publican aquí como aliados ni con direcciones.',
        en: 'Hospitals, clinics, and blood banks appear in the project’s purpose. They are not published here as partners or with addresses.',
      },
      points: [
        { es: 'Sin mapa de disponibilidad.', en: 'No availability map.' },
        { es: 'Sin centros recomendados.', en: 'No recommended centers.' },
      ],
    },
    {
      title: { es: 'Estado', en: 'Status' },
      text: {
        es: 'No hay un enlace público confirmado para usar BloodConnectRD. La base descrita incluye Spring Boot, Angular, Flutter y PostgreSQL.',
        en: 'There is no confirmed public link to use BloodConnectRD. The described base includes Spring Boot, Angular, Flutter, and PostgreSQL.',
      },
      points: [
        { es: 'Estado: en desarrollo.', en: 'Status: in development.' },
        { es: 'Para saber más, usa el contacto.', en: 'To learn more, use the contact form.' },
      ],
    },
  ];

  step() {
    return this.steps[this.index()];
  }

  previous(): void {
    this.index.update((value) => Math.max(0, value - 1));
  }

  next(): void {
    this.index.update((value) => Math.min(this.steps.length - 1, value + 1));
  }

  progress(): string {
    const current = this.index() + 1;
    return this.locale.locale() === 'es' ? `Paso ${current} de ${this.steps.length}` : `Step ${current} of ${this.steps.length}`;
  }
}
