import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  cartTotal = this.store.select('cartCount');
  cartTotalNew = this.store.select('cartTotal');
  constructor(private store: Store<{ cartCount: number; cartTotal: number }>) {}
}
