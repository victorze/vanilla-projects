const todo = document.querySelector("#todo");
const todoList = document.querySelector(".todo-list");

// show tasks
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  todoList.appendChild(createItem({key, value}));
}

todo.addEventListener("keydown", e => {
  if (e.keyCode == 13) addTask();
});

function addTask() {
  if (!todo.value.trim()) return;
  const task = { key: Date.now(), value: todo.value};
  todoList.appendChild(createItem(task));
  localStorage.setItem(task.key, task.value);
  todo.value = "";
}

function createItem({key, value}) {
  let todoItem = `<div class="todo-item">
                    <input data-key="${key}" type="checkbox">
                    <input type="text" value="${value}" spellcheck="false">
                  </div>`;
  todoItem = new DOMParser().parseFromString(todoItem, 'text/html').body.children[0];

  // handler checked
  const checkbox = todoItem.querySelector('input[type=checkbox]');
  checkbox.addEventListener("change", e => {
    if (checkbox.checked) {
      const key = e.target.getAttribute("data-key");
      console.log(key);
      localStorage.removeItem(key);
      todoItem.remove();
    }
  });

  return todoItem;
}

// TODO: ordenar las tareas
