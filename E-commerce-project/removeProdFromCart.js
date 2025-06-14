import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";
//import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (e, id) => {

  let cartProducts = getCartProductFromLS();

  cartProducts = cartProducts.filter((currProd) => currProd.id !== id);
  console.log(cartProducts);

  let removeDiv = document.querySelector(`#card${id}`);
  removeDiv.remove();
  console.log(removeDiv);

  updateCartValue(cartProducts);

  localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));



}