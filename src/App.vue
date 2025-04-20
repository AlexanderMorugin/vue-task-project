<template>
  <app-navbar></app-navbar>
  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';

export default {
  components: { AppNavbar },
};
</script>