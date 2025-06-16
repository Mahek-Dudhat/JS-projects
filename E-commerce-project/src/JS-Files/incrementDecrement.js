import { getCartProductFromLS } from "./getCartProducts";
import { updateCartProductTotal } from "./updateCartProductTotal";


export const incrementDecrement = (e, id, stock, price) => {

    let currElement = document.querySelector(`#card${id}`);
    //  console.log(currElement);
    //console.log(cartProducts);
    let productQuantity = currElement.querySelector(".product-quantity");
    //  console.log(productQuantity.textContent);
    let productPrice = currElement.querySelector(".product-price");
    let quantity = 1;
    let localStoragePrice = 0;

    let localStorageProduct = getCartProductFromLS();

    let existingProduct = localStorageProduct.find((currProd) => currProd.id == id);

    if (existingProduct) {
        quantity = existingProduct.quantity;
        localStoragePrice = existingProduct.price;
    } else {
        localStoragePrice = price;
        //price = price;
    }

    if (e.target.className == "cart-increment") {
        if (productQuantity.textContent < stock) {
            quantity += 1;
        } else if (productQuantity.textContent == stock) {
            quantity = stock;
            localStoragePrice = price * stock;
        }
    }
    if (e.target.className == "cart-decrement") {
        if (productQuantity.textContent > 1) {
            quantity -= 1;
        }
    }

    localStoragePrice = price * quantity;

    localStoragePrice = Number(localStoragePrice.toFixed(2));

    let updateCart = { id, quantity, price: localStoragePrice };
    updateCart = localStorageProduct.map((product) => {
        return product.id == id ? updateCart : product;
    });

    console.log(updateCart);

    localStorage.setItem("cartProductLS", JSON.stringify(updateCart));

    productQuantity.innerText = quantity;
    productPrice.innerText = localStoragePrice;

    //productQuantity.innerText = quantity;

    //updateCartValue(cartProducts);
    updateCartProductTotal();

}