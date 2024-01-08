// Open Nav Bar
let barIcon = document.querySelector(".hIcon i:nth-child(3)");
let navBar = document.querySelector("nav");

barIcon.addEventListener("click", () => {
    navBar.classList.toggle("active");
    barIcon.classList.toggle("fa-times");
    deactive_wish();
    deactive_cart();
});

function deactive_nav_bar(){
    navBar.classList.remove("active");
}

document.querySelectorAll("nav a").forEach(navItem => {
    navItem.addEventListener("click", () => {
        deactive_nav_bar();
    });
    });


 // Open Wish Bar 
let wish = document.querySelector(".wish");
function active_wish(){
    wish.classList.toggle("active_wihs");
}
function deactive_wish(){
    wish.classList.remove("active_wihs");
}
document.querySelector(".hIcon i:nth-child(1)").addEventListener("click", () => {
    active_wish();
    deactive_nav_bar();
    deactive_cart();
});



// Open Cart Bar 
let cart = document.querySelector(".cart");
function active_cart(){
    cart.classList.toggle("active_cart");
}
function deactive_cart(){
    cart.classList.remove("active_cart");
}
document.querySelector(".hIcon i:nth-child(2)").addEventListener("click", () => {
    active_cart();
    deactive_wish();
    deactive_nav_bar();
});



