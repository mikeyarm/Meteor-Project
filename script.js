function checkScroll() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// Listen for scroll
window.addEventListener("scroll", checkScroll);

// Check on page load
window.addEventListener("load", checkScroll);