document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");
  const navLinksWithSubmenu = document.querySelectorAll(".nav-menu > li > a i");
  const faqItems = document.querySelectorAll(".faq-item");

  // Gère l'affichage du menu mobile
  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // Gère l'affichage des sous-menus sur mobile
  navLinksWithSubmenu.forEach((icon) => {
    icon.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const submenu = this.parentElement.nextElementSibling;
        if (submenu) {
          submenu.classList.toggle("active");
        }
      }
    });
  });

  // Gère l'accordéon pour la section FAQ
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      // Ferme tous les autres éléments FAQ
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
      // Ouvre ou ferme l'élément cliqué
      item.classList.toggle("active");
    });
  });
});
