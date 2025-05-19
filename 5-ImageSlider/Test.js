//This is a Dynamic Image Slider project using Async fetch method

//Variable Definition
const slider = document.querySelector(".slider");
const dotsContainer = document.querySelector(".dots-container");

//Fetching Data Section
//-----------------------------------------------------------------
//Fetching Data Using sync Method
async function fetchDataUsingAsyncMethod() {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=2&limit=5",
      {
        method: "GET",
      }
    );
    const imageList = await response.json();
    displayImageSlider(imageList);
  } catch (error) {
    console.log(error);
  }
}

//Display Image Slider
function displayImageSlider(getImageSlider) {
  slider.innerHTML = getImageSlider
    .map(
      (item) => `
     <div class="slide">
        <img src=${item.download_url} alt=${item.id}>
    </div>
  
  `
    )
    .join(" ");
  dotsContainer.innerHTML = getImageSlider
    .map(
      (item, index) => ` 
     <span class="dot ${
       index === 0 ? "active" : ""
     }" data-image-slide="${index}"></span>
  
  `
    )
    .join(" ");
}

fetchDataUsingAsyncMethod();

//Sliding the Image Section
//-----------------------------------------------------------------

setTimeout(() => {
  //variable Definition
  const slides = document.querySelectorAll(".slide");
  const nextBTn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  let currentSlide = 0;

  //Functionality section
  //---------------------------
  //Remove and Add Active Class on current slide
  function activeDots(getCurrentSlide) {
    const removeClassDots = document.querySelectorAll(".dot");
    removeClassDots.forEach((item) => {
      item.classList.remove("active");
    });

    const activeClass = document.querySelector(
      `.dot[data-image-slide="${getCurrentSlide}"]`
    );

    activeClass.classList.add("active");

    // document
    //   .querySelector(`.dot[data-slide="${getCurrentSlide}"]`)
    //   .classList.add("active");
  }

  //Change the image of the slider by clicking next or prev button
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
  nextBTn.addEventListener("click", () => {
    currentSlide++;

    if (currentSlide > slides.length - 1) currentSlide = 0;

    activeDots(currentSlide);
    changeCurrentSlide(currentSlide);
  });

  //Prev Button
  prevBtn.addEventListener("click", () => {
    currentSlide--;

    if (currentSlide < 0) currentSlide = slides.length - 1;

    activeDots(currentSlide);
    changeCurrentSlide(currentSlide);
  });

  dotsContainer.addEventListener("click", (event) => {
    // console.log(event.target.classList, event.target.dataset.slide);
    //check if has a class dot
    if (event.target.classList.contains("dot")) {
      const currentSlide = event.target.dataset.imageSlide;
      console.log(event.target.classList, event.target.dataset.imageSlide);
      changeCurrentSlide(currentSlide);

      activeDots(currentSlide);
    }
  });
}, 1000);
