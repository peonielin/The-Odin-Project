import { createTodo, getTodos, clearTodos } from "./todoLogic.js";
import pinImg from "../../assets/pin.png";
import closedBinImg from "../../assets/closedbin.png";
import exclaimImg from "../../assets/exclaim.png";

function createPin() {
  const pin = document.createElement("img");
  pin.src = pinImg;
  pin.classList.add("pin");
  return pin;
}

function createModalForm(modalContent, onSubmit) {
  const form = document.createElement("form");
  form.classList.add("modal-form");

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Task Name";
  titleLabel.htmlFor = "modal-title";
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "modal-title";
  titleInput.classList.add("modal-title");

  const descLabel = document.createElement("label");
  descLabel.textContent = "Full Description";
  descLabel.htmlFor = "modal-description";
  const descInput = document.createElement("textarea");
  descInput.id = "modal-description";
  descInput.classList.add("modal-description");

  const dueDateLabel = document.createElement("label");
  dueDateLabel.textContent = "Target Due Date";
  dueDateLabel.htmlFor = "modal-due-date";
  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.id = "modal-due-date";
  dueDateInput.classList.add("modal-due-date");

  const priorityLabel = document.createElement("label");
  priorityLabel.textContent = "Priority Scale";
  priorityLabel.htmlFor = "modal-priority";
  const prioritySelect = document.createElement("select");
  prioritySelect.id = "modal-priority";
  prioritySelect.classList.add("modal-priority");
  ["Low", "Medium", "High"].forEach((level) => {
    const option = document.createElement("option");
    option.value = level.toLowerCase();
    option.textContent = level;
    prioritySelect.appendChild(option);
  });

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.classList.add("modal-submit");

  const submitText = document.createElement("span");
  submitText.textContent = "PIN TO BOARD";

  const submitPin = document.createElement("img");
  submitPin.src = pinImg;
  submitPin.classList.add("submit-pin");

  submitButton.appendChild(submitText);
  submitButton.appendChild(submitPin);

  submitButton.addEventListener("click", () => {
    createTodo(
      titleInput.value,
      descInput.value,
      dueDateInput.value,
      prioritySelect.value,
    );
    onSubmit();
    renderTask();
  });

  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(descLabel);
  form.appendChild(descInput);
  form.appendChild(dueDateLabel);
  form.appendChild(dueDateInput);
  form.appendChild(priorityLabel);
  form.appendChild(prioritySelect);
  form.appendChild(submitButton);

  modalContent.appendChild(form);
}

function createModal(board) {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const modalPin = document.createElement("img");
  modalPin.src = pinImg;
  modalPin.classList.add("modal-pin");
  modalContent.appendChild(modalPin);

  const closeButton = document.createElement("span");
  closeButton.classList.add("close");
  closeButton.textContent = "\u00D7";

  const closeModal = () => {
    modal.remove();
    board.classList.remove("blurred");
  };

  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  modalContent.appendChild(closeButton);
  createModalForm(modalContent, closeModal);
  modal.appendChild(modalContent);

  return { modal, closeModal };
}

export function renderTask() {
  const board = document.querySelector(".corkboard-container");
  board.innerHTML = "";

  const today = new Date().toISOString().slice(0, 10);

  getTodos().forEach((todo) => {
    const taskNote = document.createElement("div");
    taskNote.classList.add("addTaskNote");
    taskNote.appendChild(createPin());

    [
      { text: todo.title, cls: "task-title" },
      { text: todo.description, cls: "task-description" },
    ].forEach(({ text, cls }) => {
      const span = document.createElement("span");
      span.textContent = text;
      span.classList.add(cls);
      taskNote.appendChild(span);
    });

    const dateSpan = document.createElement("span");
    dateSpan.classList.add("task-date");
    if (todo.dueDate === today) {
      dateSpan.textContent = "due today";
    } else {
      const d = new Date(todo.dueDate + "T00:00:00");
      dateSpan.textContent = d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "2-digit" }).replace(",", "");
    }
    const priorityCount = { low: 1, medium: 2, high: 3 }[todo.priority] ?? 1;
    const prioritySpan = document.createElement("span");
    prioritySpan.classList.add("task-priority");
    for (let i = 0; i < priorityCount; i++) {
      const img = document.createElement("img");
      img.src = exclaimImg;
      img.classList.add("exclaim-icon");
      prioritySpan.appendChild(img);
    }

    const bottomRow = document.createElement("div");
    bottomRow.classList.add("task-bottom-row");
    bottomRow.appendChild(dateSpan);
    bottomRow.appendChild(prioritySpan);
    taskNote.appendChild(bottomRow);

    board.appendChild(taskNote);
  });

  const emptyTask = document.createElement("div");
  emptyTask.classList.add("addEmptyTaskNote");
  emptyTask.appendChild(createPin());
  emptyTask.appendChild(document.createTextNode("Add A Task..."));

  emptyTask.addEventListener("click", () => {
    const { modal } = createModal(board);
    document.body.appendChild(modal);
    modal.style.display = "block";
    board.classList.add("blurred");
  });

  board.appendChild(emptyTask);

  const bin = document.createElement("img");
  bin.src = closedBinImg;
  bin.classList.add("corkboard-bin");
  board.appendChild(bin);
  bin.addEventListener("click", () => {
    clearTodos();
    renderTask();
  });
  return emptyTask;
}
