const header = document.querySelector(".header");
const nav = document.getElementById("nav");
const toggle = document.getElementById("navToggle");

const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll);
onScroll();

toggle.addEventListener("click", () => nav.classList.toggle("is-open"));
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("is-open")));

document.getElementById("ano").textContent = new Date().getFullYear();
