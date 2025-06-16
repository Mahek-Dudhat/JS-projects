
// This function is used to toggle the quantity of a product in the home page:
export const homeQuantityToggle = (e, id, stock) => {

     console.log(e, id, stock);


     let currElement = document.querySelector(`#card${id}`);

     // console.log(currElement);

     let productQuantity = currElement.querySelector(".product-quantity");

     let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

     console.log(productQuantity);

     if (e.target.className == "cart-increment") {
          if (productQuantity.textContent < stock) {

               quantity += 1;
          } else if (productQuantity.textContent == stock) {
               quantity = stock;
          }
     }
     if (e.target.className == "cart-decrement") {

          if (productQuantity.textContent > 0) {
               quantity -= 1;
          } else if (productQuantity.textContent == 1) {
               quantity = 1;
          }
     }

     productQuantity.innerText = quantity;
     console.log(quantity);
     productQuantity.setAttribute("data-quantity", quantity.toString());

     return quantity;
}