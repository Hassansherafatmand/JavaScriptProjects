const changeBtnColor = document.querySelector("button");
const heading = document.querySelector(".container").querySelector("h2");
const body = document.querySelector("body");

changeBtnColor.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
});
