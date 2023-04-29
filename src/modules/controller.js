import {
  showProjectForm,
  showTaskForm,
  showBlurBG,
  selectors,
  createTask,
  createProject,
} from "./dom.js";
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

function projectBtnSubmit() {
  selectors.addProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createProject();
    showProjectForm();
    showBlurBG();
    selectors.projectForm.reset();
  });
}

function projectBtnListener() {
  const projectBtn = document.querySelector(".project-btn");
  projectBtn.addEventListener("click", (e) => {
    showProjectForm();
    showBlurBG();
  });
}

function taskBtnSubmit() {
  selectors.addTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createTask();
    showTaskForm();
    showBlurBG();
    selectors.taskForm.reset();
  });
}

function taskBtnListener() {
  const taskBtn = document.querySelector(".task-btn");
  taskBtn.addEventListener("click", (e) => {
    showTaskForm();
    showBlurBG();
  });
}

function listeners() {
  projectBtnListener();
  projectBtnSubmit();
  taskBtnListener();
  taskBtnSubmit();
}
//* program flow
function render() {
  listeners();
  createTaskDefault();
}

export { render };
