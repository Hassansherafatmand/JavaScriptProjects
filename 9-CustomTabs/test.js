const tabsBtnGroup = document.querySelector(".tabs__button-group");
const tabsBtns = document.querySelectorAll(".tabs__button");
const tabsContent = document.querySelectorAll(".tabs__content");

tabsBtnGroup.addEventListener("click", (event) => {
  const currentId = event.target.dataset.id;

  if (currentId) {
    tabsBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    event.target.classList.add("active");

    tabsContent.forEach((content) => {
      content.classList.remove("active");
    });

    const currentElement = document.getElementById(currentId);
    currentElement.classList.add("active");
  }
});
