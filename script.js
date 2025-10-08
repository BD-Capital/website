// === Menü öffnen/schließen bei Klick auf Toggle-Button ===
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// === Scroll-basiertes Aktivieren des aktuellen Menüpunkts ===
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
