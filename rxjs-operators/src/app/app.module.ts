import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './header/header.component';
import { cartReducer } from './cart/cart.reducers';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ cartCount: cartReducer }),
    StoreModule.forRoot({ cartTotal: cartReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
