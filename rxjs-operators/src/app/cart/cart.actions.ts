import { createAction, props } from '@ngrx/store';

export const AddToCart = createAction(
  '[Item] add to cart',
  props<{ message: string }>()
);
export const RemoveFromCart = createAction('[Item] remove from cart');
