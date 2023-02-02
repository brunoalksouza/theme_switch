const btn = document.querySelector("#btn");
const background = document.querySelector("html");

let open = true;

function themeSwitch() {
  if (background.style.backgroundColor === "black") {
    background.style.backgroundColor = "white";
  }
  else {
    background.style.backgroundColor = "black"
  }
}
