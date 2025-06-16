import { homeQuantityToggle } from "./homeQuantityToggle";
import { addToCart } from "./addToCart";

let productContainer = document.querySelector(".main-product-container");
let productTemplate = document.querySelector("#product-template");

// Function to show data in HTML:
export const showDataToHtml = (products) => {

    if (products.length === 0) {
        return false;
    }

    products.forEach((currProd) => {
        const { brand, category, description, id, image, name, price, stock } = currProd;

        let productClone = document.importNode(productTemplate.content, true);

        console.log(productClone);
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

        productClone.querySelector(".product-img").src = image;
        productClone.querySelector(".product-img").alt = name;
        productClone.querySelector(".product-name").textContent = name;
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".product-desc").textContent = description;
        productClone.querySelector(".product-price").textContent = `₹${price}`;
        productClone.querySelector(".product-actual-price").textContent = `₹${price * 4}`;
        productClone.querySelector(".product-stock").textContent = stock;
        
        // productClone.setAattribute("id", id);

        productClone.querySelector(".stock-element").addEventListener("click", (e) => {
            homeQuantityToggle(e, id, stock);
        });

        productClone.querySelector(".add-to-cart-button").addEventListener("click",(e)=>{
            addToCart(e, id, stock);
        })

        productContainer.append(productClone);
    })
}