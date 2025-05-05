const hexBtn = document.querySelector("#hexBtn");
// console.log(colorBox);

hexBtn.addEventListener("click", () => {
  const displayColor = document.querySelector("#colorBox");
  const hexNumberSets = "0123456789abcdef";
  let hexColor = "";

  for (let i = 0; i < 6; i++) {
    //generate a randome number based on the hexNumber variable
    const randomIndex = Math.floor(Math.random() * hexNumberSets.length);
    hexColor += hexNumberSets.charAt(randomIndex);
  }
  //Display the Code on the Screen
  displayColor.textContent = `#${hexColor.toUpperCase()}`;

  //change the color box
  displayColor.style.backgroundColor = `#${hexColor}`;
});

/*
const hexBtn = document.querySelector("#hexBtn");

hexBtn.addEventListener("click", () => {
  const colorBox = document.querySelector("#colorBox");
  const hexNumberSet = "0123456789abcdef";
  let hexNumberOutput = "";
  for (let i = 0; i < 6; ++i) {
    const randomIndex = Math.floor(Math.random() * hexNumberSet.length);
    hexNumberOutput += hexNumberSet.charAt(randomIndex);
  }

  colorBox.textContent = `#${hexNumberOutput.toUpperCase()}`;
  colorBox.style.backgroundColor = `#${hexNumberOutput}`;

  console.log(hexNumberOutput);
});

*/
