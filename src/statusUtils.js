// statusUtils.js
export default function clearCompletedTasks(tasks) {
  const updatedTasks = tasks.filter((task) => !task.completed);

  updatedTasks.forEach((task, index) => {
    task.index = index + 1;
  });

  return updatedTasks;
}
