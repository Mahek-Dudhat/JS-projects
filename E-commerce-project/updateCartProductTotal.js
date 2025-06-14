import { getCartProductFromLS } from "./getCartProducts";

export const updateCartProductTotal = () => {

    let productSubTotal = document.querySelector(".product-sub-total");
    let productTotal = document.querySelector(".product-total");

    // console.log(productSubTotal);
    // console.log(productTotal);

    let localCartProducts = getCartProductFromLS();
    let initialValue = 0;

    let totalProductprice = localCartProducts.reduce((prev, curr) => {
        // console.log(prev);
        let productPrice = parseInt(curr.price);
        return prev + productPrice;

        //console.log(curr.price + prev.price);
    }, initialValue);

    totalProductprice = Number(totalProductprice);

    productSubTotal.textContent = `₹${totalProductprice}`;
    productTotal.textContent = `₹${totalProductprice + 50}`;

    //console.log(totalProductprice);

}