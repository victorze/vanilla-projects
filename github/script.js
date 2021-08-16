const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");
const userInfoNode = document.querySelector(".user-info");
const repositoriesNode = document.querySelector(".repositories");

searchButton.addEventListener("click", async () => {
  const [userInfo, repositories] = await Promise.all([
    getUserInfo(searchInput.value),
    getRepositories(searchInput.value),
  ]);

  if (userInfo.message === "Not Found") {
    alert("El usuario no existe.");
    return;
  }

  if (userInfo.message && userInfo.message.includes("API rate limit exceeded")) {
    alert(userInfo.message);
    return;
  }

  renderUserInfo(userInfo);
  renderRepositories(repositories);
});

searchInput.addEventListener("keyup", (event) => {
 if (event.keyCode === 13) searchButton.click();
});

async function getUserInfo(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  return response.json();
}

async function getRepositories(username) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  return response.json();
}

function renderUserInfo(userInfo) {
  userInfoNode.innerHTML = `
    <img src="${userInfo.avatar_url}" alt="avatar" class="avatar">
    <span class="user-name">${userInfo.name}</span>
    <span class="user-nickname">${userInfo.login}</span>
    ${userInfo.bio ? `<div class="bio">${userInfo.bio}</div>` : ""}
    <div class="wrapper-follow">
      <a href="https://github.com/${userInfo.login}?tab=followers" class="followers" target="_blank">
        <span class="number-followers">${userInfo.followers}</span> followers
      </a>
      -
      <a href="https://github.com/${userInfo.login}?tab=following" class="following" target="_blank">
        <span class="number-following">${userInfo.following}</span> following
      </a>
    </div>
    ${userInfo.location ? `<span class="location">${userInfo.location}</span>` : ""}
  `;
}

function renderRepositories(repositories) {
  repositoriesNode.innerHTML = repositories.map(repository => `
    <article class="repo-info">
      <a href="${repository.html_url}" class="repo-link" target="_blank">
        <span class="repo-name">${repository.name}</span>
      </a>
      ${repository.description ? `<span class="repo-description">${repository.description}</span>` : ""}
      ${repository.language ? `<span class="repo-language">${repository.language}</span>` : ""}
    </article>
  `).join("");
}
