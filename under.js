const menu = document.querySelector(".nav-list-x");
const menuItems = document.querySelector(".nav-item-x");
const hamburger = document.querySelector(".hamburger-x");
const closeIcon = document.querySelector(".menuIcon");
const container = document.querySelector(".container-x");
const menuIcon = document.querySelector(".closeIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    container.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    container.style.display = "block";
  }
}

hamburger.addEventListener("click", toggleMenu);

typed = new Typed(".under", {
  strings: ["LEEN SULAMI", "LEEN SULAMI", "A DEVELOPER"],
  smartBackspace: true,
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
  loopCount: Infinity,
  backDelay: 1000,
  startDelay: 1000,
});
