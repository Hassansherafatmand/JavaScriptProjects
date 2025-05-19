const tabsBtnnGroup = document.querySelector(".tabs__button-group");
const tabsBtns = document.querySelectorAll(".abs__button");
const tabsContent = document.querySelectorAll(".tabs__content");

tabsBtnnGroup.addEventListener("click", (btnElement) => {
  const currentId = btnElement.target.dataset.id;

  if (currentId) {
    tabsBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    btnElement.target.classList.add("active");

    tabsContent.forEach((content) => {
      content.classList.remove("active");
    });

    const currentElement = document.getElementById(currentId);
    currentElement.classList.add("active");
  }
});
