<template>
  <div v-for="(task, index) in tasksList" :key="index" class="task">
    <p :class="{ done: task.done }">{{ index + 1 }}. {{ task.task }}</p>
    <div>
      <button class="remove-button" @click="removeTask(index)">Eliminar</button>
      <button class="done-button" @click="markTaskAsDone(index)">
        Completar
      </button>
    </div>
  </div>
</template>

<script>
import useTodos from "./todos";
export default {
  setup() {
    const { markTaskAsDone, removeTask, tasksList } = useTodos();
    return {
      markTaskAsDone,
      removeTask,
      tasksList,
    };
  },
};
</script>

<style lang="scss" scoped></style>
