<template>
  <header class="navbar">
    <router-link to="/"><h3>Список задач</h3></router-link>

    <ul class="navbar-menu">
      <li><router-link to="/tasks">Все задачи</router-link></li>
      <li>
        <router-link to="/new">Создать задачу</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {};
</script>
