//Variable defeniation

const stars = document.querySelectorAll(".star");
const selectedRatingValue = document.querySelector(".selected-rating-value");
let currentRating = 0;

stars.forEach((star, index) => {
  star.dataset.rating = index + 1;

  //Mouse over
  star.addEventListener("mouseover", (event) => {
    const currentValueRating = event.target.dataset.rating;
    updateValueratingState(currentValueRating);
  });

  //Mouse cick
  star.addEventListener("click", (event) => {
    const currentRatingValue = event.target.dataset.rating;
    currentRating = currentRatingValue;
    updateValueratingState(currentRatingValue);
  });

  //mouseleave
  star.addEventListener("mouseout", () => {
    updateValueratingState(currentRating);
  });

  //update value rating
  function updateValueratingState(getCurrentValueRating) {
    for (let i = 0; i < 5; i++) {
      if (i < getCurrentValueRating) {
        stars[i].classList.replace("star", "updateStar");
      } else {
        stars[i].classList.replace("updateStar", "star");
      }
    }
  }
});

/* First Approach
const stars = document.querySelectorAll(".star");
const selectedRatingValue = document.querySelector(".selected-rating-value");
let currentValue = 0;

stars.forEach((star, index) => {
  star.dataset.rating = index + 1;

  star.addEventListener("mouseover", handleMouseOver);
  star.addEventListener("click", handleOnClick);
  star.addEventListener("mouseleave", handleLeaveMouse);
});

//Funtion Defeniation
function handleMouseOver(event) {
  const currentValueRating = event.target.dataset.rating;

  if (!currentValueRating) return;
  else updateValueratingState(currentValueRating);
}
function handleOnClick(event) {
  const currentValueRating = event.target.dataset.rating;
  currentValue = currentValueRating;
  // console.log(currentValue);
  updateValueratingState(currentValue);
  selectedRatingValue.textContent = currentValueRating;
}
function handleLeaveMouse() {
  updateValueratingState(currentValue);
}
function updateValueratingState(getCurrentValueRating) {
  for (let i = 0; i < 5; i++) {
    if (i < getCurrentValueRating) {
      stars[i].classList.replace("star", "updateStar");
    } else {
      stars[i].classList.replace("updateStar", "star");
    }
  }
}
*/
/*
//First Approach Practice
const stars = document.querySelectorAll(".star");
const selectedValueRating = document.querySelector(".selected-rating-value");
let currentRating = 0;

stars.forEach((star, index) => {
  star.dataset.rating = index + 1;

  star.addEventListener("mouseover", handleMouseOver);
  star.addEventListener("click", handleOnClick);
  star.addEventListener("mouseleave", handleLeaveMouse);
});
function handleMouseOver(event) {
  const currentRatingValue = event.target.dataset.rating;

  if (!currentRatingValue) return;
  else hadnleUpdateRatingState(currentRatingValue);
}
function handleOnClick(event) {
  const currentRatingValue = event.target.dataset.rating;
  currentRating = currentRatingValue;

  hadnleUpdateRatingState(currentRating);
  selectedValueRating.textContent = currentRating;
}
function handleLeaveMouse() {
  hadnleUpdateRatingState(currentRating);
}

function hadnleUpdateRatingState(getCurrentRatingValue) {
  for (let i = 0; i < 5; i++) {
    if (i < getCurrentRatingValue) {
      stars[i].classList.replace("star", "updateStar");
    } else {
      stars[i].classList.replace("updateStar", "star");
    }
  }
}
*/
