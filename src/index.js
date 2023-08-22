import './style.css';

// Array of tasks
const tasks = [
  { description: 'Add to your list...', completed: true, index: 1 },
  { description: 'Wash My clothes', completed: false, index: 2 },
  { description: 'Complete The To-do task', completed: false, index: 3 },
  { description: 'Get some sleep', completed: false, index: 4 },
];

function renderTasks() {
  const todoList = document.getElementById('todo-list');

  tasks.sort((a, b) => a.index - b.index); // Sort tasks by index

  todoList.innerHTML = ''; // Clear existing list

  tasks.forEach((task) => {
    const taskItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;

    taskItem.appendChild(checkbox);

    const descriptionSpan = document.createElement('span');
    descriptionSpan.textContent = task.description;
    if (task.completed) {
      descriptionSpan.classList.add('completed');
    }

    taskItem.appendChild(descriptionSpan);

    if (!task.completed) {
      const addButton = document.createElement('button');
      addButton.textContent = '+';
      addButton.classList.add('add-button');
      taskItem.appendChild(addButton);
    }

    todoList.appendChild(taskItem);
  });
}

// Call the renderTasks function on page load
window.addEventListener('DOMContentLoaded', renderTasks);
