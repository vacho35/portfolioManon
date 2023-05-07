function smoothScroll1() {
  var sec2 = document.getElementById("sec2");
  sec2.scrollIntoView();
  sec2.style.transitionTimingFunction = "ease-in";
}

function smoothScroll2() {
  var sec3 = document.getElementById("sec3");
  sec3.scrollIntoView();
  sec3.style.transitionTimingFunction = "ease-in";
}
function smoothScroll3() {
  var sec4 = document.getElementById("sec4");
  sec4.scrollIntoView();
  sec4.style.transitionTimingFunction = "ease-in";
}
function smoothScroll4() {
  var sec5 = document.getElementById("sec5");
  sec5.scrollIntoView();
  sec5.style.transitionTimingFunction = "ease-in";
}
function smoothScroll5() {
  var sec1 = document.getElementById("sec1");
  sec1.scrollIntoView();
  sec1.style.transitionTimingFunction = "ease-in";
}

////////////////////////////////         Menu Burger              /////////////////////////

function openMenuMobile() {
  document.querySelector("header").classList.add("open");
  document.querySelector(".overlay-mobile").classList.add("open");
}

function closeMenuMobile() {
  document.querySelector("header").classList.remove("open");
  document.querySelector(".overlay-mobile").classList.remove("open");
}

////////////////////////////////         Gallery              /////////////////////////

const images = [...document.querySelectorAll(".image")];

// popup

const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close-btn");
const imageName = document.querySelector(".image-name");
const largeImage = document.querySelector(".large-image");
const imageIndex = document.querySelector(".index");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const galleryImage = document.querySelector(".gallery-image");
const tableauBird = ["Bernache", "Krusty", "girouette", "violon"];
const overlay = document.querySelector(".overlay");
const valueBird = document.querySelector("value-Bird");

let index = 0; // will track our current image;

images.forEach((item, i) => {
  item.addEventListener("click", () => {
    updateImage(i);
    popup.classList.toggle("active");
    overlay.classList.toggle("open");
  });
});

function updateImage(i) {
  let path = `ressources/images/img${i + 1}.png`;
  largeImage.src = path;
  imageName.innerHTML = tableauBird[i];
  index = i;
}

galleryImage.addEventListener("mouseover", () => {
  valueBird.innerHTML = currentText;
});

function closePopup() {
  popup.classList.remove("active");
  overlay.classList.remove("open");
}

function imagePrecedente() {
  if (index > 0) {
    updateImage(index - 1);
  }
}

function imageSuivante() {
  if (index < images.length - 1) {
    updateImage(index + 1);
  }
}

////////////////////////////////         Dark Mode             /////////////////////////

const imgs = document.querySelectorAll("img");
const nbSlide = imgs.length;
const suivant = document.querySelector(".right");
const precedent = document.querySelector(".left");
let count = 0;

function slideSuivante() {
  imgs[counts].classlist.remove;
}

////////////////////////////////         Dark Mode             /////////////////////////

const body = document.querySelector("body");
const toggleMode = document.querySelector(".theme-switch");

toggleMode.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.add("light");
    body.classList.remove("dark");
  } else if (body.classList.contains("light")) {
    body.classList.add("dark");
    body.classList.remove("light");
  }
});
