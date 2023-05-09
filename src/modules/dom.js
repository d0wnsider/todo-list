import { deleteTask, createLiEventListener } from "./controller.js";

function showProjectForm() {
  const formProjectCont = document.querySelector(".form-project-cont");
  formProjectCont.classList.toggle("hide");
}

function showTaskForm() {
  const formTaskCont = document.querySelector(".form-task-cont");
  formTaskCont.classList.toggle("hide");
}

function showBlurBG() {
  selectors.cont.classList.toggle("blur-bg");
}

function showTask() {
  const taskContainer = document.createElement("div");
  const titleContainer = document.createElement("div");
  const dueDateContainer = document.createElement("div");
  const prioContainer = document.createElement("div");
  const task = document.createElement("li");
  task.classList.add("add-task-content");
  taskContainer.classList.add("add-task-container");
  titleContainer.textContent = selectors.userTitle.value;
  dueDateContainer.textContent += selectors.userDueDate.value;
  prioContainer.textContent += selectors.userPriority.value;
  taskContainer.appendChild(titleContainer);
  taskContainer.appendChild(dueDateContainer);
  taskContainer.appendChild(prioContainer);

  task.appendChild(titleContainer);
  task.appendChild(dueDateContainer);
  task.appendChild(prioContainer);
  taskContainer.appendChild(task);
  deleteTask(taskContainer);
  createLiEventListener(task);
  selectors.taskContent.appendChild(taskContainer);
}

const selectors = {
  li: document.querySelector(".add-task-content"),
  navProject: document.querySelector(".nav-projects"),
  taskContent: document.querySelector(".task-content"),
  mainTitle: document.querySelector(".main-title"),
  userProject: document.querySelector("#project"),
  userTitle: document.querySelector("#title"),
  userDueDate: document.querySelector("#due-date"),
  userPriority: document.querySelector("#priority"),
  addTaskBtn: document.querySelector(".add-task-btn"),
  addProjectBtn: document.querySelector(".add-project-btn"),
  taskForm: document.querySelector(".form-task"),
  projectForm: document.querySelector(".form-project"),
  cont: document.querySelector(".cont"),
  blurBG: document.querySelector(".blur-bg"),
};

export { showProjectForm, showTaskForm, showBlurBG, selectors, showTask };
