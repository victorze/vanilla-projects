const projects = [
  "bin-2-dec",
  "timer",
  "cookie-clicker",
]

const container = document.querySelector(".container")

let pagesLink = ""
projects.forEach(project => pagesLink += `<a href="${project}">${project}</a>`)

container.innerHTML = pagesLink
