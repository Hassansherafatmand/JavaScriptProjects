//This is a More Load Button project.

//Global variable definition
const prodcutContainer = document.querySelector(".product-container");
const loadMoreBtn = document.getElementById("loadMoreBtn");
let currentSteps = 0;

//Funtion Definition
//======================================================
async function fetchListOfProduct(getCurrentSteps) {
  //Define the Response variable to fetch data in form of an object
  const response = await fetch(
    `https://dummyjson.com/products?limit=8&skip=${
      getCurrentSteps === 0 ? 0 : getCurrentSteps * 10
    }`,
    {
      method: "GET",
    }
  );

  const result = await response.json();
  //   console.log(result);

  if (result && result.products) dispplayListOfProducts(result.products);
}
//Dispaly content
function dispplayListOfProducts(productList) {
  console.log(productList);
  productList.forEach((productItem) => {
    //Creating Elements
    const productWrapper = document.createElement("div");
    const productThumbnail = document.createElement("img");
    const productTitle = document.createElement("h4");
    const prodcutPrice = document.createElement("span");
    const productDescription = document.createElement("p");

    //Assigning Values
    productThumbnail.src = productItem.thumbnail;
    productTitle.textContent = productItem.title;
    prodcutPrice.textContent = productItem.price;
    productDescription.textContent = productItem.description;

    //Adding the Property classList
    productThumbnail.classList.add("product-image");
    productTitle.classList.add("product-title");
    prodcutPrice.classList.add("product-price");
    productDescription.classList.add("product-description");

    //Appending  Elements
    productWrapper.appendChild(productThumbnail);
    productWrapper.appendChild(productTitle);
    productWrapper.appendChild(prodcutPrice);
    productWrapper.appendChild(productDescription);
    prodcutContainer.appendChild(productWrapper);
  });

  if (prodcutContainer.children.length === 24) {
    loadMoreBtn.setAttribute("disabled", true);
  }
}
fetchListOfProduct(currentSteps);

loadMoreBtn.addEventListener("click", () => {
  fetchListOfProduct(currentSteps++);
});
