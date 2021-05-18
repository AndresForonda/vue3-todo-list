<template>
  <div v-for="(task, index) in tasks" :key="index" class="task">
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
export default {
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  emits: ["removeTask", "markTaskAsDone"],
  setup(props, { emit }) {
    const markTaskAsDone = (index) => {
      emit("markTaskAsDone", index);
    };

    const removeTask = (index) => {
      emit("removeTask", index);
    };

    return {
      markTaskAsDone,
      removeTask,
    };
  },
};
</script>

<style lang="scss" scoped></style>
