<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <todo-list />
</template>

<script setup>
// import TodoList from "./components/TodoListOneFile.vue";
// import TodoList from "./components/todo-list/TodoList.vue";
import TodoList from "./components/todo-list-composable/TodoList.vue";

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
:root {
  --color-primary: #41b883;
  --color-secondary: #35495d;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.input-wrapper,
.button {
  color: #fff;
  font-weight: 700;
}
.input-wrapper {
  width: 320px;
  margin: auto;
  border: solid 1px rgb(185, 185, 185);
  border-radius: 30px;
  padding: 10px;
  box-shadow: 0 0 1px 0px white inset, 0 0 1px 0px white;
}
.input {
  background-color: var(--color-secondary);
  padding: 10px 0;
  border-radius: 20px;
}

.input input {
  padding: 7px;
  border-radius: 10px;
  border: none;
  outline: none;
}

.button {
  border: none;
  border-radius: 5px;
  margin-left: 5px;
  padding: 4px 20px;
  color: #fff;
  background-color: var(--color-primary);
  cursor: pointer;
}
.disabled {
  background-color: rgb(211, 211, 211);
}
.task-list-wrapper {
  margin: 20px auto;
  width: 700px;
  background-color: var(--color-primary);
  padding: 10px 30px 30px;
  border-radius: 30px;
  color: #fff;
}
.task {
  background-color: var(--color-secondary);
  color: #fff;
  padding: 0px 30px;
  margin-bottom: 5px;
  text-align: left;
  border-radius: 20px;
  flex-flow: row wrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.remove-button,
.done-button {
  border: none;
  padding: 5px 10px;
  border-radius: 20px;
  margin-left: 5px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
}
.remove-button {
  background-color: rgb(150, 150, 150);
}
.done-button {
  background-color: var(--color-primary);
}
.done {
  text-decoration: line-through;
}
</style>
