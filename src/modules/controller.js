import { showProjectForm, showTaskForm, selectors, createTask } from "./dom.js";
import Task from "./task.js";

const projects = [];

function createTaskDefault() {
  const taskDefault = new Task(
    selectors.userTitle.value,
    "too much clothes!!!",
    "4 / 29 / 2023",
    "high"
  );
  projects.push(taskDefault);
}

function taskBtnSubmit() {
  selectors.addTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createTask();
    showTaskForm();
    selectors.form.reset();
  });
}

function projectBtnListener() {
  const projectBtn = document.querySelector(".project-btn");
  projectBtn.addEventListener("click", (e) => {
    showProjectForm();
  });
}

function taskBtnListener() {
  const taskBtn = document.querySelector(".task-btn");
  taskBtn.addEventListener("click", (e) => {
    showTaskForm();
  });
}

function listeners() {
  projectBtnListener();
  taskBtnListener();
  taskBtnSubmit();
}
//* program flow
function render() {
  listeners();
  createTaskDefault();
}

export { render };
