import { showProjectForm, showTaskForm } from "./dom.js";

function projectBtnListener() {
  const projectBtn = document.querySelector(".project-btn");
  projectBtn.addEventListener("click", (e) => {
    // e.preventDefault();
    showProjectForm();
  });
}

function taskBtnListener() {
  const taskBtn = document.querySelector(".task-btn");
  taskBtn.addEventListener("click", (e) => {
    // e.preventDefault();
    showTaskForm();
  });
}

function listeners() {
  projectBtnListener();
  taskBtnListener();
}

function render() {
  listeners();
}

export default render;
