<template>
  <div class="mt-4" v-if="Object.keys(chartData).length > 0">
    <NRow :gutter="24">
      <NCol :span="24">
        <n-card content-style="padding: 0;" :bordered="false">
          <n-tabs type="line" size="large" :tabs-padding="20" pane-style="padding: 20px;">
            <n-tab-pane name="访问量">
              <VisitAmount :data="chartData" />
            </n-tab-pane>
            <n-tab-pane name="流量趋势">
              <PieChart :data="pieData" />
            </n-tab-pane>
          </n-tabs>
        </n-card>
      </NCol>
    </NRow>
  </div>
</template>
<script lang="ts">
  import { defineComponent, toRefs, watchEffect, watch, ref } from 'vue';
  import PieChart from './PieChart.vue';
  import VisitAmount from './VisitAmount.vue';

  export default defineComponent({
    components: { PieChart, VisitAmount },
    props: {
      chartData: {
        type: [Object, Array],
        default: null,
      },
    },

    setup(props: Data) {
      const chartData = toRefs(props.chartData) || null;
      const pieData = ref([]);
      const barData = ref();

      function formatterData(data) {
        let x = data.x;
        let series = data.x;
        let arr = [];
        x.forEach((element, index) => {
          arr.push({ value: series[index], name: element });
        });
        return arr;
      }

      watchEffect(() => {
        chartData.value = props.chartData;
        if (chartData.value.x) {
          pieData.value = formatterData(props.chartData);
        }
      });

      // watch(
      //   () => props.chartData,
      //   () => {
      //     console.log('watche');
      //   }
      // );

      // const barData = computed(() => chartData.value);
      return {
        barData,
        pieData,
      };
    },
  });
</script>
