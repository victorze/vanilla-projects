const cardsNode = document.querySelector(".cards");
const loaderNode = document.querySelector(".loader");
const searchInput = document.querySelector(".search-input");

let currentPage = 1;
const limit = 20;
let total = 0;

loadCharacters(currentPage, limit);

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5 &&
    hasMoreCharacters(currentPage, limit, total)) {
    currentPage++;
    loadCharacters(currentPage, limit, searchInput.value);
  }
}, {
  passive: true
});

let timeout;
searchInput.addEventListener("input", () => {
  let currentPage = 1;
  let total = 0;
  cardsNode.innerHTML = "";

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    loadCharacters(currentPage, limit, searchInput.value);
  }, 250);
});

async function loadCharacters(page, limit, name = "") {
  showLoader();

  setTimeout(async () => {
    try {
      if (hasMoreCharacters(page, limit, total)) {
        const response = await getCharacters(page, name);
        showCharacters(response.results);
        total = response.info.count;
        console.log({total});
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      hideLoader();
    }
  }, 500);
}

function showCharacters(characters) {
  let fragment = document.createDocumentFragment();

  characters.forEach((character) =>  {
    const cardNode = document.createElement("article");
    cardNode.classList.add("card");

    cardNode.innerHTML = `
      <div class="card-image">
        <img src="${character.image}" alt="${character.name}">
      </div>
      <div class="card-content">
        <div class="section">
          <h2 class="name">${character.name}</h2>
          <span class="status">
            <div class="status-icon ${character.status.toLowerCase()}"></div>
              ${character.status} - ${character.species}
          </span>
        </div>
        <div class="section">
          <span class="text-gray">
            Last known location:
          </span>
          <span class="location">
            ${character.location.name}
          </span>
        </div>
        <div class="section">
          <span class="text-gray">
            First seen in:
          </span>
          <span class="origin">
            ${character.origin.name}
          </span>
        </div>
      </div>
    `;

    fragment.appendChild(cardNode);
  });

  cardsNode.appendChild(fragment);
}

async function getCharacters(page, name = "") {
  const API_URL = `https://rickandmortyapi.com/api/character?page=${page}${name ? `&name=${name}` : ""}`;
  const response = await fetch(API_URL);

  if(!response.ok) {
    console.log("error")
    throw new Error(`An error occurred: ${response.status}`);
  }

  return await response.json();
}

function hideLoader() {
  loaderNode.classList.remove("show");
}

function showLoader() {
  loaderNode.classList.add("show");
}

function hasMoreCharacters(page, limit, total) {
  const startIndex = (page - 1) * limit + 1;
  console.log({startIndex, total});
  return total === 0 || startIndex < total;
}
