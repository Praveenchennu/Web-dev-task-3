document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
  });
  
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach(function(task) {
      const li = document.createElement('li');
      li.textContent = task.name;
      if (task.completed) {
        li.classList.add('completed');
      }
      li.addEventListener('click', function() {
        toggleTaskStatus(task);
      });
      taskList.appendChild(li);
    });
  }
  
  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();
    if (taskName !== '') {
      const task = {
        name: taskName,
        completed: false
      };
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      taskInput.value = '';
      loadTasks();
    }
  }
  
  function toggleTaskStatus(task) {
    task.completed = !task.completed;
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
  }
  