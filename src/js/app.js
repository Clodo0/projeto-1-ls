import { addTask, deleteTask, renderTasks } from './modules/tasks.js';

// Carregar tarefas ao iniciar
document.addEventListener('DOMContentLoaded', renderTasks);

// Adicionar tarefa
document.getElementById('task-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const taskInput = document.getElementById('task-input');
  if (taskInput.value.trim()) {
    addTask(taskInput.value.trim());
    taskInput.value = '';
    renderTasks();
  }
});

// Expor a função globalmente para uso no HTML
window.deleteTask = deleteTask;