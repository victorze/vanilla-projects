const projects = [
  "typing",
  "timer",
  "cookie-clicker",
  "nueba-ortografia",
  "list-randomizer",
  "todo-list",
  "bin-2-dec",
  "case-converter",
]

const container = document.querySelector(".container")

container.innerHTML = projects
                        .map(project => `<a href="${project}">${format(project)}</a>`)
                        .join("")

function format(project) {
  const name = project.split("-").join(" ")
  return name[0].toUpperCase() + name.slice("1")
}
