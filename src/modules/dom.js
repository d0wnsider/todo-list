function showProjectForm() {
  const formProjectCont = document.querySelector(".form-project-cont");
  formProjectCont.classList.toggle("hide");
}

function showTaskForm() {
  const formTaskCont = document.querySelector(".form-task-cont");
  formTaskCont.classList.toggle("hide");
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
  form: document.querySelector(".form-task"),
};

export { showProjectForm, showTaskForm, selectors, createTask };
