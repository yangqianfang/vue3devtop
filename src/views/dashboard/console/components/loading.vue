<template>
  <div ref="Loading" class="loading-wrap">
    <n-spin size="medium" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, h } from 'vue';
  // import { Nspin } from 'naive-ui';
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
    // render() {
    //   return h('div', { class: 'loading-wrap', VShow: isShow }, h(Nspin, { size: 'medium' }));
    // },
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
