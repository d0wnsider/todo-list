import {
  showProjectForm,
  showTaskForm,
  showBlurBG,
  selectors,
  showTask,
  showProject,
} from "./dom.js";
import Task from "./task.js";
import Project from "./project.js";

const projects = [];

function createTask() {
  const task = new Task(
    selectors.userTitle.value,
    selectors.userDesc.value,
    selectors.userDueDate.value,
    selectors.userPriority.value
  );
  // TODO how to put task in a selected project?
  projects[0].addTask(task);
}

// project object
function createProject() {
  const project = new Project(selectors.userProject.value);
  projects.push(project);
}

function displayProjects() {
  const navProj = document.querySelector(".nav-projects");
  const li = document.createElement("li");

  projects.forEach((project, index) => {
    li.setAttribute("data-index", index);
    li.classList.add("add-project-content");
    li.textContent = `${project.name}`;
    selectors.mainTitle.textContent = `${project.name}`;
    navProj.appendChild(li);
  });
}

function projectBtnSubmit() {
  selectors.addProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createProject();
    displayProjects();
    showProjectForm();
    showBlurBG();
    selectors.projectForm.reset();
    console.log(projects);
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
    showTask();
    createTask();
    showTaskForm();
    showBlurBG();
    selectors.taskForm.reset();
    console.log(projects);
  });
}

function taskBtnListener() {
  const taskBtn = document.querySelector(".task-btn");
  taskBtn.addEventListener("click", (e) => {
    showTaskForm();
    showBlurBG();
  });
}

selectors.taskContent.addEventListener("click", (e) => {
  e.target.classList.toggle("checked");
});

selectors.navProject.addEventListener("click", (e) => {
  selectors.mainTitle.textContent = e.target.textContent;
});

function listeners() {
  projectBtnListener();
  projectBtnSubmit();
  taskBtnListener();
  taskBtnSubmit();
}
//* program flow
function render() {
  listeners();
}

export { render };
