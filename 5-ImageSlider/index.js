//Variable Definition
const slider = document.querySelector(".slider");
const dotsContainer = document.querySelector(".dots-container");

//Function Definition
async function fetchUsingAsyncMethod() {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=2&limit=5",
      {
        method: "GET",
      }
    );
    const imageList = await response.json();
    displayImageList(imageList);
  } catch (error) {
    console.log(error);
  }
}

//Display Image list
function displayImageList(getImageList) {
  slider.innerHTML = getImageList
    .map(
      (item) => `
     <div class="slide">
        <img src=${item.download_url} alt=${item.id}>
    </div>
  
  `
    )
    .join(" ");
  dotsContainer.innerHTML = getImageList
    .map(
      (item, index) => ` 
     <span class="dot ${
       index === 0 ? "active" : ""
     }" data-slide=${index}></span>   
  `
    )
    .join(" ");
}

fetchUsingAsyncMethod();

setTimeout(() => {
  //SliderFunctionality begins
  const slides = document.querySelectorAll(".slide");
  const preBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentSlide = 0;
  console.log(slides, "slides");

  //Add the active class to the currentslide and remove the rest
  function activeDot(getCurrentSlide) {
    document
      .querySelectorAll(".dot")
      .forEach((dotItem) => dotItem.classList.remove("active"));

    document
      .querySelector(`.dot[data-slide="${getCurrentSlide}"]`)
      .classList.add("active");
  }

  //change the photo based on the current slide
  function changeCurrentSlide(getCurrentSlide) {
    slides.forEach(
      (slideItem, index) =>
        (slideItem.style.transform = ` translateX(${
          100 * (index - getCurrentSlide)
        }%)`)
    );
  }

  changeCurrentSlide(currentSlide);

  //Next Button
  nextBtn.addEventListener("click", () => {
    currentSlide++;
    if (slides.length - 1 < currentSlide) currentSlide = 0;
    changeCurrentSlide(currentSlide);
    activeDot(currentSlide);
  });

  //Prev Button
  preBtn.addEventListener("click", () => {
    currentSlide--;
    if (0 > currentSlide) {
      console.log(currentSlide);
      currentSlide = slides.length - 1;
    }

    changeCurrentSlide(currentSlide);
    activeDot(currentSlide);
  });

  dotsContainer.addEventListener("click", (event) => {
    // console.log(event.target.classList, event.target.dataset.slide);

    //check if has a class dot
    if (event.target.classList.contains("dot")) {
      const currentSlide = event.target.dataset.slide;
      changeCurrentSlide(currentSlide);
      activeDot(currentSlide);
    }
  });
}, 1000);
function handleImageSlider() {}
// handleImageSlider();
