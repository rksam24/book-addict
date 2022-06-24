searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

//login btn
let loginForm = document.querySelector('.login-form-container');

document.getElementById('login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}


document.getElementById('close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
}


// cart btn

let cartButtoon = document.querySelector('.cart-container');

document.getElementById('cart-btn').onclick = () => {
    cartButtoon.classList.toggle('active');
}


document.getElementById('close-cart-btn').onclick = () => {
    cartButtoon.classList.remove('active');
}

function closeCart() {
    cartButtoon.classList.remove('active');

}


//for fixed navbar
window.onscroll = () => {
    searchForm.classList.remove('active');
    if (window.scrollY > 80) {
        document.querySelector(".header .header-2").classList.add("active");
    } else {
        document.querySelector(".header .header-2").classList.remove("active");
    }
}

window.onload = () => {
    if (window.scrollY > 80) {
        document.querySelector(".header .header-2").classList.add("active");
    } else {
        document.querySelector(".header .header-2").classList.remove("active");
    }
}