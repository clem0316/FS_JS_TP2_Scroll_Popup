// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.style.height = "35px";
  } else {
    navbar.style.height = "90px";
  }
});
// Ci-dessus, navbar est un Id, donc on peut l'appeler directement dans notre fonction. Si cela avait été une classe (au lieu d'un Id), il aurait d'abord fallu l'affecter à une constante avec le querySelector, ce qui aurait donné : const navbar = document.querySelector("navbar")

window.addEventListener("scroll", () => {
  if (window.scrollY > 220) {
    imgImprovise.style.opacity = "1";
    imgImprovise.style.transform = "translateX(0px)";
  } else {
    imgImprovise.style.opacity = "0";
    imgImprovise.style.transform = "translateX(-200px)";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 1150) {
    popup.style.opacity = "1";
    popup.style.transform = "translateX(0px)";
  } else {
    popup.style.opacity = "0";
    popup.style.transform = "translateX(400px)";
  }
});

window.addEventListener("click", () => {
  popup.style.opacity = "0";
  popup.style.transform = "translateX(400px)";
});
