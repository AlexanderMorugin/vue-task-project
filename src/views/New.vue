<template>
  <form class="card" @submit.prevent="submit">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title" />
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date" />
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" :disabled="!isValid">Создать</button>
  </form>
</template>

<script>
import axios from 'axios';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const title = ref('');
    const date = ref(null);
    const description = ref('');

    const isValid = computed(() => {
      if (title.value.length > 3 && description.value.length > 3) {
        return true;
      } else {
        return false;
      }
    });

    const submit = async () => {
      try {
        await axios.post(
          'https://vue-freelance-df1a9-default-rtdb.firebaseio.com/task.json',
          {
            title: title.value,
            date: new Date(date.value).toLocaleDateString(),
            description: description.value,
            status: 'active',
          }
        );
        router.push('/tasks');
      } catch (error) {
        console.log(error);
      }
    };
    return {
      title,
      date,
      description,
      submit,
      isValid,
    };
  },
};
</script>
