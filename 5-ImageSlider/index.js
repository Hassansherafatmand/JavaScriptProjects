<<<<<<< HEAD
//This is a Dynamic Image Slider project using Async fetch method

=======
>>>>>>> 9b2bb0412aa07b7a151d4d947ad230aa792df586
//Variable Definition
const slider = document.querySelector(".slider");
const dotsContainer = document.querySelector(".dots-container");

<<<<<<< HEAD
//Fetching Data Section
//-----------------------------------------------------------------
async function fetchDataUsingAsyncMethod() {
=======
//Function Definition
async function fetchUsingAsyncMethod() {
>>>>>>> 9b2bb0412aa07b7a151d4d947ad230aa792df586
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=2&limit=5",
      {
        method: "GET",
      }
    );
    const imageList = await response.json();
<<<<<<< HEAD
    console.log(imageList);
    displayImageSlider(imageList);
=======
    displayImageList(imageList);
>>>>>>> 9b2bb0412aa07b7a151d4d947ad230aa792df586
  } catch (error) {
    console.log(error);
  }
}

<<<<<<< HEAD
// Dispaly Image function
function displayImageSlider(getImageSlider) {
  slider.innerHTML = getImageSlider
    .map(
      (item) => `
      <div class= "slide">
      <img src=${item.download_url} alt=${item.id} />
      </div>
  `
    )
    .join("");

  dotsContainer.innerHTML = getImageSlider
    .map(
      (item, index) => `
    <span class="dot ${
      index === 0 ? "active" : ""
    } " data-image-slide=${index} ></span>

    `
    )
    .join("");
}

fetchDataUsingAsyncMethod();

//Functionality
//=============================================================
setTimeout(() => {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentSlide = 0;

  //Function that give an activeClass to the dots
  //=============================================
  function activeDots(getCurrentSlide) {
    const removeActiveClass = document.querySelectorAll(".dot");
    removeActiveClass.forEach((item) => {
      item.classList.remove("active");
    });

    const activeClass = document.querySelector(
      `.dot[data-image-slide="${getCurrentSlide}"]`
    );
    activeClass.classList.add("active");
  }

  //function that changes the slides
  //=============================================
  function changeCurrentSlide(getCurrentSlide) {
    const slides = document.querySelectorAll(".slide");
=======
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
>>>>>>> 9b2bb0412aa07b7a151d4d947ad230aa792df586
    slides.forEach(
      (slideItem, index) =>
        (slideItem.style.transform = ` translateX(${
          100 * (index - getCurrentSlide)
        }%)`)
    );
  }
<<<<<<< HEAD
  changeCurrentSlide(currentSlide);

  //PrevBtn click
  //=============
  prevBtn.addEventListener("click", () => {
    currentSlide--;
    if (currentSlide < 0) currentSlide = slides.length - 1;

    activeDots(currentSlide);
    changeCurrentSlide(currentSlide);
  });

  //NextBtn click
  //=============
  nextBtn.addEventListener("click", () => {
    console.log(currentSlide);
    currentSlide++;
    if (currentSlide > slides.length) currentSlide = 0;

    activeDots(currentSlide);
    changeCurrentSlide(currentSlide);
  });

  //DotsContainer click
  //=============
  dotsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("dot")) {
      const currentSlide = event.target.dataset.imageSlide;

      activeDots(currentSlide);
      changeCurrentSlide(currentSlide);
    }
  });
}, 1000);
=======

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
>>>>>>> 9b2bb0412aa07b7a151d4d947ad230aa792df586
