const hexBtn = document.querySelector("#hexBtn");
const displayHexColor = document.querySelector("#colorBox");
const copyHexColor = document.querySelector("#copyHexColorBtn");

// console.log(displayHexColor);

let copyColor = "";
hexBtn.addEventListener("click", () => {
  const hexNumbersets = "0123456789abcdef";
  let hexOutput = "";

  for (let i = 0; i < 6; i++) {
    const hexIndex = Math.floor(Math.random() * hexNumbersets.length);
    hexOutput += hexNumbersets.charAt(hexIndex);
  }

  displayHexColor.textContent = `${hexOutput.toUpperCase()}`;
  displayHexColor.style.backgroundColor = `#${hexOutput}`;

  copyColor = hexOutput;
});
//Copy the Hex color
function copyHexColorToclipBoord() {
  // console.log(`#${hexOutput}`);
  navigator.clipboard.writeText(`#${copyColor}`);
  alert("The Hex color has been coppied.");
}
copyHexColor.addEventListener("click", copyHexColorToclipBoord);

//RGB Color**************************
/*
const getRedInput = document.querySelector("#red");
const getGreenInput = document.querySelector("#green");
const getBlueInput = document.querySelector("#blue");
const dispalyRGB = document.querySelector("#rgbValue");

function rgbColor() {
    const rgbColorValue = `rgb(${getRedInput.value},${getGreenInput.value},${getBlueInput.value})`;

    // Update text and background
    dispalyRGB.textContent = rgbColorValue;
    dispalyRGB.style.backgroundColor = rgbColorValue;

    [getRedInput, getGreenInput, getBlueInput].forEach((slider) => {
        slider.addEventListener("input", rgbColor);
    });
}
rgbColor();
*/
//RGB Color**************************
const getRedInput = document.querySelector("#red");
const getGreenInput = document.querySelector("#green");
const getBlueInput = document.querySelector("#blue");
const dispalyRGB = document.querySelector("#rgbValue");

const rgbBtn = document.querySelector("#rgbBtn");

rgbBtn.addEventListener("click", () => {
  const rgbColorValue = `rgb(${getRedInput.value},${getGreenInput.value},${getBlueInput.value})`;
  console.log(rgbColorValue);

  dispalyRGB.textContent = rgbColorValue;
  dispalyRGB.style.backgroundColor = rgbColorValue;
});
