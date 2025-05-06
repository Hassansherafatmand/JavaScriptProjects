const container = document.querySelector(".container");

//Using XMLHttpRequest Method ********************************
function usingXmlHttpRequest() {
  const xhrRequest = new XMLHttpRequest();

  xhrRequest.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhrRequest.responseType = "json";
  xhrRequest.onload = function () {
    if (xhrRequest.status === 200) {
      console.log("Success", xhrRequest.response);
      displayInfo(xhrRequest.response);
    } else {
      console.log("Some Error occured");
    }
  };

  xhrRequest.send();
}

//Using Fetch Request Method ********************************
function usingFetchRequest() {
  const fetchRequest = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  fetchRequest
    .then((response) => {
      if (!response) throw new Error(`Http Error Ocurred: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      displayInfo(data);
    })
    .catch((error) => {
      console.log("Fetch an Error: ", error);
    });
}

//Using Async Await Request Method ********************************
async function usingAsyncAwaitRequest() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "Get",
  });

  const respons = await response.json();
  console.log(respons);
  displayInfo(respons);
}

//combing Xhr and promise and then calling it using Async method
function helperMethod(method, url) {
  const promise = new Promise((resolve, reject) => {
    const xhrRequest = new XMLHttpRequest();
    xhrRequest.open(method, url);
    xhrRequest.responseType = "json";
    xhrRequest.onload = () => {
      if (xhrRequest.status === 200) {
        resolve(xhrRequest.response);
      } else {
        reject(xhrRequest.response);
      }
    };
    xhrRequest.send();
  });
  return promise;
}
async function fetchusingXhrAndAsyncAwait() {
  const response = await helperMethod(
    "Get",
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(response);
  displayInfo(response);
}
/*

*/

//Function Display the info
function displayInfo(posts) {
  container.innerHTML = posts
    .map((post) => {
      return `
    <div>
        <h2>${post.title}</h2>
        <div>
            <p> ${post.body}</p>
        </div>
    </div>
    `;
    })
    .join("");
}

//Calling methods
// usingXmlHttpRequest();
// usingFetchRequest();
// usingAsyncAwaitRequest();

fetchusingXhrAndAsyncAwait();
