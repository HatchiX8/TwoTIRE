<template>
  <ProductContent></ProductContent>
  <ToastMessages></ToastMessages>
</template>

<script>
import ProductContent from '@/views/ProductContent.vue';
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';

export default {
  components: {
    ProductContent,
    ToastMessages,
  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>
