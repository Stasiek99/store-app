import {Component, EventEmitter, Input, Output} from '@angular/core';

import { Product } from "../../../../models/product.model";

@Component({
  selector: 'app-product-box',
  templateUrl: 'product-box.component.html'
})
export class ProductBoxComponent {
  @Input() fullWidthMode: boolean = false;
  @Output() addToCart = new EventEmitter();
  product: Product | undefined = {
    id: 1,
    title: "Sneakers",
    price: 150,
    category: "shoes",
    description: "Description",
    image: "https://via.placeholder.com/150"
  };
  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
