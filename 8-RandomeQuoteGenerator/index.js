//Variable definition
/*
async function fetchDataUsingAsyncMethod() {
  try {
    const response = await fetch("https://api.allorigins.win/raw?url=", {
      method: "GET",
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

fetchDataUsingAsyncMethod();*/

function fetchDataUsingAsyncMethod() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}
fetchDataUsingAsyncMethod();
