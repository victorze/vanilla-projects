const cardsNode = document.querySelector(".cards");
const loaderNode = document.querySelector(".loader");

let currentPage = 1;
const limit = 20;
let total = 0;

loadCharacters(currentPage, limit);

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5 &&
    hasMoreCharacters(currentPage, limit, total)) {
    currentPage++;
    loadCharacters(currentPage, limit);
  }
}, {
  passive: true
});

async function loadCharacters(page, limit) {
  showLoader();

  setTimeout(async () => {
    try {
      if (hasMoreCharacters(page, limit, total)) {
        const response = await getCharacters(page);
        showCharacters(response.results);
        total = response.info.count;
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

async function getCharacters(page) {
  const API_URL = `https://rickandmortyapi.com/api/character?page=${page}`;
  const response = await fetch(API_URL);

  if(!response.ok) {
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
  return total === 0 || startIndex < total;
}
