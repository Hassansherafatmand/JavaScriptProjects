const stars = document.querySelectorAll(".star");
const ratingValue = document.querySelector(".selected-rating-value");

// stars.forEach((star, index) => {
//
//    star.addEventListener("click", () => {
//     ratingValue.dataset.rating = index + 1;
//     console.log(ratingValue);
//   });
// });

let currentTotalSelectedStars = 0;

stars.forEach((star, index) => {
  star.dataset.rating = index + 1;
  star.addEventListener("mouseover", handleMouseOver);
  star.addEventListener("click", handleOnClick);
  star.addEventListener("mouseleave", handleMouseLeave);
});

function handleMouseOver(event) {
  const currentValueRating = event.target.dataset.rating;
  console.log("======================");
  console.log(currentValueRating);
  if (!currentValueRating) return currentValueRating;
  else highlightRatingStar(currentValueRating);
}
function handleOnClick(event) {
  const currentValueRating = event.target.dataset.rating;
  ratingValue.textContent = currentValueRating;
}
function handleMouseLeave(event) {}

//==========================
function highlightRatingStar(getCurrentValueRating) {
  for (let i = 0; i < 5; i++) {
    if (i < getCurrentValueRating) {
      stars[i].classList.replace("star", "currentStars");
    } else stars[i].classList.replace("currentStars", "star");
  }
}

// const stars = document.querySelectorAll(".star");
// const selectedRatingValue = document.querySelector(".selected-rating-value");
// let currentRating = 0;

// stars.forEach((star, index) => {
//   star.addEventListener("click", () => {
//     currentRating = index + 1;
//     selectedRatingValue.textContent = currentRating;
//     console.log(currentRating);
//     updateStars();
//   });

//   star.addEventListener("mouseover", () => {
//     highlightStars(index);
//   });

//   star.addEventListener("mouseout", () => {
//     highlightStars(currentRating - 1);
//   });
// });

// function highlightStars(index) {
//   console.log(`index is: ${index}`);
//   stars.forEach((star, i) => {
//     if (i <= index) {
//       star.style.color = "gold";
//     } else {
//       star.style.color = "rgb(75, 75, 75)";
//     }
//   });
// }

// function updateStars() {
//   highlightStars(currentRating - 1);
// }
