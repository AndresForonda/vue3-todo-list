<template>
  <h3>Crea una tarea nueva</h3>
  <todo-list-input @createTask="createTaskFromParent" />
  <div v-if="tasksList.length" class="task-list-wrapper">
    <h2>Lista de tareas</h2>
    <todo-list-tasks-list
      :tasks="tasksList"
      @markTaskAsDone="markTaskAsDone"
      @removeTask="removeTask"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import TodoListInput from "./TodoListInput.vue";
import TodoListTasksList from "./TodoListTasksList.vue";
export default {
  components: {
    TodoListInput,
    TodoListTasksList,
  },
  setup() {
    const tasksList = ref([{ task: "Tasks", done: false }]);

    const createTaskFromParent = (task) => {
      if (task) {
        tasksList.value.push({ task, done: false });
      }
    };

    const removeTask = (index) => {
      tasksList.value.splice(index, 1);
    };

    const markTaskAsDone = (index) => {
      tasksList.value[index].done = true;
    };

    return {
      createTaskFromParent,
      markTaskAsDone,
      removeTask,
      tasksList,
    };
  },
};
</script>
