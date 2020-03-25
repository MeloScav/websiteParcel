(() => {
  // MENU
  const body = document.body;
  const html = body.parentElement;
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    html.classList.toggle("no-scroll");
    body.classList.toggle("no-scroll");
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("open");
  });

  // SCROLL
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("scroll-change", window.scrollY > 0);
  });
})();
