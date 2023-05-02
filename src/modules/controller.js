import {
  showProjectForm,
  showTaskForm,
  showBlurBG,
  selectors,
  showTask,
  showTaskDefault,
  showProject,
  showProjectDefault,
} from "./dom.js";
import Task from "./task.js";
import Project from "./project.js";

const projects = [];
// const tasks = []; // how to select a project for tasks?

//  task object
function createTask() {
  const task = new Task(
    selectors.userTitle.value,
    selectors.userDesc.value,
    selectors.userDueDate.value,
    selectors.userPriority.value
  );
  // how to put task in a selected project?
  console.log(projects);
  projects[0].addTask(task);
}

function createTaskDefault() {
  const taskDefault = new Task(
    "laundry",
    "too much clothes!!!",
    "5/1/23",
    "high"
  );
  projects[0].addTask(taskDefault);
  showTaskDefault();
  console.log(projects);
}

// project object
function createProject() {
  const project = new Project(selectors.userProject.value);
  projects.push(project);
}

function createProjectDefault() {
  const projectDefault = new Project("Default Project", true);
  projects.push(projectDefault);
  showProjectDefault();
}

function projectBtnSubmit() {
  selectors.addProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showProject();
    createProject();
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

function listeners() {
  projectBtnListener();
  projectBtnSubmit();
  taskBtnListener();
  taskBtnSubmit();
}
//* program flow
function render() {
  listeners();
  createProjectDefault();
  createTaskDefault();
}

export { render };
