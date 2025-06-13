let icon = document.querySelector(".icon-cart");
let body = document.querySelector("body");
let clear = document.querySelector(".clear-cart");

let listProductData = document.querySelector(".row");
let listCart = document.querySelector(".list-cart");

let iconSpan = document.querySelector(".icon-cart span");

let listProducts = [];
let cart = [];


//SHOW A SIDEBAR OF A CART:
icon.addEventListener("click", () => {

    body.classList.toggle("show-cart");

})


//CLOSE CART WHEN USER CLICK ON THIS BUTTON:
clear.addEventListener("click", () => {

    body.classList.toggle("show-cart");

})

//ADD DATA TO HTML:
const addDataToHtml = () => {

    listProductData.innerHTML = "";

    if (listProducts.length > 0) {



        listProducts.forEach((product) => {

            newDiv = document.createElement("div");
            newDiv.classList.add("product");
            newDiv.dataset.id = product.id;
            newDiv.innerHTML = `
             <img src="${product.image}" alt="looi lounge chair">
             <h2>${product.name}</h2>
             <div class="price">${product.price}</div>
             <button class="add-to-cart">Add to Cart</button>
                
            `;
            listProductData.appendChild(newDiv);
        })
    }

}

//ADD TO CART FUNCTION:

listProductData.addEventListener("click", (e) => {

    let position = e.target;
    if (position.classList.contains("add-to-cart")) {

        let product_id = position.parentElement.dataset.id;
        addToCart(product_id);
    }

});


//CHECK CONDITION FOR ITEM IS EXIST OR NOT IN CART LIST:
const addToCart = (product_id) => {

    let positionThisProduct = cart.findIndex((item) => item.product_id == product_id);

    if (cart.length <= 0) {
        cart = [

            {
                product_id: product_id,
                quantity: 1
            }

        ]
    }
    else if (positionThisProduct < 0) {

        cart.push({
            product_id: product_id,
            quantity: 1
        })
    }

    else {
        cart[positionThisProduct].quantity = cart[positionThisProduct].quantity + 1;
    }

    addCartToHtml();
    addToMemory();
}

//SAVE THE DATA TO THE LOCAL STORAGE:

const addToMemory = () => {

    localStorage.setItem("cart", JSON.stringify(cart));

}

//DISPLAY ON THE SCREEN:
const addCartToHtml = () => {

    listCart.innerHTML = " ";
    let totalQuantity = 0;
    if (cart.length > 0) {

        cart.forEach((item) => {

            totalQuantity = totalQuantity + item.quantity;
            newItem = document.createElement("div");
            newItem.classList.add("item");

            //SET ID TO ALL INDIVIDUAL ITEMS:
            newItem.dataset.id = item.product_id;

            let findPosition = listProducts.findIndex((value) => value.id == item.product_id);
            let info = listProducts[findPosition];
            console.log(info)
            newItem.innerHTML = `
        
               <div class="image">
                    <img src="${info.image}" alt="looi lounge chair">
                </div>

                <div class="name">
                    ${info.name}
                </div>

                <div class="total-price">
                    ${info.price * item.quantity}
                </div>

                <div class="quantity">
                    <span class="left"> < </span>
                       
                            <span>${item.quantity}</span>
                            <span class="right"> > </span>
                </div>

        `;

            listCart.appendChild(newItem);

        })



    }
    iconSpan.innerText = totalQuantity;

}

//CHANGE THE QUANTITY WHEN USER CLICKS ON LEFT OR RIGTH ARROW :

listCart.addEventListener("click", (e) => {

    let positionClick = e.target;
    if (positionClick.classList.contains("left") || positionClick.classList.contains("right")) {

        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = "left";
        if (positionClick.classList.contains("right")) {
            type = "right";
        }

        changeQuantity(product_id, type)
    }

})

const changeQuantity = (product_id, type) => {

    let positionInCartItem = cart.findIndex((item) => item.product_id == product_id);

    switch (type) {

        case "right":
            cart[positionInCartItem].quantity = cart[positionInCartItem].quantity + 1;
            break;

        default:

            let valueChange = cart[positionInCartItem].quantity - 1;
            if (valueChange > 0) {
                cart[positionInCartItem].quantity = valueChange;
            } else {
                cart.splice(positionInCartItem, 1);
            }
    }

    addCartToHtml();
    addToMemory();

}


//INITIALIZE APP:
const initApp = async () => {

    //GET A DATA FROM THE PRODUCT.JSON FILE:
    let response = await fetch('product.json');

    let data = await response.json();
    listProducts = data;
    console.log(listProducts);
    addDataToHtml();

    //GET A SAVED DATA FROM THE LOCAL STORAGE:
    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
        addCartToHtml();
    }
}

initApp();