<template>
  <div class="toast-container position-absolute pt-6 pe-3 top-0 end-0">
    <ToastComponent v-for="(msg, key) in messages" :key="key" :msg="msg"></ToastComponent>
  </div>
</template>

<script>
import ToastComponent from '@/components/ToastComponent.vue';

export default {
  components: { ToastComponent },
  data() {
    return {
      messages: [],
    };
  },
  inject: ['emitter'],
  mounted() {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message;
      this.messages.push({ style, title, content });
    });
  },
};
</script>
