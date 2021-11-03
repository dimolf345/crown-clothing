import { createSelector } from "reselect";

//first select the property of the state that you want to grasp
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity,
      0
    )
);
