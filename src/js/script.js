(() => {
  // MENU
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("open");
  });

  // SCROLL
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("scroll-change", window.scrollY > 0);
  });
})();
