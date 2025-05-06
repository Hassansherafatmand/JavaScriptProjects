//variable Definitaion
const container = document.querySelector(".container");

//Function handle the Http Request
function usingXmlHttpRequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  xhr.responseType = "json";
  xhr.onload = function () {
    if (xhr.status === 200) {
      displayInfo(xhr.response);
    } else {
      console.log(`An Error occured: ${xhr.status}`);
    }
  };

  xhr.send();
}

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

usingXmlHttpRequest();

/*
xhr.responseType = ""; // or just omit this
xhr.onload = function () {
  const raw = xhr.responseText; // raw JSON string
  const parsed = JSON.parse(raw); // manually convert to JS object
  console.log(parsed);
};

*/
//**************************************************** */
// Variable Definition
const containerPost = document.querySelector(".container");

function fetchUsingXHR() {
  const xhr = new XMLHttpRequest(); // Step 1: Create a new request

  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true); // Step 2: Configure it (GET, URL, async)

  xhr.responseType = "json";

  // Step 3: Handle the response
  xhr.onload = function () {
    if (xhr.status === 200) {
      displayResult(xhr.response);
      console.log("Success:", xhr.response); // Raw data
    } else {
      console.log("Some error occurred. Status:", xhr.status);
    }
  };

  // Step 4: Send the request
  xhr.send(); // 🚨 This is essential
}

function displayResult(posts) {
  containerPost.innerHTML = posts
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

fetchUsingXHR(); // Call the function

/*
const xhr = new XMLHttpRequest(); // creating a request
xhr.open("GET", "https://api.example.com/data", true); //opening a connection
xhr.send(); //sending the request
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText); // Raw response
  }
};

xhr.responseType = "json";


const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log("Success:", data);
    } else {
      console.error("Request failed with status:", xhr.status);
    }
  }
};
xhr.send();
*/

/*    
const container = document.querySelector(".container");

//Function that handels the HTTP request
function handleHTTPrequest() {
  const request = fetch("https://jsonplaceholder.typicode.com/posts");

  request
    .then((response) => {
      if (!response) throw new Error(`HTTP Error Ocurrred: ${response.statse}`);
      return response.json();
    })
    .then((data) => {
      displayPosts(data);
      console.log("Success", data);
    })
    .catch((error) => {
      console.log("Fetch an Error: ", error);
    });
}
function displayPosts(posts) {
  container.innerHTML = posts
    .map((post) => {
      return `
        <div>
            <div><h2>${post.title}</h2></div>
            <div><p>${post.body}</p></div>
        </div>
    `;
    })
    .join("");
}
handleHTTPrequest();

/*
//variable Definitaion
const container = document.querySelector(".container");

function usingFetchHttptRequest() {
  const fetchRequest = fetch("https://jsonplaceholder.typicode.com/posts");

  fetchRequest
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })

    .then((data) => {
      console.log("Success", data);
      displayInfo(data);
    })
    .catch((error) => {
      console.error("Fetch Error:", error);
    });
}

// Function to display the info
function displayInfo(posts) {
  container.innerHTML = posts
    .map((post) => {
      return `
        <div>
          <h2>${post.title.charAt(0).toUpperCase() + post.title.slice(1)}}</h2>
          <p>${post.body}</p>
        </div>
      `;
    })
    .join("");
}

usingFetchHttptRequest();
*/


*/