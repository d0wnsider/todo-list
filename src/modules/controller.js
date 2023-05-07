import {
  showProjectForm,
  showTaskForm,
  showBlurBG,
  selectors,
  showTask,
} from "./dom.js";
import Task from "./task.js";
import Project from "./project.js";

const projects = [];
let selectedProject = "";
let selectedTask = "";

function createTask() {
  const task = new Task(
    selectors.userTitle.value,
    selectors.userDesc.value,
    selectors.userDueDate.value,
    selectors.userPriority.value
  );
  projects[selectedProject].addTask(task);
}

function deleteTask(li) {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-outline-danger");
  deleteBtn.setAttribute("type", "button");
  deleteBtn.textContent = "Delete";
  li.appendChild(deleteBtn);

  // delete btn
  deleteBtn.addEventListener("click", (e) => {
    const parent = e.target.parentNode;
    parent.remove(parent);
    // getting task index for deletion in database
    selectedTask = selectedTaskIndex(e.target);
    projects[selectedProject].deleteTask(selectedTask);
  });
}

function displayTask(index) {
  selectors.taskContent.textContent = "";

  projects[index].tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.add("add-task-content");
    li.setAttribute("data-index", index);
    li.textContent = task.title;
    li.textContent += task.description;
    li.textContent += task.dueDate;
    li.textContent += task.priority;
    // appending a btn from bootstrap
    deleteTask(li);
    selectors.taskContent.appendChild(li);
  });
}

//* event delegation for projects
selectors.navProject.addEventListener("click", (e) => {
  const liItems = document.querySelectorAll(".nav-projects li");
  liItems.forEach((liItems) => {
    if (e.target) {
      liItems.classList.remove("active");
    }
  });
  e.target.classList.add("active");
  selectors.mainTitle.textContent = e.target.textContent;
  selectedProject = selectedProjectIndex(e.target);
  displayTask(selectedProject);
  console.log(projects);
});

// project object
function createProject() {
  const project = new Project(selectors.userProject.value);
  projects.push(project);
}

function selectedProjectIndex(project) {
  return project.dataset.index;
}

function selectedTaskIndex(task) {
  return task.dataset.index;
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
  if (li.dataset.index === "0") {
    li.classList.add("active");
  }
}

function projectBtnSubmit() {
  selectors.addProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createProject();
    displayProjects();
    showProjectForm();
    showBlurBG();
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
  });
}

function taskBtnListener() {
  const taskBtn = document.querySelector(".task-btn");
  taskBtn.addEventListener("click", (e) => {
    showTaskForm();
    showBlurBG();
  });
}
// task content
selectors.taskContent.addEventListener("click", (e) => {
  e.target.classList.toggle("checked");
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

export { render, deleteTask };
