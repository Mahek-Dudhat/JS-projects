export const showToast = (operation, id) => {

    let newEle = document.createElement("div");
    newEle.classList.add("toast");
    newEle.style.display = "block";
    newEle.style.zIndex = 1;
    console.log(id);

    // Set the text content of the toast based on the operation:
    if (operation === "add") {
        newEle.textContent = `Product with ID ${id} has been added.`;
    } else {
        newEle.textContent = `Product with ID ${id} has been deleted.`;
    }

    document.body.appendChild(newEle);

    setTimeout(() => {
        newEle.remove();
    }, 2000)

}