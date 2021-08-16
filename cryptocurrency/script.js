const tableBody = document.querySelector("tbody");
const searchInput = document.querySelector(".search-input");

let coins = [];

window.addEventListener("load", async () => {
  coins = await getData();
  renderTable(coins);
});

let timeout;
searchInput.addEventListener("input", () => {
  const filteredData = coins.filter(
    coin =>
      coin.name.toLowerCase().includes(searchInput.value.toLowerCase()) |
      coin.symbol.toLowerCase().includes(searchInput.value.toLowerCase())
  );

  clearTimeout(timeout);
  timeout = setTimeout(() => renderTable(filteredData), 250);
});

function renderTable(coins) {
  tableBody.innerHTML = coins.map(coin => `
    <tr>
      <td class="left">${coin.market_cap_rank}</td>
      <td>
        <img
          src="${coin.image}"
          alt="${coin.name}"
          class="coin-image"
        >
        <a href="https://www.coingecko.com/en/coins/${coin.id}" class="coin-name" target="_blank">${coin.name}</a>
        <span class="symbol">${coin.symbol}</span>
      </td>
      <td class="price">${amountFormat(coin.current_price, 2)}</td>
      <td class="price-change ${coin.price_change_24h > 0 ? "positive-percentage" : "negative-percentage"}">
        ${amountFormat(coin.price_change_24h, 2)}
      </td>
      <td class="price-change-percentage ${coin.price_change_24h >= 0 ? "positive-percentage" : "negative-percentage"}">
        ${percentageFormat(coin.price_change_percentage_24h)}
      </td>
      <td class="volume">${amountFormat(coin.total_volume)}</td>
      <td class="market-cap">${amountFormat(coin.market_cap)}</td>
    </tr>
  `).join("");
}

function amountFormat(amount, fractionDigits = 0) {
  const option = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: fractionDigits,
    currencyDisplay: "symbol",
  };

  return new Intl.NumberFormat("en-US", option).format(amount);
}

function percentageFormat(number) {
  const option = {
    style: 'percent',
    minimumFractionDigits: 1,
  };

  return new Intl.NumberFormat("en-US", option).format(number);
}

async function getData() {
  const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1");
  return response.json();
}
