const headerToggle = document.querySelector(".header-toggle");
const headerMenu = document.querySelector(".header-menu");

headerToggle.addEventListener("click", (e) => {
  headerMenu.classList.replace("header-menu", "header-menu-expanded");
});

window.addEventListener("click", function (e) {
  if (!headerMenu.contains(e.target) && !e.target.matches(".header-toggle")) {
    headerMenu.classList.replace("header-menu-expanded", "header-menu");
  }
});
