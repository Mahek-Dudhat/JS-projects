let inp = document.querySelector("#inp");
let img = document.querySelector("#img");
let btn = document.querySelector("#btn");
let imgDiv = document.querySelector("#imgDiv");

btn.addEventListener("click", () => {
    if (inp.value.length > 0) {

        img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(inp.value);

        imgDiv.classList.add("showImg");

    } else {

        imgDiv.classList.remove("showImg");
        
        inp.classList.add("error");

        setTimeout(() => {

            inp.classList.remove("error");

        }, 1000);

    }
});



