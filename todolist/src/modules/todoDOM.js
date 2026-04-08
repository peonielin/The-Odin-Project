import {
  createTodo,
  updateTodo,
  getTodos,
  clearTodos,
  deleteTodo,
  getProjects,
  setProjectColor,
  getProjectColor,
} from "./todoLogic.js";
import pinImg from "../../assets/pin.png";
import closedBinImg from "../../assets/closedbin.png";
import openBinImg from "../../assets/openbin.png";
import exclaimImg from "../../assets/exclaim.png";

let activeProjectFilter = null;
let activeSearchQuery = "";

function createPin() {
  const pin = document.createElement("img");
  pin.src = pinImg;
  pin.classList.add("pin");
  return pin;
}

function createModalForm(
  modalContent,
  onClose,
  { initial = {}, titleText = "Add Your Task", onSave } = {},
) {
  const form = document.createElement("form");
  form.classList.add("modal-form");

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Task Name";
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.classList.add("modal-title");
  titleInput.value = initial.title ?? "";

  const descLabel = document.createElement("label");
  descLabel.textContent = "Full Description";
  const descInput = document.createElement("textarea");
  descInput.classList.add("modal-description");
  descInput.value = initial.description ?? "";

  const dueDateLabel = document.createElement("label");
  dueDateLabel.textContent = "Target Due Date";
  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.classList.add("modal-due-date");
  dueDateInput.value = initial.dueDate ?? "";

  const projectLabel = document.createElement("label");
  projectLabel.textContent = "Project";
  const projectInput = document.createElement("input");
  projectInput.type = "text";
  projectInput.classList.add("modal-project");
  projectInput.value = initial.project ?? "";

  const priorityLabel = document.createElement("label");
  priorityLabel.textContent = "Priority Scale";
  const prioritySelect = document.createElement("select");
  prioritySelect.classList.add("modal-priority");
  ["Low", "Medium", "High"].forEach((level) => {
    const option = document.createElement("option");
    option.value = level.toLowerCase();
    option.textContent = level;
    prioritySelect.appendChild(option);
  });
  prioritySelect.value = initial.priority ?? "low";

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
    onSave(
      titleInput.value,
      descInput.value,
      dueDateInput.value,
      prioritySelect.value,
      projectInput.value,
    );
    onClose();
    renderTask();
  });

  const modalTitle = document.createElement("h2");
  modalTitle.textContent = titleText;
  modalTitle.classList.add("modal-title-heading");
  form.appendChild(modalTitle);

  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(descLabel);
  form.appendChild(descInput);
  form.appendChild(dueDateLabel);
  form.appendChild(dueDateInput);
  form.appendChild(projectLabel);
  form.appendChild(projectInput);
  form.appendChild(priorityLabel);
  form.appendChild(prioritySelect);
  form.appendChild(submitButton);

  modalContent.appendChild(form);
}

function createModal(board, todo = null, todoIndex = null) {
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

  const isEdit = todo !== null;
  createModalForm(modalContent, closeModal, {
    initial: isEdit
      ? {
          title: todo.title,
          description: todo.description,
          dueDate: todo.dueDate,
          priority: todo.priority,
          project: todo.project,
        }
      : {},
    titleText: isEdit ? "Edit Your Task" : "Add Your Task",
    onSave: isEdit
      ? (title, desc, dueDate, priority, project) =>
          updateTodo(todoIndex, title, desc, dueDate, priority, project)
      : (title, desc, dueDate, priority, project) =>
          createTodo(title, desc, dueDate, priority, project),
  });

  modal.appendChild(modalContent);

  return { modal, closeModal };
}

const SWATCH_COLORS = ["#f5aecf", "#fff7ab", "#ade1f7", "#c4eda8", "#f5c2ab"];

function updateProjectList(accordion) {
  accordion.innerHTML = "";
  getProjects().forEach((project) => {
    const item = document.createElement("div");
    item.classList.add("project-item");

    const row = document.createElement("div");
    row.classList.add("project-item-row");

    const name = document.createElement("span");
    name.textContent = project;
    name.addEventListener("click", () => {
      activeProjectFilter = project;
      renderTask();
    });

    const currentColor = getProjectColor(project);

    const colorWrapper = document.createElement("div");
    colorWrapper.classList.add("color-trigger-wrapper");

    const colorTrigger = document.createElement("div");
    colorTrigger.classList.add("project-swatch");
    colorTrigger.style.backgroundColor = currentColor ?? "rgba(78,52,46,0.15)";

    const palette = document.createElement("div");
    palette.classList.add("project-palette");

    SWATCH_COLORS.forEach((color, i) => {
      const total = SWATCH_COLORS.length;
      const angleDeg = -60 + (i / (total - 1)) * 120;
      const rad = (angleDeg * Math.PI) / 180;
      const radius = 36;
      const tx = Math.cos(rad) * radius;
      const ty = Math.sin(rad) * radius;

      const swatch = document.createElement("div");
      swatch.classList.add("project-swatch", "palette-swatch");
      swatch.style.backgroundColor = color;
      swatch.style.setProperty("--tx", `${tx}px`);
      swatch.style.setProperty("--ty", `${ty}px`);
      swatch.style.transitionDelay = `${i * 25}ms`;
      if (currentColor === color)
        swatch.classList.add("project-swatch--active");
      swatch.addEventListener("click", (e) => {
        e.stopPropagation();
        setProjectColor(project, color);
        palette.classList.remove("open");
        renderTask();
      });
      palette.appendChild(swatch);
    });

    colorTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      palette.classList.toggle("open");
    });

    colorWrapper.appendChild(colorTrigger);
    colorWrapper.appendChild(palette);
    row.appendChild(name);
    row.appendChild(colorWrapper);
    item.appendChild(row);

    if (project === activeProjectFilter)
      item.classList.add("project-item--active");
    accordion.appendChild(item);
  });
}

