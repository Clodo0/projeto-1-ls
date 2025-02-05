import { saveTasks, loadTasks } from './storage.js';

export const addTask = (task) => {
  const tasks = loadTasks();
  tasks.push({ id: Date.now(), text: task });
  saveTasks(tasks);
};

export const deleteTask = (id) => {
  const tasks = loadTasks().filter(task => task.id !== id);
  saveTasks(tasks);
  renderTasks(); // Atualiza a lista após exclusão
};

export const renderTasks = () => {
  const tasks = loadTasks();
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = tasks.map(task => `
    <li>
      ${task.text}
      <button onclick="deleteTask(${task.id})">Excluir</button>
    </li>
  `).join('');
};