//for menu-bar clicking action 
let menu = document.querySelector("#menu-bars");
let nav = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  nav.classList.toggle("active");
};

//for search-icon click action

window.onscroll = () => {
  menu.classList.remove("fa-times");
  nav.classList.remove("active");
};

document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
};
document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
};

// slider
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

// // login and REgis animations
// const container = document.getElementById("container");
// const signIn = document.getElementById("sign-in");
// const signUp = document.getElementById("sign-up");

// setTimeout(() => {
//   container.classList.add("sign-in");
// }, 200);

// const toggle = () => {
//   container.classList.toggle("sign-in");
//   container.classList.toggle("sign-up");
// };

// signIn.addEventListener("click", toggle);
// signUp.addEventListener("click", toggle);

