export const addItemToCart = (cartItems, cartItemToAdd) => {
  //cart items.find detects if the carItemToAdd is already in the
  //array of cartItems
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  //if he item is already in  the cart, we modify the quantity property,
  //otherwise we simply return the item.
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //if the item is NOT in the cart, we add for the first time the
  //quantity property
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