export function initNavbar() {
  const label = document.querySelector(".label");
  const navbar = document.querySelector(".navbar");

  const arrow = document.createElement("span");
  arrow.classList.add("accordion-arrow");
  arrow.textContent = "▾";
  label.appendChild(arrow);

  const accordion = document.createElement("div");
  accordion.classList.add("project-accordion");
  navbar.appendChild(accordion);

  const searchInput = document.querySelector(".search-bar");
  searchInput.addEventListener("input", (e) => {
    activeSearchQuery = e.target.value;
    renderTask();
  });

  label.style.cursor = "pointer";
  label.addEventListener("click", () => {
    const isOpen = accordion.classList.toggle("open");
    arrow.textContent = isOpen ? "▴" : "▾";
    activeProjectFilter = null;
    renderTask();
  });
}

export function renderTask() {
  const board = document.querySelector(".corkboard-container");
  board.innerHTML = "";

  const today = new Date().toISOString().slice(0, 10);

  let todos = activeProjectFilter
    ? getTodos().filter((t) => t.project === activeProjectFilter)
    : getTodos();

  if (activeSearchQuery) {
    const q = activeSearchQuery.toLowerCase();
    todos = todos.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.project.toLowerCase().includes(q),
    );
  }

  todos.forEach((todo) => {
    const taskNote = document.createElement("div");
    taskNote.classList.add("addTaskNote");
    const cardColor = getProjectColor(todo.project);
    if (cardColor) taskNote.style.backgroundColor = cardColor;
    taskNote.addEventListener("mousedown", (e) => {
      if (e.button !== 0) return;
      if (e.target.classList.contains("task-project")) return;
      e.preventDefault();

      const rect = taskNote.getBoundingClientRect();
      const todoIndex = getTodos().indexOf(todo);
      const startX = e.clientX;
      const startY = e.clientY;
      let dragging = false;
      let placeholder = null;

      const onMove = (ev) => {
        if (
          !dragging &&
          Math.abs(ev.clientX - startX) < 5 &&
          Math.abs(ev.clientY - startY) < 5
        )
          return;
        if (!dragging) {
          dragging = true;
          placeholder = document.createElement("div");
          placeholder.style.width = rect.width + "px";
          placeholder.style.height = rect.height + "px";
          placeholder.style.flexShrink = "0";
          taskNote.parentNode.insertBefore(placeholder, taskNote);
          taskNote.style.position = "fixed";
          taskNote.style.width = rect.width + "px";
          taskNote.style.height = rect.height + "px";
          taskNote.style.zIndex = "1000";
          taskNote.style.transform = "scale(0.5)";
          taskNote.style.transformOrigin = "center center";
          taskNote.style.pointerEvents = "none";
        }
        taskNote.style.left = ev.clientX - rect.width / 2 + "px";
        taskNote.style.top = ev.clientY - rect.height / 2 + "px";
        const bin = document.querySelector(".corkboard-bin");
        if (bin) {
          const b = bin.getBoundingClientRect();
          const over =
            ev.clientX >= b.left &&
            ev.clientX <= b.right &&
            ev.clientY >= b.top &&
            ev.clientY <= b.bottom;
          bin.src = over ? openBinImg : closedBinImg;
          taskNote.style.opacity = over ? "0.5" : "1";
        }
      };

      const onUp = (ev) => {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
        if (!dragging) {
          const { modal } = createModal(board, todo, todoIndex);
          document.body.appendChild(modal);
          modal.style.display = "block";
          board.classList.add("blurred");
          return;
        }
        placeholder.remove();
        const bin = document.querySelector(".corkboard-bin");
        if (bin) {
          const b = bin.getBoundingClientRect();
          const dropped =
            ev.clientX >= b.left &&
            ev.clientX <= b.right &&
            ev.clientY >= b.top &&
            ev.clientY <= b.bottom;
          if (dropped) {
            taskNote.remove();
            deleteTodo(todoIndex);
            renderTask();
            return;
          }
          bin.src = closedBinImg;
        }
        taskNote.style.cssText = "";
        const cardColor = getProjectColor(todo.project);
        if (cardColor) taskNote.style.backgroundColor = cardColor;
      };

      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    });
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

    if (todo.project) {
      const projectSpan = document.createElement("span");
      projectSpan.classList.add("task-project");
      projectSpan.textContent = todo.project;
      projectSpan.style.cursor = "pointer";
      projectSpan.addEventListener("click", () => {
        activeProjectFilter = todo.project;
        const accordion = document.querySelector(".project-accordion");
        const arrow = document.querySelector(".accordion-arrow");
        if (accordion) accordion.classList.add("open");
        if (arrow) arrow.textContent = "▴";
        renderTask();
      });
      taskNote.appendChild(projectSpan);
    }

    const dateSpan = document.createElement("span");
    dateSpan.classList.add("task-date");
    if (todo.dueDate === today) {
      dateSpan.textContent = "due today";
    } else {
      const d = new Date(todo.dueDate + "T00:00:00");
      dateSpan.textContent = d
        .toLocaleDateString("en-GB", { day: "numeric", month: "short" })
        .replace(",", "");
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
  bin.addEventListener("mouseenter", () => {
    bin.src = openBinImg;
  });
  bin.addEventListener("mouseleave", () => {
    bin.src = closedBinImg;
  });
  bin.addEventListener("click", () => {
    clearTodos();
    renderTask();
  });

  const accordion = document.querySelector(".project-accordion");
  if (accordion) updateProjectList(accordion);

  return emptyTask;
}
