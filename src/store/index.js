import axios from 'axios';
import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      tasks: [],
      isLoading: false,
    };
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },
    activeTask(_, getters) {
      return getters.tasks.filter((item) => item.status === 'active');
    },
  },
  mutations: {
    async loadTasks(state) {
      try {
        state.isLoading = true;
        const { data } = await axios.get(
          'https://vue-freelance-df1a9-default-rtdb.firebaseio.com/task.json'
        );

        if (data) {
          state.tasks = Object.keys(data).map((key) => {
            return {
              id: key,
              ...data[key],
            };
          });
        }

        state.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
