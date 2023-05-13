// appear Ul list
let btn = document.getElementById("btn");
let myList = document.getElementById("list");
let playBtn = document.getElementById("play-btn");
let available = document.getElementById("available");
let dwld = document.getElementById("dwld");

btn.addEventListener("click", () => {
  myList.classList.toggle("show");
  myList.style.zIndex = "10000";
  playBtn.classList.toggle("zindex");
  dwld.classList.toggle("zindex");
});

// Switch Info SKills > experience
let rowOne = document.getElementById("rowOne");
let rowTwo = document.getElementById("rowTwo");

btnTwo.addEventListener("click", function () {
  rowOne.classList.add("hide");
  rowTwo.classList.remove("hide");
  this.classList.add("active");
  btnOne.classList.remove("active");
});

btnOne.addEventListener("click", function () {
  rowOne.classList.remove("hide");
  rowTwo.classList.add("hide");
  this.classList.add("active");
  btnTwo.classList.remove("active");
});

// Click On i remove its parent
let ex = document.getElementById("ex");
ex.onclick = () => {
  this.parentElement.classList.add("show");
};
playBtn.onclick = () => {
  available.classList.toggle("show");
};

// Menu Porjects
let all = document.getElementById("all");
let uiUx = document.getElementById("ui-ux");
let grDes = document.getElementById("grDes");
let projects = document.querySelectorAll("#allProjts div");

all.addEventListener("click", function (e) {
  projects.forEach((e) => {
    if (e.classList.contains("hide")) {
      e.classList.remove("hide");
    }
  });
  this.classList.add("active");
  uiUx.classList.remove("active");
  grDes.classList.remove("active");
  e.preventDefault();
});

uiUx.addEventListener("click", function (e) {
  projects.forEach((e) => {
    if (e === projects[0] || e === projects[2] || e === projects[4]) {
      e.classList.remove("hide");
    } else {
      e.classList.add("hide");
    }
  });
  all.classList.remove("active");
  this.classList.add("active");
  grDes.classList.remove("active");
  e.preventDefault();
});

grDes.addEventListener("click", function (e) {
  projects.forEach((e) => {
    if (e === projects[0] || e === projects[2] || e === projects[4]) {
      e.classList.add("hide");
    } else {
      e.classList.remove("hide");
    }
  });
  all.classList.remove("active");
  uiUx.classList.remove("active");
  this.classList.add("active");
  e.preventDefault();
});

// initialize Swiper

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

// hide and appear header

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY < 250) {
    header.style.transform = "translateY(-100%)";
    header.style.zIndex = "-1";
  } else if (window.scrollY >= 250) {
    // header.style.display = "block";
    header.style.transform = "translateY(0%)";
    header.style.position = "fixed";
    header.style.zIndex = "100000";
    header.style.top = "0";
  }
});

// aniamted skills

// Get all the progress spans
const progressSpans = document.querySelectorAll("[data-progress]");

// Function to update the width of the progress span
function updateProgressWidth() {
  // Check if scrollY is greater than or equal to 1000px
  if (window.scrollY >= 1200) {
    // Loop through all the progress spans and set their width to the value of their data-progress attribute
    progressSpans.forEach((span) => {
      const progressValue = span.getAttribute("data-progress");
      span.style.width = progressValue;
    });
  } else {
    // Loop through all the progress spans and set their width to 0
    progressSpans.forEach((span) => {
      span.style.width = "0";
    });
  }
}

// Add an event listener to the window object to call the updateProgressWidth function when the user scrolls
window.addEventListener("scroll", updateProgressWidth);
