import { ref } from "vue";

const tasksList = ref([{ task: "Tasks", done: false }]);
const task = ref("");

export default function useTodos() {
  const createTask = () => {
    if (task.value) {
      tasksList.value.push({ task: task.value, done: false });
      task.value = "";
    }
  };

  const removeTask = (index) => {
    tasksList.value.splice(index, 1);
  };

  const markTaskAsDone = (index) => {
    tasksList.value[index].done = true;
  };

  return {
    createTask,
    markTaskAsDone,
    removeTask,
    task,
    tasksList,
  };
}
