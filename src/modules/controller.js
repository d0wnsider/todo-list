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

function createTask() {
  const task = new Task(
    selectors.userTitle.value,
    selectors.userDesc.value,
    selectors.userDueDate.value,
    selectors.userPriority.value
  );
  // how to put task in a selected project?
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
// TODO project selection
// function selectProject() {
//   const projectContent = document.querySelectorAll(".add-project-content");
//   projectContent.forEach(function (element, index) {
//     element.addEventListener("click", function () {
//       projects[index].active = true;
//       console.log(projects);
//     });
//     console.log(projects);
//   });
// }

function projectBtnSubmit() {
  selectors.addProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showProject();
    createProject();
    showProjectForm();
    showBlurBG();
    console.log(projects);
    selectors.projectForm.reset();
    // selectProject();
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
  // selectProject();
  projectBtnListener();
  projectBtnSubmit();
  taskBtnListener();
  taskBtnSubmit();
}
//* program flow
function render() {
  createProjectDefault();
  createTaskDefault();
  listeners();
}

export { render };
