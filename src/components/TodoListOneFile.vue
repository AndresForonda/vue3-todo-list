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
export default {
  data: () => ({
    tasksList: [],
    task: ''
  }),
  methods: {
    createTask = () => {
      if (this.task) {
        tasksList.push({ task: this.task, done: false });
        task = "";
      }
    },
    removeTask(index) {
      tasksList.splice(index, 1);
    },

    markTaskAsDone(index){
      tasksList[index].done = true;
    },
  },
  computed: {
    buttonDisabled() {
      return !task.length;
    }
  }
};
</script>
