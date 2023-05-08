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

const ornithologyImages = [...document.querySelectorAll(".ornithology")];
const landscapesImages = [...document.querySelectorAll(".landscapes")];
const archeologyImages = [...document.querySelectorAll(".archeology")];
const animalsImages = [...document.querySelectorAll(".animals")];

// popup
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close-btn");
const imageName = document.querySelector(".image-name");
const largeImage = document.querySelector(".large-image");
const imageIndex = document.querySelector(".index");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const galleryImage = document.querySelector(".gallery-image");
const tableauOrnithology = ["Martin-pêcheur d'Europe", "Bernaches cravants", "Canard colvert", "Canard souchet", "Aigrette", "Aigrette", "Aigrette", "Bergeronette grise", "Bouvreuil pivoine", "Chardonneret élégant", "Chevalier"];
const tableauLandscapes = ["Puy Marie (Auvergne)", "Puy-de-dome (Auvergne)", "Bretagne", "Bretagne", "Bretagne", "Bourges", "Etang"];
const tableauArcheology = ["Carnac", "Krusty", "girouette", "violon"];
const tableauAnimals = ["Chevres", "Biches", "Biches2", "Phoque", "Phoque2", "Phoque3"];
const overlay = document.querySelector(".overlay");
const valueBird = document.querySelector("value-Bird");

let index = 0; // will track our current image;

///////////////////////////////////    Slider Ornithology   /////////////////////////////////

ornithologyImages.forEach((item, i) => {
  item.addEventListener("click", () => {
    updateOrnithologyImage(i);
    popup.classList.toggle("active");
    overlay.classList.toggle("open");
  });
});
function updateOrnithologyImage(i) {
  let path = `ressources/images/ornithology/img${i + 1}.png`;
  largeImage.src = path;
  imageName.innerHTML = tableauOrnithology[i];
  index = i;
}
function closePopup() {
  popup.classList.remove("active");
  overlay.classList.remove("open");
}
function imagePrecedente() {
  if (index > 0) {
    updateOrnithologyImage(index - 1);
  }
}
function imageSuivante() {
  if (index < ornithologyImages.length - 1) {
    updateOrnithologyImage(index + 1);
  }
}


///////////////////////////////////    Slider Landcapes   /////////////////////////////////


landscapesImages.forEach((item, i) => {
  item.addEventListener("click", () => {
    updateLandscapesImage(i);
    popup.classList.toggle("active");
    overlay.classList.toggle("open");
  });
});
function updateLandscapesImage(i) {
  let path = `ressources/images/landscapes/img${i + 1}.png`;
  largeImage.src = path;
  imageName.innerHTML = tableauLandscapes[i];
  index = i;
}
function closePopup() {
  popup.classList.remove("active");
  overlay.classList.remove("open");
}
function imagePrecedente() {
  if (index > 0) {
    updateLandscapesImage(index - 1);
  }
}
function imageSuivante() {
  if (index < landscapesImages.length - 1) {
    updateLandscapesImage(index + 1);
  }
}


///////////////////////////////////    Slider Archeology   /////////////////////////////////


archeologyImages.forEach((item, i) => {
  item.addEventListener("click", () => {
    updateArcheologyImage(i);
    popup.classList.toggle("active");
    overlay.classList.toggle("open");
  });
});
function updateArcheologyImage(i) {
  let path = `ressources/images/archeology/img${i + 1}.png`;
  largeImage.src = path;
  imageName.innerHTML = tableauArcheology[i];
  index = i;
}
function closePopup() {
  popup.classList.remove("active");
  overlay.classList.remove("open");
}
function imagePrecedente() {
  if (index > 0) {
    updateArcheologyImage(index - 1);
  }
}
function imageSuivante() {
  if (index < archeologyImages.length - 1) {
    updateArcheologyImage(index + 1);
  }
}

///////////////////////////////////    Slider Animals   /////////////////////////////////

animalsImages.forEach((item, i) => {
  item.addEventListener("click", () => {
    updateAnimalsImage(i);
    popup.classList.toggle("active");
    overlay.classList.toggle("open");
  });
});
function updateAnimalsImage(i) {
  let path = `ressources/images/animals/img${i + 1}.png`;
  largeImage.src = path;
  imageName.innerHTML = tableauAnimals[i];
  index = i;
}
function closePopup() {
  popup.classList.remove("active");
  overlay.classList.remove("open");
}
function imagePrecedente() {
  if (index > 0) {
    updateAnimalsImage(index - 1);
  }
}
function imageSuivante() {
  if (index < animalsImages.length - 1) {
    updateAnimalsImage(index + 1);
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
