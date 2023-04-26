import showProjectForm from "./dom.js";

function projectBtnListener() {
  const projectBtn = document.querySelector(".project-btn");
  projectBtn.addEventListener("click", (e) => {
    // e.preventDefault();
    showProjectForm();
  });
}

function listeners() {
  projectBtnListener();
}

function render() {
  listeners();
}

export default render;
