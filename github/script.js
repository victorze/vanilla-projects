const searchInput = document.querySelector(".search");

fetch("https://api.github.com/users/victorze")
  .then(response => response.json())
  .then(data => console.log(data));
