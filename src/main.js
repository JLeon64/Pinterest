import "./style.css";
import Header from "/components/Header/Header";
import Main from "/components/Main/Main";
import Footer from "/components/Footer/Footer";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

const init = () => {
  Footer();
  Main();
  Header();
  getPhotos("coding");
  updateBtn();
};

let showValue = 10;
let pageValue = 1;

const getPhotos = async (keyword) => {
  try {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=${pageValue}&per_page=${showValue}&query=${keyword}&client_id=${CLIENT_ID}`
    );
    if (!data.ok)
      throw new Error("An error occurred. Please try again.");
    const results = await data.json();
    const photos = results.results;
    printPhotos(photos);
  } catch (error) {
    console.error("Error en getPhotos:", error);
    const container = document.querySelector("#results");
    const message = document.querySelector("#message");
    container.innerHTML = "";
    message.textContent = "Something went wrong :(";
  }
};

const printPhotos = (photos) => {
  const container = document.querySelector("#results");
  const message = document.querySelector("#message");

  if (photos.length === 0) {
    container.innerHTML = "";
    message.textContent = "Search anything else...";
  } else {
    container.innerHTML = "";
    message.textContent = `Showing ${photos.length} results.`;
    for (const photo of photos) {
      const li = document.createElement("li");
      li.innerHTML = `
    <img src="${photo.urls.regular}" alt="${photo.alt_description}" />
    `;

      container.appendChild(li);
    }
  }
};

const updateBtn = () => {
  const pageDown = document.querySelector("#pageDown");
  if (pageValue === 1) {
    pageDown.classList.add("disabled");
  } else {
    pageDown.classList.remove("disabled");
  }
};

init();

const page = document.querySelector("#page");
page.textContent = pageValue;

document.querySelector("#searchBtn").addEventListener("click", () => {
  document.querySelector("#searchInput").value = "";

  const value = document.querySelector("#searchInput").value;
  getPhotos(value);
});

document.querySelector("#showBtn").addEventListener("click", () => {
  const countValue = document.querySelector("#countInput").value;
  showValue = parseInt(countValue, 10);

  const value = document.querySelector("#searchInput").value || "coding";
  getPhotos(value);
});

document.querySelector("#searchInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const value = event.target.value.trim();
    if (value) {
      getPhotos(value);
    }
  }
});

document.querySelector("#pageDown").addEventListener("click", () => {
  if (pageValue > 1) {
    const prevPage = --pageValue;
    page.textContent = pageValue;

    const value = document.querySelector("#searchInput").value || "coding";
    getPhotos(value);
    updateBtn();
  }
});

document.querySelector("#pageUp").addEventListener("click", () => {
  const nextPage = ++pageValue;
  page.textContent = pageValue;

  const value = document.querySelector("#searchInput").value || "coding";
  getPhotos(value);
  updateBtn();
});
