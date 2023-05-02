class Project {
  constructor(name, active) {
    this.name = name;
    this.tasks = [];
    this.active = active;
  }

  addTask(task) {
    this.tasks.push(task);
  }
}

export default Project;
