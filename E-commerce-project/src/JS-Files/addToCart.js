import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

// to get the cart data from localStorage
// to update the cart value and also to get the data always ready from localStorage
getCartProductFromLS();

export const addToCart = (e, id, stock) => {

    let arrLocalStorageProduct = getCartProductFromLS();

    let currEle = document.querySelector(`#card${id}`);

    let quantity = currEle.querySelector(".product-quantity").innerText;

    let price = currEle.querySelector(".product-price").innerText;
    // console.log(quantity);

    // console.log(price);
    console.log(currEle);

    price = price.replace("₹", "");

    let existingProduct = arrLocalStorageProduct.find((product) => product.id === id);
    // console.log(existingProduct);

    if (existingProduct && quantity > 1) {

        let temp = Number(quantity) - Number(existingProduct.quantity);
        quantity = Number(existingProduct.quantity) + temp;
        price = Number(price * quantity);

        let updateCart = { id, quantity, price };

        updateCart = arrLocalStorageProduct.map((product) => {
            return product.id == id ? updateCart : product;
        });

        console.log(updateCart);

        localStorage.setItem("cartProductLS", JSON.stringify(updateCart));
    }

    if (existingProduct) {
        return false;
    }

    price = Number(price * quantity);

    quantity = Number(quantity);

    arrLocalStorageProduct.push({ id, quantity, price });

    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

    updateCartValue(arrLocalStorageProduct);
    showToast("add",id);

}