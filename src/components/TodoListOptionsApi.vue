<template>
  <h3>Crea una tarea nueva</h3>
  <div class="input-wrapper">
    <div class="input">
      <label for="task">Tarea: </label>
      <input
        type="text"
        id="task"
        v-model="task"
        @keyup.enter="createTask"
        placeholder="Ingresa una nueva tarea"
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
  <div v-if="tasksList.length" class="task-list-wrapper">
    <h2>Lista de tareas</h2>
    <div v-for="(task, index) in tasksList" :key="index" class="task">
      <p :class="{ done: task.done }">{{ index + 1 }}. {{ task.task }}</p>
      <div>
        <button class="remove-button" @click="removeTask(index)">
          Eliminar
        </button>
        <button class="done-button" @click="markTaskAsDone(index)">
          Completar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  setup() {
    const tasksList = ref([]);
    const task = ref("");

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

    const buttonDisabled = computed(() => {
      return !task.value.length;
    });

    return {
      buttonDisabled,
      tasksList,
      removeTask,
      markTaskAsDone,
      task,
      createTask,
    };
  },
};
</script>
