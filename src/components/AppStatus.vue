<template>
  <span :class="['badge', currentType.typeClass]">{{
    currentType.typeText
  }}</span>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ['type'],
  setup(props) {
    const currentType = computed(() => {
      if (props.type === 'active') {
        return {
          typeClass: 'primary',
          typeText: 'Активный',
        };
      }

      if (props.type === 'done') {
        return {
          typeClass: 'danger',
          typeText: 'Выполнен',
        };
      }

      if (props.type === 'cancelled') {
        return {
          typeClass: '',
          typeText: 'Отменён',
        };
      }

      if (props.type === 'pending') {
        return {
          typeClass: 'warning',
          typeText: 'Выполняется',
        };
      }
    });

    return {
      currentType,
    };
  },
};
</script>
