import { Component, input } from '@angular/core';
import type { Product } from '../../core/models/content.model';
import { ProductCardComponent } from './product-card.component';

@Component({
  selector: 'app-product-showcase',
  imports: [ProductCardComponent],
  template: `
    <div class="grid gap-5 lg:grid-cols-2">
      @for (product of products(); track product.id) {
        <app-product-card [product]="product" />
      }
    </div>
  `,
})
export class ProductShowcaseComponent {
  readonly products = input.required<Product[]>();
}
