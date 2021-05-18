<template>
  <div class="input-wrapper">
    <div class="input">
      <label for="task">Tarea: </label>
      <input
        type="text"
        id="task"
        v-model="task"
        @keyup.enter="createTask"
        placeholder="Add new task"
      />
      <button
        class="button"
        @click="createTask"
        :disabled="buttonDisabled"
        :class="{ disabled: buttonDisabled }"
      >
        Crear
      </button>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  props: {},
  emits: ["createTask"],
  setup(props, { emit }) {
    const task = ref("");
    const createTask = () => {
      if (task.value) {
        emit("createTask", task.value);
        task.value = "";
      }
    };

    const buttonDisabled = computed(() => {
      return !task.value.length;
    });

    return {
      buttonDisabled,
      task,
      createTask,
    };
  },
};
</script>

<style lang="scss" scoped></style>
