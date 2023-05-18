let navbar = document.querySelector(".navbar");

let navbarOffsetTop = navbar.offsetTop;

let sections = document.querySelectorAll("section");

let navbarlinks = document.querySelectorAll(".navbar-link");

let progress = document.querySelector(".progress-bars-wrapper");

let progressLevel = [90, 80, 80, 70, 50, 30, 10];

window.addEventListener("scroll", () => {
  mainFunction(); // Makes sure the function runs on window scroll.
});

// Our composite function:

const mainFunction = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  /*NavbarLinks highlighting on scroll */
  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navbarlinks.forEach((navbarlink) => {
        navbarlink.classList.remove("change");
      });
      navbarlinks[i].classList.add("change");
    }
  });

  /*Setting up the progress Bar slider */
  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll(".progress-percent").forEach((el, i) => {
      el.style.width = `${progressLevel[i]}%`;
      // outputting the progress value on the .progress-text element
      el.previousElementSibling.firstElementChild.textContent = `${progressLevel[i]}%`;
    });
  }
};
// This makes sure the function runs once the page before scrolling, to avoid some unexpected behaviours:
mainFunction();

window.addEventListener("resize", () => {
  console.log("reloaded");
  location.reload();
});
