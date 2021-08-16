const projects = [
  "cryptocurrency",
  "github",
  "typing",
  "plan-contable",
  "todo-list",
  "nueba-ortografia",
  "cookie-clicker",
  "timer",
  "bin-2-dec",
  "list-randomizer",
  "case-converter",
];

const projectsNode = document.querySelector(".projects");
projectsNode.innerHTML = projects
                        .map(project => template(project))
                        .join("");

function template(project) {
  return `
    <a class="project" href="${project}" target="_blank">
      <img src="images/${project}.png" alt="">
      <p>${project}</p>
    </a>
  `;
}
