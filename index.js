const icons = document.querySelector("#icons");
const nav = document.querySelector("#nav");
const links = document.querySelectorAll("nav li");
console.log(links);

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
