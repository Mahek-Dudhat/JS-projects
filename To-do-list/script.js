let inputBox = document.querySelector("#inputBox");


let addBtn = document.querySelector("#add");
let listContainer = document.querySelector("#list-container");

addBtn.addEventListener("click", (event) => {
    console.log(event);

    if (inputBox.value === '') {
        alert("You Must Write Something");
   }

    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveItem();
}

);

listContainer.addEventListener("click",(e)=>{

   if(e.target.tagName ==="LI"){
    e.target.classList.toggle("checked");
    saveItem();
   }

   else if(e.target.tagName ==="SPAN"){
    e.target.parentElement.remove();
    saveItem();
   
   }
},false);

function saveData(){
     localStorage.saveData("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();




