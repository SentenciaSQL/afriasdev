import type { Copy, Locale } from '../models/content.model';

export type MoneyType = 'income' | 'expense';

export interface SampleTransaction {
  id: string;
  date: string;
  type: MoneyType;
  category: string;
  amount: number;
  description: Copy;
  method: Copy;
}

export const fintrackCategories: Record<string, Copy> = {
  income: { es: 'Ingresos', en: 'Income' },
  home: { es: 'Hogar', en: 'Home' },
  food: { es: 'Comida', en: 'Food' },
  transport: { es: 'Transporte', en: 'Transport' },
  health: { es: 'Salud', en: 'Health' },
  leisure: { es: 'Ocio', en: 'Leisure' },
  services: { es: 'Servicios', en: 'Services' },
};

export const fintrackTransactions: SampleTransaction[] = [
  { id: 't1', date: '2026-03-01', type: 'income', category: 'income', amount: 72000, description: { es: 'Nómina', en: 'Salary' }, method: { es: 'Transferencia', en: 'Transfer' } },
  { id: 't2', date: '2026-03-02', type: 'expense', category: 'home', amount: 18000, description: { es: 'Alquiler', en: 'Rent' }, method: { es: 'Transferencia', en: 'Transfer' } },
  { id: 't3', date: '2026-03-04', type: 'expense', category: 'food', amount: 6450, description: { es: 'Supermercado', en: 'Groceries' }, method: { es: 'Tarjeta', en: 'Card' } },
  { id: 't4', date: '2026-03-06', type: 'expense', category: 'transport', amount: 2800, description: { es: 'Combustible', en: 'Fuel' }, method: { es: 'Tarjeta', en: 'Card' } },
  { id: 't5', date: '2026-03-08', type: 'expense', category: 'health', amount: 1320, description: { es: 'Farmacia', en: 'Pharmacy' }, method: { es: 'Efectivo', en: 'Cash' } },
  { id: 't6', date: '2026-03-11', type: 'expense', category: 'leisure', amount: 2100, description: { es: 'Cena', en: 'Dinner' }, method: { es: 'Tarjeta', en: 'Card' } },
  { id: 't7', date: '2026-03-14', type: 'expense', category: 'services', amount: 1650, description: { es: 'Internet', en: 'Internet' }, method: { es: 'Transferencia', en: 'Transfer' } },
  { id: 't8', date: '2026-03-18', type: 'income', category: 'income', amount: 4500, description: { es: 'Trabajo extra', en: 'Side work' }, method: { es: 'Transferencia', en: 'Transfer' } },
];

export function money(amount: number, currency: string, locale: Locale): string {
  return new Intl.NumberFormat(locale === 'es' ? 'es-DO' : 'en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
  }).format(amount);
}

export function fintrackTotals(items: SampleTransaction[] = fintrackTransactions) {
  const income = items.filter((item) => item.type === 'income').reduce((sum, item) => sum + item.amount, 0);
  const expense = items.filter((item) => item.type === 'expense').reduce((sum, item) => sum + item.amount, 0);
  return { income, expense, balance: income - expense };
}

export function formatDay(value: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === 'es' ? 'es-DO' : 'en-US', {
    day: 'numeric',
    month: 'short',
  }).format(new Date(`${value}T00:00:00`));
}
