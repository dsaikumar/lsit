import { createReducer, on, props } from '@ngrx/store';
import { AddToCart, RemoveFromCart } from './cart.actions';

export const initialState = 0;
export const cartReducer = createReducer(
  initialState,
  on(AddToCart, (state: number, props) => {
    console.log(props);
    return state + 1;
  }),
  on(RemoveFromCart, (state: number) => state - 1)
);
