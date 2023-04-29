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

function createTask() {
  const taskContent = document.querySelector(".task-content");
  const task = document.createElement("div");
  task.classList.add("add-task-content");
  task.textContent = selectors.userTitle.value;
  taskContent.appendChild(task);
}

const selectors = {
  userTitle: document.querySelector("#title"),
  addTaskBtn: document.querySelector(".add-task-btn"),
  taskForm: document.querySelector(".form-task"),
  cont: document.querySelector(".cont"),
  blurBG: document.querySelector(".blur-bg"),
};

export { showProjectForm, showTaskForm, showBlurBG, selectors, createTask };
