import { Routes } from '@angular/router';
import { contactCanDeactivate } from './features/contact/contact-page.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home-page.component').then((m) => m.HomePageComponent),
  },
  {
    path: 'apps',
    loadComponent: () => import('./features/products/catalog-page.component').then((m) => m.CatalogPageComponent),
  },
  {
    path: 'apps/:slug',
    loadComponent: () => import('./features/products/product-page.component').then((m) => m.ProductPageComponent),
  },
  {
    path: 'demos',
    loadComponent: () => import('./features/demos/demos-page.component').then((m) => m.DemosPageComponent),
  },
  {
    path: 'demos/:slug',
    loadComponent: () => import('./features/demos/demo-page.component').then((m) => m.DemoPageComponent),
  },
  {
    path: 'services',
    loadComponent: () => import('./features/services/services-page.component').then((m) => m.ServicesPageComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact-page.component').then((m) => m.ContactPageComponent),
    canDeactivate: [contactCanDeactivate],
  },
  {
    path: 'privacy',
    loadComponent: () => import('./features/legal/privacy-page.component').then((m) => m.PrivacyPageComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found-page.component').then((m) => m.NotFoundPageComponent),
  },
];
