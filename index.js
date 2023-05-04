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

let allGridItems = [...document.getElementsByClassName("grid-item")];
let popupBg = document.getElementById("popup-bg");
let popupImg = document.getElementById("popup-img");

const openPopup = (e) => {
  let clickedImageSrc = e.target.src;
  popupBg.classList.add("active");
  popupImg.src = clickedImageSrc;
};

const closePopup = () => {
  popupBg.classList.remove("active");
};

allGridItems.forEach((el) => el.addEventListener("click", openPopup));

// popupImg.addEventListener("click", (e) => e.stopPropagation());
// popupBg.addEventListener("click", closePopup);

////////////////////////////////         Slider             /////////////////////////

const slide = ["Carnac.JPG", "DSC_0191.JPG", "DSC_0196.JPG"];
const imgs = document.querySelectorAll("img");
const nbSlide = imgs.length;
let numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero < 0 )
    numero = nbSlide - 1;
  if (numero > nbSlide - 1)
  numero = 0;
  document.getElementById("nbSlide").src = nbSlide[numero];
}

////////////////////////////////         Dark Mode             /////////////////////////

const body = document.querySelector("body");
const toggleMode = document.querySelector(".theme-switch");

toggleMode.addEventListener("click", () => {
  if(body.classList.contains('dark')){

    body.classList.add('light')
    body.classList.remove('dark')

} else if(body.classList.contains('light')){

    body.classList.add('dark')
    body.classList.remove('light')

}
});
