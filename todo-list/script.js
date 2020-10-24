const todo = document.querySelector("#todo")
const btn = document.querySelector("button")
const todoList = document.querySelector(".todo-list")

btn.addEventListener("click", () => {
  addTask()
})

todo.addEventListener("keydown", e => {
  if (e.keyCode === 13) addTask()
})

function addTask() {
    if (todo.value === "") return
    todoList.appendChild(createItem(todo.value))
    todo.value = ""
}

function createItem(value) {
  let todoItem = `<div class="todo-item">
                    <input type="checkbox">
                    <input type="text" value="${value}">
                  </div>`
  todoItem = new DOMParser().parseFromString(todoItem, 'text/html').body.children[0]

  // Remove checkbox
  const checkbox = todoItem.querySelector('input[type=checkbox]')
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      todoItem.remove()
    }
  })

  return todoItem
}
