"use strict";
const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > 100) {
    home.classList.remove("hidden")
  } else {
    home.classList.add("hidden")
  }
})

home.addEventListener('click', ev => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
})
