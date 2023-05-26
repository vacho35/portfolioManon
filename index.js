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
  const selectedImage = ornithologyImages[i];
  largeImage.src = selectedImage.getAttribute("data-src");
  largeImage.alt = selectedImage.alt;
  let altText = selectedImage.alt;
  imageName.innerHTML = altText.replace(/\d/g, "").replace(/_/g, " ");
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

// Fonction pour charger les images visibles
function loadVisibleImages() {
  ornithologyImages.forEach((image) => {
    if (isElementInViewport(image) && !image.hasAttribute("data-loaded")) {
      image.setAttribute("src", image.getAttribute("data-src"));
      image.setAttribute("data-loaded", true);
    }
  });
}

// Fonction pour vérifier si un élément est visible dans la fenêtre
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Écouter l'événement de scroll pour charger les images visibles
window.addEventListener("scroll", loadVisibleImages);

// Charger les images visibles initialement
loadVisibleImages();

// ///////////////////////////////////    Slider Landcapes   /////////////////////////////////

// Écouter les clics sur les images
landscapesImages.forEach((item, i) => {
  item.addEventListener("click", () => {
    updateLandscapesImage(i);
    popup.classList.add("active");
    overlay.classList.add("open");
  });
});

// Fonction pour mettre à jour l'image dans largeImage
function updateLandscapesImage(i) {
  const selectedImage = landscapesImages[i];
  largeImage.src = selectedImage.getAttribute("data-src");
  largeImage.alt = selectedImage.alt;
  let altText = selectedImage.alt;
  imageName.innerHTML = altText.replace(/\d/g, "").replace(/_/g, " ");
  index = i;
}

// Fonction pour fermer le popup
function closePopup() {
  popup.classList.remove("active");
  overlay.classList.remove("open");
}

// Fonction pour afficher l'image précédente dans largeImage
function imageLandscapesPrecedente() {
  if (index > 0) {
    updateLandscapesImage(index - 1);
  } else {
    updateLandscapesImage(landscapesImages.length - 1);
  }
}

// Fonction pour afficher l'image suivante dans largeImage
function imageLandscapesSuivante() {
  if (index < landscapesImages.length - 1) {
    updateLandscapesImage(index + 1);
  } else {
    updateLandscapesImage(0);
  }
}

// Fonction pour charger les images visibles
function loadVisibleImages() {
  landscapesImages.forEach((image) => {
    if (isElementInViewport(image) && !image.hasAttribute("data-loaded")) {
      image.setAttribute("src", image.getAttribute("data-src"));
      image.setAttribute("data-loaded", true);
    }
  });
}

// Fonction pour vérifier si un élément est visible dans la fenêtre
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Écouter l'événement de scroll pour charger les images visibles
window.addEventListener("scroll", loadVisibleImages);

// Charger les images visibles initialement
loadVisibleImages();

///////////////////////////////////    Slider Archeology   /////////////////////////////////

archeologyImages.forEach((item, i) => {
  item.addEventListener("click", () => {
    updateArcheologyImage(i);
    popup.classList.toggle("active");
    overlay.classList.toggle("open");
  });
});
function updateArcheologyImage(i) {
  const selectedImage = archeologyImages[i];
  largeImage.src = selectedImage.getAttribute("data-src");
  largeImage.alt = selectedImage.alt;
  let altText = selectedImage.alt;
  imageName.innerHTML = altText.replace(/\d/g, "").replace(/_/g, " ");
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

// Fonction pour charger les images visibles
function loadVisibleImages() {
  archeologyImages.forEach((image) => {
    if (isElementInViewport(image) && !image.hasAttribute("data-loaded")) {
      image.setAttribute("src", image.getAttribute("data-src"));
      image.setAttribute("data-loaded", true);
    }
  });
}

// Fonction pour vérifier si un élément est visible dans la fenêtre
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Écouter l'événement de scroll pour charger les images visibles
window.addEventListener("scroll", loadVisibleImages);

// Charger les images visibles initialement
loadVisibleImages();

///////////////////////////////////    Slider Animals   /////////////////////////////////

animalsImages.forEach((item, i) => {
  item.addEventListener("click", () => {
    updateAnimalsImage(i);
    popup.classList.toggle("active");
    overlay.classList.toggle("open");
  });
});
function updateAnimalsImage(i) {
  const selectedImage = animalsImages[i];
  largeImage.src = selectedImage.getAttribute("data-src");
  largeImage.alt = selectedImage.alt;
  let altText = selectedImage.alt;
  imageName.innerHTML = altText.replace(/\d/g, "").replace(/_/g, " ");
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

// Fonction pour charger les images visibles
function loadVisibleImages() {
  animalsImages.forEach((image) => {
    if (isElementInViewport(image) && !image.hasAttribute("data-loaded")) {
      image.setAttribute("src", image.getAttribute("data-src"));
      image.setAttribute("data-loaded", true);
    }
  });
}

// Fonction pour vérifier si un élément est visible dans la fenêtre
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Écouter l'événement de scroll pour charger les images visibles
window.addEventListener("scroll", loadVisibleImages);

// Charger les images visibles initialement
loadVisibleImages();

////////////////////////////////         Dark Mode             /////////////////////////

const body = document.querySelector("body");
const toggleMode = document.querySelector(".theme-switch");

// Vérifier l'état actuel du mode sombre dans le localStorage
const isDarkMode = localStorage.getItem("darkMode") === "true";

// Mettre à jour la classe du body en fonction de l'état du mode sombre
if (isDarkMode) {
  body.classList.add("dark");
} else {
  body.classList.add("light");
}

// Fonction pour activer le mode sombre
function enableDarkMode() {
  body.classList.add("dark");
  body.classList.remove("light");
  localStorage.setItem("darkMode", "true");
}

// Fonction pour activer le mode clair
function enableLightMode() {
  body.classList.add("light");
  body.classList.remove("dark");
  localStorage.setItem("darkMode", "false");
}

// Écouter les clics sur le bouton de basculement du mode
toggleMode.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    enableLightMode();
  } else {
    enableDarkMode();
  }
});

////////////////////////////////         Lazy Loading             /////////////////////////

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  var triggerMargin = 200; // Marge de déclenchement en pixels
  return (
    rect.top >= -triggerMargin &&
    rect.left >= -triggerMargin &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) +
        triggerMargin &&
    rect.right <=
      (window.innerWidth || document.documentElement.clientWidth) +
        triggerMargin
  );
}

// Fonction pour charger les images visibles
function loadVisibleImages() {
  var lazyImages = document.querySelectorAll(".lazy-image");
  lazyImages.forEach(function (image) {
    if (isElementInViewport(image)) {
      image.setAttribute("src", image.getAttribute("data-src"));
      image.style.opacity = "1";
    }
  });
}

// Charger les images visibles au chargement initial
window.addEventListener("load", loadVisibleImages);

// Charger les images visibles lors du défilement
window.addEventListener("scroll", loadVisibleImages);

/////////////   Envoi Mail  /////////

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_d8tq89d";
  const templateID = "template_49gf0jq";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Votre message a bien été envoyé !!");
    })
    .catch((err) => console.log(err));
}
