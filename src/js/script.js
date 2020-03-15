(() => {
  // MENU
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  // const links = document.querySelectorAll(".nav-links li");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("open");

    // links.forEach(link => {
    //   link.classList.toggle("fade");
    // });
  });

  // SCROLL
  window.addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    header.classList.toggle("scroll-change", window.scrollY > 0);
  });
})();
