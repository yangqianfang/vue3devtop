<template>
  <div ref="chartRef" :style="{ height, width }"></div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref, watchEffect, Ref } from 'vue';
  import { useECharts } from '@/hooks/web/useECharts';
  import { basicProps } from './props';

  export default defineComponent({
    props: basicProps,
    setup(props) {
      const chartRef = ref<HTMLDivElement | null>(null);
      const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);

      onMounted(() => {
        // showChart();
      });
      const showChart = (data) => {
        setOptions({
          title: {
            text: 'API状态响应码',
            subtext: 'ES FROM NGINX',
            left: 'center',
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
          legend: {
            orient: 'vertical',
            left: 'left',
          },
          series: [
            {
              name: '访问来源',
              radius: '65%',
              center: ['50%', '55%'],
              data: data,
              type: 'pie',
              barMaxWidth: 80,
              emphasis: {
                itemStyle: {
                  shadowBlur: 20,
                  shadowOffsetX: 5,
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
              },
            },
          ],
        });
      };
      watchEffect(() => {
        const data = props.data;
        showChart(data);
      });

      return { chartRef };
    },
  });
</script>
