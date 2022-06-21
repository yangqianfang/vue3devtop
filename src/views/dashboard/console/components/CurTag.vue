<template>
  <div ref="chartRef">
    <n-tag type="success" :title="title">
      {{ title }}
      <n-icon size="14">
        <CheckmarkCircle />
      </n-icon>
    </n-tag>
  </div>
</template>
<script lang="ts">
  // 表格内自定义带icon tag组件 自带n-tag 低版本不支持icon
  import { defineComponent } from 'vue';
  import { CheckmarkCircle } from '@vicons/ionicons5';

  export default defineComponent({
    components: { CheckmarkCircle },
    props: {
      title: {
        type: String,
        default: '',
      },
    },
    setup() {},
  });
</script>
