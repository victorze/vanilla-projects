(async () => {
  const characters = await getCharacters(1)
  console.log(characters.results);
  characters.results.forEach(result => console.log(result.name));
  showCharacters(characters.results);
})();

const cardsNode = document.querySelector(".container");

async function getCharacters(page) {
  const API_URL = `https://rickandmortyapi.com/api/character?page=${page}`;
  const response = await fetch(API_URL);

  if(!response.ok) {
    throw new Error(`An error occurred: ${response.status}`);
  }

  return await response.json();
}

function showCharacters(characters) {
  let fragment = document.createDocumentFragment();

  characters.forEach((character) =>  {
    const cardNode = document.createElement("section");
    cardNode.classList.add("card");

    cardNode.innerHTML = `
      <div class="content">
        <div class="front">
          <img src="${character.image}" alt="">
        </div>
        <div class="back">
          <span class="name">${character.name}</span>
          <span class="status">
            <span class="status-icon ${character.status.toLowerCase()}">
            </span>
            ${character.status} - ${character.species}
          </span>
          <span class="text-gray">Last known location:</span>
          <span class="location">${character.location.name}</span>
          <span class="text-gray">First seen in:</span>
          <span class="origin">${character.origin.name}</span>
        </div>
      </div>
    `;

    fragment.appendChild(cardNode);
  });

  cardsNode.appendChild(fragment);
}
