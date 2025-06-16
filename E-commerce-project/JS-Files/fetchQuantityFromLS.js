import { getCartProductFromLS } from "./getCartProducts";

export const fetchQuantityFromLS = (id, price) => {

    let cartProducts = getCartProductFromLS();
    console.log(cartProducts);

    let quantity = 1;
    let existingProduct = cartProducts.find((product) => {
        return product.id == id;
    })

    if (existingProduct) {
        quantity = existingProduct.quantity;
        price = existingProduct.price;
    }

    return { quantity, price };

}