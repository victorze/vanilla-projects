const projects = [
  "typing",
  "nueba-ortografia",
  "todo-list",
  "list-randomizer",
  "timer",
  "cookie-clicker",
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
