import { updateCartValue } from "./updateCartValue";

// to get the cart data from localStorage:
export const getCartProductFromLS = () =>{
    // to get the data always ready from localStorage:
    let cartProducts = localStorage.getItem("cartProductLS");

    if(!cartProducts){
        return [];
    }

    cartProducts = JSON.parse(cartProducts);
    
    // console.log("data:"+cartProducts);

    updateCartValue(cartProducts);

    return cartProducts;

}