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
  largeImage.src = ornithologyImages[i].src;
  let encodedFilename = ornithologyImages[i].src
    .split("/")
    .pop()
    .replace(/\.(png|webp|JPG)/i, "");
  let decodedFilename = decodeURIComponent(encodedFilename); // Décoder la chaîne de nom de fichier
  imageName.innerHTML = decodedFilename.replace(/\d/g, "").replace(/_/g, " "); // Remplacer tous les _ par un espace
  index = i;
}
function closePopup() {
  popup.classList.remove("active");
  overlay.classList.remove("open");
}
function imageOrnithologyPrecedente() {
  if (index > 0) {
    updateOrnithologyImage(index - 1);
  } else {
    updateOrnithologyImage(ornithologyImages.length - 1);
  }
}
function imageOrnithologySuivante() {
  if (index < ornithologyImages.length - 1) {
    updateOrnithologyImage(index + 1);
  } else {
    updateLandscapesImage(0);
  }
}

// ///////////////////////////////////    Slider Landcapes   /////////////////////////////////

landscapesImages.forEach((item, i) => {
  item.addEventListener("click", () => {
    updateLandscapesImage(i);
    popup.classList.toggle("active");
    overlay.classList.toggle("open");
  });
});
function updateLandscapesImage(i) {
  largeImage.src = landscapesImages[i].src;
  let encodedFilename = landscapesImages[i].src
    .split("/")
    .pop()
    .replace(/\.(png|webp|JPG)/i, "");
  let decodedFilename = decodeURIComponent(encodedFilename); // Décoder la chaîne de nom de fichier
  imageName.innerHTML = decodedFilename.replace(/\d/g, "").replace(/_/g, " "); // Remplacer tous les _ par un espace
  index = i;
}

function closePopup() {
  popup.classList.remove("active");
  overlay.classList.remove("open");
}
function imageLandscapesPrecedente() {
  if (index > 0) {
    updateLandscapesImage(index - 1);
  } else {
    updateLandscapesImage(landscapesImages.length - 1);
  }
}
function imageLandscapesSuivante() {
  if (index < landscapesImages.length - 1) {
    updateLandscapesImage(index + 1);
  } else {
    updateLandscapesImage(0);
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
  largeImage.src = archeologyImages[i].src;
  let encodedFilename = archeologyImages[i].src
    .split("/")
    .pop()
    .replace(/\.(png|webp|JPG)/i, "");
  let decodedFilename = decodeURIComponent(encodedFilename); // Décoder la chaîne de nom de fichier
  imageName.innerHTML = decodedFilename.replace(/\d/g, "").replace(/_/g, " "); // Remplacer tous les _ par un espace
  index = i;
}
function closePopup() {
  popup.classList.remove("active");
  overlay.classList.remove("open");
}
function imageArcheologyPrecedente() {
  if (index > 0) {
    updateArcheologyImage(index - 1);
  } else {
    updateArcheologyImage(archeologyImages.length - 1);
  }
}
function imageArcheologySuivante() {
  if (index < archeologyImages.length - 1) {
    updateArcheologyImage(index + 1);
  } else {
    updateArcheologyImage(0);
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
  largeImage.src = animalsImages[i].src;
  let encodedFilename = animalsImages[i].src
    .split("/")
    .pop()
    .replace(/\.(png|webp|JPG)/i, "");
  let decodedFilename = decodeURIComponent(encodedFilename); // Décoder la chaîne de nom de fichier
  imageName.innerHTML = decodedFilename.replace(/\d/g, "").replace(/_/g, " "); // Remplacer tous les _ par un espace
  index = i;
}
function closePopup() {
  popup.classList.remove("active");
  overlay.classList.remove("open");
}
function imageAnimalsPrecedente() {
  if (index > 0) {
    updateAnimalsImage(index - 1);
  } else {
    updateAnimalsImage(animalsImages.length - 1);
  }
}
function imageAnimalsSuivante() {
  if (index < animalsImages.length - 1) {
    updateAnimalsImage(index + 1);
  } else {
    updateAnimalsImage(0);
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

////////////////////////////////         Lazy Loading             /////////////////////////

// const images = document.querySelectorAll("[data-src");

// function preloadImage(img) {
//   const src = img.getAttribute("data-src");
//   if (!src) {
//     return;
//   }
//   img.src = src;
// }

// const imgOptions = {
//   threshold: 0,
//   rootMargin: "0px 0px 300px 0px",
// };

// const imgObserver = new IntersectionObserver((entries, imgObserver) => {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       preloadImage(entry.target);
//       imgObserver.unobserve(entry.target);
//     }
//   });
// }, imgOptions);

// images.forEach((image) => {
//   imgObserver.observe(image);
// });
