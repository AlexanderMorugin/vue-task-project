<template>
  <div class="card" v-if="currentTask">
    <h2>{{ currentTask.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="statusInfo" /></p>
    <p><strong>Дэдлайн</strong>: {{ currentTask.date }}</p>
    <p><strong>Описание</strong>: {{ currentTask.description }}</p>
    <div>
      <button class="btn" @click="changeStatus('pending')">
        Взять в работу
      </button>
      <button class="btn primary" @click="changeStatus('done')">
        Завершить
      </button>
      <button class="btn danger" @click="changeStatus('cancelled')">
        Отменить
      </button>
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
import axios from 'axios';

export default {
  setup() {
    const route = useRoute();
    const store = useStore();

    const currentId = route.params.id;
    const currentTask = computed(() =>
      store.getters.tasks.find((el) => el.id === currentId)
    );
    let statusInfo = computed(() => currentTask.value.status);

    const changeStatus = async (args) => {
      try {
        await axios.patch(
          `https://vue-freelance-df1a9-default-rtdb.firebaseio.com/task/${currentId}.json`,
          { status: args }
        );

        setTimeout(() => {
          getStatus();
        }, 200);
      } catch (error) {
        console.log(error);
      }
    };

    const getStatus = async () => {
      try {
        const { data } = await axios.get(
          `https://vue-freelance-df1a9-default-rtdb.firebaseio.com/task/${currentId}.json`
        );

        currentTask.value.status = data.status;
      } catch (error) {
        console.log(error);
      }
    };

    return {
      currentId,
      currentTask,
      statusInfo,
      changeStatus,
    };
  },
  components: { AppStatus },
};
</script>
