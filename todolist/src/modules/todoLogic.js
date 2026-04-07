const ToDolist = [];

function Todo(title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.complete = false;
}

export function createTodo(title, description, dueDate, priority) {
  const todo = new Todo(title, description, dueDate, priority);
  ToDolist.push(todo);
  return ToDolist;
}

export function getTodos() {
  return ToDolist;
}

export function clearTodos() {
  ToDolist.length = 0;
}
