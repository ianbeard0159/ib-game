function onclick_modal() {
    let modal = document.getElementById("modal");
    modal.setAttribute("style", "display: none");
}
function onclick_expandableImage(in_element) {
    console.log("click");
    let modal = document.getElementById("modal");
    modal.setAttribute("style", "display: flex");
    let image = in_element.getAttribute("src");
    modal.setAttribute("style", `background-image: url("${image}")`);
}