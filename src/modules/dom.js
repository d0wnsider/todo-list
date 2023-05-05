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
  const project = document.createElement("li");
  project.classList.add("add-project-content");
  project.textContent = selectors.userProject.value;
  selectors.mainTitle.textContent = `Default Project`;
  navProj.appendChild(project);
}

function showProjectDefault() {
  const navProj = document.querySelector(".nav-projects");
  const project = document.createElement("li");
  project.classList.add("add-project-content");
  project.textContent = "Default Project";
  selectors.mainTitle.textContent = `Default Project`;
  navProj.appendChild(project);
}

function showTask() {
  const task = document.createElement("li");
  task.classList.add("add-task-content");
  task.textContent = selectors.userTitle.value;
  task.textContent += selectors.userDesc.value;
  task.textContent += selectors.userDueDate.value;
  task.textContent += selectors.userPriority.value;
  selectors.taskContent.appendChild(task);
}

function showTaskDefault() {
  const task = document.createElement("li");
  task.classList.add("add-task-content");
  task.textContent = "laundry";
  task.textContent += "too much clothes";
  task.textContent += "5/1/23";
  task.textContent += "high";
  selectors.taskContent.appendChild(task);
}

// taskContainerListener

const selectors = {
  navProject: document.querySelector(".nav-projects"),
  taskContent: document.querySelector(".task-content"),
  mainTitle: document.querySelector(".main-title"),
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
