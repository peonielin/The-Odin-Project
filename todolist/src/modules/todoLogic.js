const saved = JSON.parse(localStorage.getItem("todolist") ?? "[]");
const ToDolist = saved;

const savedColors = JSON.parse(localStorage.getItem("projectColors") ?? "{}");
const projectColors = savedColors;

function save() {
  localStorage.setItem("todolist", JSON.stringify(ToDolist));
  localStorage.setItem("projectColors", JSON.stringify(projectColors));
}

function Todo(title, description, dueDate, priority, project) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.project = project;
  this.complete = false;
}

export function createTodo(title, description, dueDate, priority, project) {
  const todo = new Todo(title, description, dueDate, priority, project);
  ToDolist.push(todo);
  save();
  return ToDolist;
}

export function getTodos() {
  return ToDolist;
}

export function clearTodos() {
  ToDolist.length = 0;
  save();
}

export function updateTodo(index, title, description, dueDate, priority, project) {
  const todo = ToDolist[index];
  if (!todo) return;
  todo.title = title;
  todo.description = description;
  todo.dueDate = dueDate;
  todo.priority = priority;
  todo.project = project;
  save();
}

export function deleteTodo(index) {
  const project = ToDolist[index]?.project;
  ToDolist.splice(index, 1);
  if (project && !ToDolist.some((t) => t.project === project)) {
    delete projectColors[project];
  }
  save();
}

export function getProjects() {
  return [...new Set(ToDolist.map((t) => t.project).filter(Boolean))];
}

export function setProjectColor(project, color) {
  projectColors[project] = color;
  save();
}

export function getProjectColor(project) {
  return projectColors[project] ?? null;
}
