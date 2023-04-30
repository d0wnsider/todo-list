import {
  showProjectForm,
  showTaskForm,
  showBlurBG,
  selectors,
  createTask,
  createProject,
} from "./dom.js";
import Task from "./task.js";
import Project from "./project.js";

const projects = [];
const tasks = [];
//  task object
function createTaskDefault() {
  const taskDefault = new Task(
    selectors.userTitle.value,
    "too much clothes!!!",
    "4 / 29 / 2023",
    "high"
  );
  tasks.push(taskDefault);
}
// project object
function createProjectDefault() {
  const projectDefault = new Project(selectors.userProject.value); //TODO put value in
  projects.push(projectDefault);
}

function projectBtnSubmit() {
  selectors.addProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createProject();
    createProjectDefault();
    showProjectForm();
    showBlurBG();
    console.log(projects);
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
    createTaskDefault();
    showTaskForm();
    showBlurBG();
    selectors.taskForm.reset();
    console.log(tasks);
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
  // createTaskDefault();
  // createProjectDefault();
}

export { render };
