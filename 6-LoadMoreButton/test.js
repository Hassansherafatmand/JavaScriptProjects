//This is a More Load Button project.

const prodcutContainer = document.querySelector(".product-container");
const loadMoreBtn = document.getElementById("loadMoreBtn");
let currentSteps = 0;
//Funtion Definition
//======================================================
async function fetchListOfProduct(getCurrentSteps) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products?limit=8&skip=${
        getCurrentSteps === 0 ? 0 : getCurrentSteps * 8
      } `,
      {
        method: "GET",
      }
    );

    const result = await response.json();

    if (result && result.products) dispplayListOfProducts(result.products);
  } catch (error) {
    console.log(error);
  }
}

function dispplayListOfProducts(productItems) {
  productItems.forEach((productItem) => {
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

    //Adding the Property
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

  console.log(prodcutContainer.childElementCount);
  if (prodcutContainer.children.length === 32) {
    loadMoreBtn.classList.add("disabled");
    loadMoreBtn.setAttribute("disabled", true);
  }
}

fetchListOfProduct(currentSteps);

loadMoreBtn.addEventListener("click", () => {
  fetchListOfProduct(currentSteps++);
});
