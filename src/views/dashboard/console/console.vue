<template>
  <div class="console">
    <!--数据卡片-->
    <!-- <n-grid cols="1 s:2 m:3 l:4 xl:4 2xl:4" responsive="screen" :x-gap="12" :y-gap="8">
      <n-grid-item>
        <NCard
          title="访问量"
          :segmented="{ content: 'hard', footer: 'hard' }"
          size="small"
          :bordered="false"
        >
          <template #header-extra>
            <n-tag type="success">日</n-tag>
          </template>
          <div class="py-1 px-1 flex justify-between">
            <n-skeleton v-if="loading" :width="100" size="medium" />
            <CountTo v-else :startVal="1" :endVal="visits.dayVisits" class="text-3xl" />
          </div>
          <div class="py-1 px-1 flex justify-between">
            <div class="text-sn">
              <n-skeleton v-if="loading" :width="100" size="medium" />
              <template v-else>
                日同比
                <CountTo :startVal="1" suffix="%" :endVal="visits.rise" />
                <n-icon size="12" color="#00ff6f">
                  <CaretUpOutlined />
                </n-icon>
              </template>
            </div>
            <div class="text-sn">
              <n-skeleton v-if="loading" :width="100" size="medium" />
              <template v-else>
                周同比
                <CountTo :startVal="1" suffix="%" :endVal="visits.decline" />
                <n-icon size="12" color="#ffde66">
                  <CaretDownOutlined />
                </n-icon>
              </template>
            </div>
          </div>
          <template #footer>
            <div class="flex justify-between">
              <n-skeleton v-if="loading" text :repeat="2" />
              <template v-else>
                <div class="text-sn"> 总访问量： </div>
                <div class="text-sn">
                  <CountTo :startVal="1" :endVal="visits.amount" />
                </div>
              </template>
            </div>
          </template>
        </NCard>
      </n-grid-item>
      <n-grid-item>
        <NCard
          title="销售额"
          :segmented="{ content: 'hard', footer: 'hard' }"
          size="small"
          :bordered="false"
        >
          <template #header-extra>
            <n-tag type="info">周</n-tag>
          </template>
          <div class="py-1 px-1 flex justify-between">
            <n-skeleton v-if="loading" :width="100" size="medium" />
            <CountTo
              v-else
              prefix="￥"
              :startVal="1"
              :endVal="saleroom.weekSaleroom"
              class="text-3xl"
            />
          </div>
          <div class="py-2 px-2 flex justify-between">
            <div class="text-sn flex-1">
              <n-progress
                type="line"
                :percentage="saleroom.degree"
                :indicator-placement="'inside'"
                processing
              />
            </div>
          </div>
          <template #footer>
            <div class="flex justify-between">
              <n-skeleton v-if="loading" :width="100" size="medium" />
              <template v-else>
                <div class="text-sn"> 总销售额： </div>
                <div class="text-sn">
                  <CountTo prefix="￥" :startVal="1" :endVal="saleroom.amount" />
                </div>
              </template>
            </div>
          </template>
        </NCard>
      </n-grid-item>
      <n-grid-item>
        <NCard
          title="订单量"
          :segmented="{ content: 'hard', footer: 'hard' }"
          size="small"
          :bordered="false"
        >
          <template #header-extra>
            <n-tag type="warning">周</n-tag>
          </template>
          <div class="py-1 px-1 flex justify-between">
            <n-skeleton v-if="loading" :width="100" size="medium" />
            <CountTo v-else :startVal="1" :endVal="orderLarge.weekLarge" class="text-3xl" />
          </div>
          <div class="py-1 px-1 flex justify-between">
            <div class="text-sn">
              <n-skeleton v-if="loading" :width="100" size="medium" />
              <template v-else>
                日同比
                <CountTo :startVal="1" suffix="%" :endVal="orderLarge.rise" />
                <n-icon size="12" color="#00ff6f">
                  <CaretUpOutlined />
                </n-icon>
              </template>
            </div>
            <div class="text-sn">
              <n-skeleton v-if="loading" :width="100" size="medium" />
              <template v-else>
                周同比
                <CountTo :startVal="1" suffix="%" :endVal="orderLarge.rise" />
                <n-icon size="12" color="#ffde66">
                  <CaretDownOutlined />
                </n-icon>
              </template>
            </div>
          </div>
          <template #footer>
            <div class="flex justify-between">
              <n-skeleton v-if="loading" :width="100" size="medium" />
              <template v-else>
                <div class="text-sn"> 转化率： </div>
                <div class="text-sn">
                  <CountTo :startVal="1" suffix="%" :endVal="orderLarge.amount" />
                </div>
              </template>
            </div>
          </template>
        </NCard>
      </n-grid-item>
      <n-grid-item>
        <NCard
          title="成交额"
          :segmented="{ content: 'hard', footer: 'hard' }"
          size="small"
          :bordered="false"
        >
          <template #header-extra>
            <n-tag type="error">月</n-tag>
          </template>
          <div class="py-1 px-1 flex justify-between">
            <n-skeleton v-if="loading" :width="100" size="medium" />
            <CountTo v-else prefix="￥" :startVal="1" :endVal="volume.weekLarge" class="text-3xl" />
          </div>
          <div class="py-1 px-1 flex justify-between">
            <div class="text-sn">
              <n-skeleton v-if="loading" :width="100" size="medium" />
              <template v-else>
                月同比
                <CountTo :startVal="1" suffix="%" :endVal="volume.rise" />
                <n-icon size="12" color="#00ff6f">
                  <CaretUpOutlined />
                </n-icon>
              </template>
            </div>
            <div class="text-sn">
              <n-skeleton v-if="loading" :width="100" size="medium" />
              <template v-else>
                月同比
                <CountTo :startVal="1" suffix="%" :endVal="volume.decline" />
                <n-icon size="12" color="#ffde66">
                  <CaretDownOutlined />
                </n-icon>
              </template>
            </div>
          </div>
          <template #footer>
            <div class="flex justify-between">
              <n-skeleton v-if="loading" :width="100" size="medium" />
              <template v-else>
                <div class="text-sn"> 总成交额： </div>
                <div class="text-sn">
                  <CountTo prefix="￥" :startVal="1" :endVal="volume.amount" />
                </div>
              </template>
            </div>
          </template>
        </NCard>
      </n-grid-item>
    </n-grid> -->
    <!--访问量 | 流量趋势-->
    <!-- <button @click="chartData = 333">改变chartData</button> -->
    <!-- <VisiTab :chartData="chartData" /> -->
    <div class="mt-4">
      <n-card :bordered="false" class="proCard">
        <BasicTable
          :columns="columns"
          :dataSource="tableData"
          :row-key="(row) => row.id"
          :pagination="false"
          ref="actionRef"
          :reloadBt="loadDataTable"
          :actionColumn="actionColumn"
          @update:checked-row-keys="onCheckedRow"
          :scroll-x="1090"
        >
          <template #tableTitle>
            <div class="list-title">
              <n-icon size="18">
                <UnorderedListOutlined />
              </n-icon>
              服务列表
            </div>
          </template>
          <template #toolbar>
            <n-button type="primary" size="small" @click="addApp">
              <template #icon>
                <n-icon>
                  <PlusOutlined />
                </n-icon>
              </template>
              新建
            </n-button>
          </template>
        </BasicTable>
      </n-card>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref, onMounted, h, reactive } from 'vue';
  import { getConsoleInfo } from '@/api/dashboard/console';
  import VisiTab from './components/VisiTab.vue';
  import { CountTo } from '@/components/CountTo/index';
  import {
    CaretUpOutlined,
    CaretDownOutlined,
    UnorderedListOutlined,
    PlusOutlined,
  } from '@vicons/antd';
  import { useMessage, useDialog } from 'naive-ui';
  import { BasicTable, TableAction } from '@/components/Table';
  // import { BasicForm, useForm } from '@/components/Form/index';
  import {
    getPublishList,
    publishUpgrade,
    publishFinish,
    publishRollback,
    publishDelete,
  } from '@/api/dashboard/console';
  import { columns } from './columns';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const visits = ref<any>({});
  const saleroom = ref<any>({});
  const orderLarge = ref<any>({});
  const volume = ref({});
  const $Loading = window['$Loading'];
  const dialog = useDialog();
  const chartData = ref<any>({});
  const tableData = ref<any>([]);
  const adminId = ref();
  function addParams(data) {
    data.forEach((element) => {
      element.loading = false;
      element.list = [];
      element.selectVersion = element.version;
    });
    console.log(data);
    return data;
  }

  onMounted(async () => {
    // loadChartData();
    // const data = await getConsoleInfo();
    //  visits.value = data.visits;
    // aleroom.value = data.saleroom;
    // orderLarge.value = data.orderLarge;
    // volume.value = data.volume;
    // const cData = await getChartData();
    // chartData.value = cData;
    loadDataTable();
  });

  const message = useMessage();
  const actionRef = ref();
  const formParams = reactive({
    name: '',
    address: '',
    date: null,
  });
  const params = ref({
    pageSize: 5,
    name: 'xiaoMa',
  });

  const actionColumn = reactive({
    width: '320',
    title: '操作',
    key: 'action',
    fixed: false,
    render(record) {
      return h(TableAction as any, {
        style: 'button',
        actions: [
          {
            label: '发布',
            type: 'success',
            icon: 'ic:outline-delete-outline',
            onClick: () => {
              handleSubmit(record);
            },
            // 根据业务控制是否显示 isShow 和 auth 是并且关系

            // 根据权限控制是否显示: 有权限，会显示，支持多个
            // auth: ['basic_list'],
          },
          {
            label: '完成',
            type: 'warning',
            onClick: () => {
              handleDone(record);
            },
          },
          {
            label: '回滚',
            type: 'error',
            onClick: () => {
              handleRolledback(record);
            },
          },
          {
            label: '编辑',
            type: 'error',
            ifShow: () => {
              return adminId.value === 1;
            },
            onClick: () => {
              addApp(record);
            },
          },
          {
            label: '删除',
            ifShow: () => {
              return adminId.value === 1;
            },
            type: 'error',
            onClick: () => {
              handleDelete(record);
            },
          },
        ],
      });
    },
  });

  const loadDataTable = async (res) => {
    $Loading.value.show();
    let tData = await getPublishList();
    tableData.value = addParams(tData.apps);
    adminId.value = tData.adminId;
    $Loading.value.hide();
  };

  // const loadChartData = async () => {
  //   return await getChartData();
  // };

  // loadChartData();
  function onCheckedRow(rowKeys) {
    console.log(rowKeys);
  }

  function reloadTable() {
    loadDataTable();
  }

  /* 
  发布版本
  */
  const handleSubmit = async (record: Recordable) => {
    let { id, selectVersion, version, name } = record;
    if (!selectVersion) {
      message.warning('版本号不正确！');
      return;
    }
    if (selectVersion === version) {
      let msg = `服务[${name}]版本号${selectVersion}已经上线！`;
      message.warning(msg);
      return;
    }
    try {
      $Loading.value.show();
      await publishUpgrade({ id, name, version: selectVersion });
      message.success(`服务[${name}]版本号${selectVersion} 发布成功`);
      $Loading.value.hide();
      reloadTable();
    } catch (error) {
      $Loading.value.hide();
    }
  };

  // 完成按钮
  const handleDone = async (record: Recordable) => {
    let { id, version } = record;
    try {
      $Loading.value.show();
      await publishFinish({ id, version });
      message.success(`服务[${name}]完成升级!`);
      $Loading.value.hide();
      reloadTable();
    } catch (error) {
      $Loading.value.hide();
    }
  };

  // 请求回滚
  async function dopublishRollback(record: Recordable) {
    try {
      $Loading.value.show();
      await publishRollback(record);
      message.success(`服务[${record.name}]回滚成功!`);
      $Loading.value.hide();
    } catch (error) {
      $Loading.value.hide();
    }
  }

  // 回滚按钮
  const handleRolledback = async (record: Recordable) => {
    let { id, name } = record;
    dialog.info({
      title: '提示',
      content: `确定要回滚[${name}]吗？`,
      positiveText: '确定',
      negativeText: '取消',
      onPositiveClick: () => {
        dopublishRollback({ id });
      },
      onNegativeClick: () => {},
    });
  };

  // 请求删除
  async function dopublishDelete(record) {
    try {
      $Loading.value.show();
      await publishDelete(record);
      message.success(`服务[${record.name}]删除成功!`);
      $Loading.value.hide();
      reloadTable();
    } catch (error) {
      $Loading.value.hide();
    }
  }

  // 删除事件
  const handleDelete = async (record: Recordable) => {
    let { id, name } = record;
    dialog.info({
      title: '提示',
      content: `确定要删除服务[${name}]吗？`,
      positiveText: '确定',
      negativeText: '取消',
      onPositiveClick: () => {
        dopublishDelete({ id, name });
      },
      onNegativeClick: () => {},
    });
  };

  // 跳转至添加页面
  const addApp = (record) => {
    let params = record.id ? { id: record.id } : {};
    router.push({ name: 'addapp', params });
  };
</script>

<style lang="less" scoped>
  .list-title {
    display: flex;
    align-items: center;
    font-weight: bold;
  }
</style>
