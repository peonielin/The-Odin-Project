import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

function switchTab(tab) {
  const content = document.getElementById("content");
  content.innerHTML = "";

  // update active button
  document.querySelectorAll(".nav-links button").forEach((btn) => {
    if (btn.textContent.trim().toLowerCase() === tab) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  if (tab === "home") loadHome();
  if (tab === "menu") loadMenu();
  if (tab === "about") loadAbout();
}

// load home page on start
switchTab("home");

// hook up nav buttons
document.querySelectorAll(".nav-links button").forEach((btn) => {
  btn.addEventListener("click", () => {
    switchTab(btn.textContent.trim().toLowerCase());
  });
});
