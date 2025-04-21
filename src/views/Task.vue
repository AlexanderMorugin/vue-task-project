<template>
  <div class="card" v-if="currentTask">
    <h2>{{ currentTask.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="currentTask.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ currentTask.date }}</p>
    <p><strong>Описание</strong>: {{ currentTask.description }}</p>
    <div>
      <button class="btn">Взять в работу</button>
      <button class="btn primary">Завершить</button>
      <button class="btn danger">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ currentId }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus.vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup() {
    const route = useRoute();
    const store = useStore();

    const currentId = route.params.id;
    const currentTask = computed(() =>
      store.getters.tasks.find((el) => el.id === currentId)
    );
    return {
      currentId,
      currentTask,
    };
  },
  components: { AppStatus },
};
</script>
