/* 
  What is XMLHttpRequest?
    is a native browser object, that allows you to make request HTTP(GET, POST ...);
    we can also take request HTML, JSON, TEXT, YAML...
  */

// make the object XHR
const xhr = new XMLHttpRequest();

// open request
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");

// success
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log("response: ", xhr.responseText);
    const data = JSON.parse(xhr.responseText); // transform the object
    console.log("Post: ", data);
  } else {
    console.log("HTTP ERROR: ", xhr.status);
  }
};

// bad connection
xhr.onerror = function () {
  console.log("network error");
};

// send
xhr.send();
