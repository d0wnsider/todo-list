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
let selectedProject = "0";
let selectedTask = "0";

function createTask() {
  const task = new Task(
    selectors.userTitle.value,
    selectors.userDueDate.value,
    selectors.userPriority.value
  );
  projects[selectedProject].addTask(task);
}

function deleteTask(taskContainer) {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-outline-danger");
  deleteBtn.setAttribute("type", "button");
  deleteBtn.textContent = "Delete";
  taskContainer.appendChild(deleteBtn);

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
    const taskContainer = document.createElement("div");
    const titleContainer = document.createElement("div");
    const dueDateContainer = document.createElement("div");
    const prioContainer = document.createElement("div");
    li.classList.add("add-task-content");
    taskContainer.classList.add("add-task-container");
    li.setAttribute("data-index", index);
    titleContainer.textContent = task.title;
    dueDateContainer.textContent += task.dueDate;
    prioContainer.textContent += task.priority;
    // appending a btn from bootstrap
    li.appendChild(titleContainer);
    li.appendChild(dueDateContainer);
    li.appendChild(prioContainer);
    taskContainer.appendChild(li);
    deleteTask(taskContainer);
    selectors.taskContent.appendChild(taskContainer);
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

    const projectInput = document.querySelector("#project");
    if (projectInput.value === "") {
      // alert("Please enter your name");
      projectInput.classList.add("is-invalid");
      return;
    }
    createProject();
    displayProjects();
    showProjectForm();
    showBlurBG();
    selectors.projectForm.reset();
    projectInput.classList.remove("is-invalid");
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
    if (selectors.userTitle.value === "") {
      selectors.userTitle.classList.add("is-invalid");
    } else if (selectors.userTitle.value) {
      selectors.userTitle.classList.remove("is-invalid");
      selectors.userTitle.classList.add("is-valid");
    }
    if (selectors.userDueDate.value === "") {
      selectors.userDueDate.classList.add("is-invalid");
    } else if (selectors.userDueDate.value) {
      selectors.userDueDate.classList.remove("is-invalid");
      selectors.userDueDate.classList.add("is-valid");
    }
    if (selectors.userPriority.value === "") {
      selectors.userPriority.classList.add("is-invalid");
      return;
    }
    showTask();
    createTask();
    showTaskForm();
    showBlurBG();
    selectors.taskForm.reset();
    selectors.userTitle.classList.remove("is-invalid", "is-valid");
    selectors.userDueDate.classList.remove("is-invalid", "is-valid");
    selectors.userPriority.classList.remove("is-invalid", "is-valid");
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
