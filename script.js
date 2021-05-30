const listProjects = [
  "typing",
  "nueba-ortografia",
  "todo-list",
  "cookie-clicker",
  "timer",
  "bin-2-dec",
  "list-randomizer",
  "case-converter",
];

const projects = document.querySelector(".projects");
projects.innerHTML = listProjects
                        .map(project => template(project))
                        .join("");

function template(project) {
  return `
    <a class="project" href="${project}" target="_blank">
      <img src="images/${project}.png" alt="">
      <p>${format(project)}</p>
    </a>
  `;
}

function format(project) {
  const name = project.split("-").join(" ");
  return name[0].toUpperCase() + name.slice("1");
}
