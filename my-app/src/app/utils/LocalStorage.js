export const getCart = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("carts")) || [];
  }
  return [];
};

export const addToCart = (product) => {
  const currentCart = getCart();
  localStorage.setItem("carts", JSON.stringify([...currentCart, product]));
};

export const removeFromCart = (id) => {
  const currentCart = getCart();
  const updatedCart = currentCart.filter((item) => item.id !== id);
  localStorage.setItem("carts", JSON.stringify(updatedCart));
};
