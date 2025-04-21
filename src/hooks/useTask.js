import { useStore } from 'vuex';
import { computed } from 'vue';

export const useTask = () => {
  const store = useStore();

  const tasks = computed(() => store.getters.tasks);

  const activeTask = computed(() => store.getters.activeTask);

  return { tasks, activeTask };
};
