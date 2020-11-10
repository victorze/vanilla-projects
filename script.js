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

let pagesLink = ""
projects.forEach(project => pagesLink += `<a href="${project}">${format(project)}</a>`)

container.innerHTML = pagesLink

function format(project) {
  const name = project.split("-").join(" ")
  return name[0].toUpperCase() + name.slice("1")
}
