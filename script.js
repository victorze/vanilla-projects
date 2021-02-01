const projects = [
  "typing",
  "nueba-ortografia",
  "cookie-clicker",
  "todo-list",
  "timer",
  "bin-2-dec",
  "list-randomizer",
  "case-converter",
]

const container = document.querySelector(".container")

container.innerHTML = projects
                        .map(project => `<a href="${project}" target="_blank">${format(project)}</a>`)
                        .join("")

function format(project) {
  const name = project.split("-").join(" ")
  return name[0].toUpperCase() + name.slice("1")
}
