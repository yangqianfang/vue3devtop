<template>
  <div ref="Loading" class="loading-wrap" v-if="isShow">
    <n-spin size="medium" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const isShow = ref(false);
      const show = function () {
        isShow.value = true;
      };
      const hide = function () {
        isShow.value = false;
      };
      return {
        show,
        hide,
        isShow,
      };
    },
  });
</script>

<style lang="less" scoped>
  .loading-wrap {
    background: rgba(255, 255, 255, 0.3);
    display: flex;
    position: fixed;
    z-index: 2000;
    left: 0;
    height: 100%;
    top: 0;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
</style>
