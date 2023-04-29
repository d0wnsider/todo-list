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

function createProject() {
  const navProj = document.querySelector(".nav-projects");
  const project = document.createElement("div");
  project.classList.add("add-project-content");
  project.textContent = selectors.userProject.value;
  navProj.appendChild(project);
}

function createTask() {
  const taskContent = document.querySelector(".task-content");
  const task = document.createElement("div");
  task.classList.add("add-task-content");
  task.textContent = selectors.userTitle.value;
  taskContent.appendChild(task);
}

const selectors = {
  userProject: document.querySelector("#project"),
  userTitle: document.querySelector("#title"),
  addTaskBtn: document.querySelector(".add-task-btn"),
  addProjectBtn: document.querySelector(".add-project-btn"),
  taskForm: document.querySelector(".form-task"),
  projectForm: document.querySelector(".form-project"),
  cont: document.querySelector(".cont"),
  blurBG: document.querySelector(".blur-bg"),
};

export {
  showProjectForm,
  showTaskForm,
  showBlurBG,
  selectors,
  createTask,
  createProject,
};
