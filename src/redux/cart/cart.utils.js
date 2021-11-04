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

export const remoteItemFromCart = (cartItems, cartItemToRemove) => {
  //checks if the itemToremove is in the cartItems array
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  //if there is only one, we remove it from the cartItems with
  //filter method
  if (existingCartItem.quantity === 1) {
    //if the id is not the one we want to remove, we keep it
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  //if quantity is greater than 1, we map the array and reduce the
  //quantity of cartItem that has the same id of cartItemToRemove
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
