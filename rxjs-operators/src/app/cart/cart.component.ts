import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddToCart, RemoveFromCart } from './cart.actions';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(private cartStore: Store) {
    console.log('In Cart Component');
  }
  pushToCart() {
    this.cartStore.dispatch(AddToCart({ message: 'Adding 1 Item' }));
  }
  popFromCart() {
    this.cartStore.dispatch(RemoveFromCart());
  }
  add(x: number): (y: number) => number {
    return function (y): number {
      return x + y;
    };
  }
}
