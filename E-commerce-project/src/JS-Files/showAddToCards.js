import products from './api/products.json';
import { getCartProductFromLS } from './getCartProducts';
import { fetchQuantityFromLS } from './fetchQuantityFromLS';
import { incrementDecrement } from './incrementDecrement';
import { removeProdFromCart } from './removeProdFromCart';


let productCartContainer = document.querySelector(".product-cart-container");
let productCartTemplate = document.querySelector("#product-cart-template");
// let productCartBtn = document.querySelector(".remove-to-cart-button");
//console.log(productCartBtn);

//console.log(productCartTemplate);
//console.log(products);

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((currProd) => {
    return cartProducts.some((cartProd) => {
        return currProd.id === cartProd.id;
    })
})

//console.log(filterProducts);

const showCartProduct = () => {
    filterProducts.forEach((currProd) => {

        const { category, id, image, name, stock, price } = currProd;
        console.log(currProd.stock);

        let productClone = document.importNode(productCartTemplate.content, true);
        console.log(productClone);

        const isActualData = fetchQuantityFromLS(id, price);


        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".product-cart-img").src = image;
        productClone.querySelector(".product-cart-img").alt = name;
        productClone.querySelector(".product-name").textContent = name;
        productClone.querySelector(".product-price").textContent = isActualData.price;
        productClone.querySelector(".product-quantity").textContent = isActualData.quantity;
        // productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);



        productClone.querySelector(".stock-element").addEventListener("click", (e) => {

            incrementDecrement(e, id, stock, price);
        })

        productClone.querySelector(".remove-to-cart-button").addEventListener("click", (e) => {
            removeProdFromCart(e, id);
        })

        productCartContainer.append(productClone);
    });



}



showCartProduct();