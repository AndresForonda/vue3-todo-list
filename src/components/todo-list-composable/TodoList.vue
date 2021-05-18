<template>
  <h3>Crea una tarea nueva</h3>
  <todo-list-input />
  <div v-if="tasksList.length" class="task-list-wrapper">
    <h2>Lista de tareas</h2>
    <todo-list-tasks-list />
  </div>
</template>

<script>
import TodoListInput from "./TodoListInput.vue";
import TodoListTasksList from "./TodoListTasksList.vue";
import useTodos from "./todos";
export default {
  components: {
    TodoListInput,
    TodoListTasksList,
  },
  setup() {
    const { tasksList } = useTodos();
    return {
      tasksList,
    };
  },
};
</script>
