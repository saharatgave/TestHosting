
function hamburgerChange(x) {
    console.log(x.classList)
    let menu = document.querySelector(".menu");
    menu.classList.toggle("openHamburger")
    x.classList.toggle("change");
}