import "./styles.css";

import { createTodo } from "./modules/todoLogic.js";
import { renderTask } from "./modules/todoDOM.js";

createTodo("My Task", "description", "2026-04-10", "high");
renderTask();
