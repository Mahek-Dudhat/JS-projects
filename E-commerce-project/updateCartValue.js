let cartValue = document.querySelector("#cartValue");

// Function to update the cart value in the header:
export const updateCartValue = (cartProducts) => {

  if(!cartValue){
    console.error("cartValue element not found in the DOM.");
    return false;
  }
  
  return (cartValue.innerHTML = ` <li class="nav-item cart" id="cartValue" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="./cart.html"
              class="btn btn-dark"><i class="fa-solid fa-cart-shopping"></i> ${cartProducts.length}</a></li>`);
}