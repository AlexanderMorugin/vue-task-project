<template>
  <app-loading v-if="isLoading"></app-loading>
  <template v-else>
    <template v-if="tasks !== 0">
      <h3 class="text-white">
        Всего активных задач:
        {{ activeTask.length }}
      </h3>

      <ul>
        <li v-for="item in tasks" :key="item.id">
          <div class="card">
            <h2 class="card-title">
              {{ item.title }}
              <AppStatus :type="item.status" />
            </h2>
            <p>
              <strong>
                <small>
                  {{ item.date }}
                </small>
              </strong>
            </p>
            <button class="btn primary" @click="navigate(item.id)">
              Посмотреть
            </button>
          </div>
        </li>
      </ul>
    </template>
    <h1 class="text-white center" v-else>Задач пока нет</h1>
  </template>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import AppStatus from '../components/AppStatus.vue';
import AppLoading from '../components/AppLoading.vue';
import { useTask } from '../hooks/useTask';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const { tasks, activeTask } = useTask();

    const isLoading = computed(() => store.state.isLoading);

    const navigate = (id) => {
      router.push(`tasks/${id}`);
    };

    onMounted(() => {
      store.commit('loadTasks');
    });

    return {
      isLoading,
      tasks,
      activeTask,
      navigate,
    };
  },
  components: { AppStatus, AppLoading },
};
</script>
