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

function showProject() {
  const navProj = document.querySelector(".nav-projects");
  const project = document.createElement("div");
  project.classList.add("add-project-content");
  project.textContent = selectors.userProject.value;
  navProj.appendChild(project);
}

function showProjectDefault() {
  const navProj = document.querySelector(".nav-projects");
  const project = document.createElement("div");
  project.classList.add("add-project-content");
  project.textContent = "Default Project";
  navProj.appendChild(project);
}

function showTask() {
  const taskContent = document.querySelector(".task-content");
  const task = document.createElement("div");
  task.classList.add("add-task-content");
  task.textContent = selectors.userTitle.value; //TODO other properties
  taskContent.appendChild(task);
}

function showTaskDefault() {
  const taskContent = document.querySelector(".task-content");
  const task = document.createElement("div");
  task.classList.add("add-task-content");
  task.textContent = "laundry";
  task.textContent += "too much clothes";
  task.textContent += "5/1/23";
  task.textContent += "high";
  taskContent.appendChild(task);
}

const selectors = {
  userProject: document.querySelector("#project"),
  userTitle: document.querySelector("#title"),
  userDesc: document.querySelector("#desc"),
  userDueDate: document.querySelector("#due-date"),
  userPriority: document.querySelector("#priority"),
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
  showTask,
  showTaskDefault,
  showProject,
  showProjectDefault,
};
