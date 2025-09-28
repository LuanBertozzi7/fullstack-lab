async function loadPage(page) {
  try {
    const response = await fetch(page); // get the HTML
    if (!response.ok) {
      throw new Error(`Error on load the page ${page}: ${response.status}`);
    }

    const html = await response.text(); // convert response to text
    document.querySelector("#app").innerHTML = html; // send it to div#app
  } catch (error) {
    document.querySelector("#app").innerHTML =
      `<p style="color:red;">${error.message}</p>`;
  }
}

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // avoid the reloading the page
    const page = event.target.dataset.page;
    loadPage(page);
  });
});
