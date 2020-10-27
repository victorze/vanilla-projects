const projects = [
  "bin-2-dec",
  "timer",
  "cookie-clicker",
  "case-converter",
  "todo-list",
]

const container = document.querySelector(".container")

let pagesLink = ""
projects.forEach(project => pagesLink += `<a href="${project}">${format(project)}</a>`)

container.innerHTML = pagesLink

function format(project) {
  const name = project.split("-").join(" ")
  return name[0].toUpperCase() + name.slice("1")
}
