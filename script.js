window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.style.height = "35px";
  } else {
    navbar.style.height = "90px";
  }
  // Ci-dessus, navbar est un Id, donc on peut l'appeler directement dans notre fonction. Si cela avait été une classe (au lieu d'un Id), il aurait d'abord fallu l'affecter à une constante avec le querySelector, ce qui aurait donné : const navbar = document.querySelector("navbar")

  // window.addEventListener("scroll", () => {
  //   if (window.scrollY > 220) {
  //     imgImprovise.style.opacity = "1";
  //     imgImprovise.style.transform = "translateX(0px)";
  //   } else {
  //     imgImprovise.style.opacity = "0";
  //     imgImprovise.style.transform = "translateX(-200px)";
  //   }
  // });

  // - Ci-dessus, le code que j'avais fait, mais qui ne focntionne que si je suis en écran grand. Car le problème, c'est que dès que je vais réduire l'écran, le ScrollY va changer puisque la fenêtre va s'allonger vers le bas.
  // - Solution : au lieu de parler en scrollY de la fenêtre, on va parler en pourcentage ->> voir la solution ci-dessous

  //

  // Ci-dessous, c'est la solution pour passer du scrollY de notre page, à un pourcentage du Y.
  // document.body.offsetHeight représente la taille totale de la fenêtre
  // window.scrollY est la position du y, mais la partie supérieure de notre scroll. Explication : lorsque je scroll vers le bas, il apparaît une bar de scroll à la droite de l'écran. Cette bar fait peut-être qqch comme 100px de hauteur. Le Y du scrollY est donc en haut de cette bar. Il manque donc toute la partie correspondant à la hauteur de notre bar de scroll.
  // Donc on lui ajoute window.innerHeight, qui correspond à la hauteur de cette bar de scroll
  // La formule totale est donc window.scrollY + wondow.innerHeight (pour avoir la position actuelle du Y) que je divise par la taille réelle de la page totale. j'obtiens alors un pourcentage de la  position du Y par rapport à la page.

  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  // (Explication de cette formule juste au-dessus de la formule)

  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "none";
    // Ici le "none" revient au même qu'écrire "translateX(Opx)"
  }
  //   else {
  //     imgImprovise.style.opacity = 0;
  //     imgImprovise.style.transform = "translateX(-200px)";
  //   }

  // Comme convenu ci-dessus on utilise un pourcentage de Y sur la page. Ici on dit "lorsque l'on est à 45% de la page"

  let playOnce = true;
  // Cette variable permet de créer un événement pour que la fenêtre popup ne s'ouvre qu'une seule fois. On le fera avec un booléen. Aussitôt apparue, on passera cette valeur en false pour ne pas que la popup réapparaisse à chaque changement de valeur de scroll

  if (scrollValue > 0.85 && playOnce === true) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOnce === false;
    // On passe immédiatement en false pour ne plus que la popup réapparaisse à chaque scroll
  }
});
// IMPORTANT : C'est ici seulement que se referme la parenthèse du window.addEventListener ouverte tout en haut de cette page.
// En effet, pour un même événement, en l'occurence le "scroll", il faut mettre toutes les exécutions dans une seule fonction. Car j'avais ouvert 3 fonctions window.addEventListener sur le même événement de scroll, et cela m'vait fait des conflits étranges.

window.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(400px)";
});
// Ci-dessus l'événement du click pour fermer la popup.
