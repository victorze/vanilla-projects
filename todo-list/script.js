const todo = document.querySelector("#todo");
const todoList = document.querySelector(".todo-list");

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

// show tasks
getTasks().forEach((value, key) => todoList.appendChild(createItem({key, value})));

function getTasks() {
  const tasks = new Map();
  let keys = Object.keys(localStorage);
  keys = keys.map(k => +k);
  keys.sort();

  for (let key of keys) {
    tasks.set(key, localStorage.getItem(key));
  }

  return tasks;
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
