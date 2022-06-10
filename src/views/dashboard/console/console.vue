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
    <div class="mt-4">
      <n-card :bordered="false" class="proCard">
        <BasicTable
          :columns="columns"
          :request="loadDataTable"
          :row-key="(row) => row.id"
          ref="actionRef"
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
        </BasicTable>
      </n-card>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref, onMounted, h, reactive } from 'vue';
  import { getConsoleInfo } from '@/api/dashboard/console';
  import { CountTo } from '@/components/CountTo/index';
  import {
    CaretUpOutlined,
    CaretDownOutlined,
    UnorderedListOutlined,
    PlusOutlined,
  } from '@vicons/antd';
  import { useMessage } from 'naive-ui';
  import { BasicTable, TableAction } from '@/components/Table';
  // import { BasicForm, useForm } from '@/components/Form/index';
  import {
    getConsoleList,
    publishUpgrade,
    publishFinish,
    publishRollback,
  } from '@/api/dashboard/console';
  import { columns } from './columns';
  import { useRouter } from 'vue-router';

  const loading = ref(true);
  const visits = ref<any>({});
  const saleroom = ref<any>({});
  const orderLarge = ref<any>({});
  const volume = ref({});
  const $Loading = window['$Loading'].value;

  onMounted(async () => {
    const data = await getConsoleInfo();
    visits.value = data.visits;
    saleroom.value = data.saleroom;
    orderLarge.value = data.orderLarge;
    volume.value = data.volume;
    loading.value = false;
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
    width: 220,
    title: '操作',
    key: 'action',
    fixed: 'right',
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
            ifShow: () => {
              return true;
            },
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
        ],
      });
    },
  });

  const loadDataTable = async (res) => {
    let list = await getConsoleList({ ...formParams, ...params.value, ...res });
    return list;
  };

  function onCheckedRow(rowKeys) {
    console.log(rowKeys);
  }

  function reloadTable() {
    actionRef.value.reload();
  }

  const handleSubmit = async (record: Recordable) => {
    let selectVersion = record.selectVersion || record.list[0].value;
    let { appid, currversion, appname } = record;
    if (!selectVersion) {
      message.warning('版本号不正确！');
      return;
    }
    if (selectVersion === currversion) {
      let msg = `服务[${appname}]版本号${currversion}已经上线！`;
      message.warning(msg);
      return;
    }
    $Loading.show();
    await publishUpgrade({ id: appid, appname: appname, version: selectVersion });
    message.success(`服务[${appname}]版本号${selectVersion} 发布成功`);
    $Loading.hide();
    reloadTable();
  };

  // 完成按钮
  const handleDone = async (record: Recordable) => {
    let { appid, appname } = record;
    $Loading.show();
    await publishFinish({ id: appid, appname: appname });
    message.success(`服务[${appname}]完成升级!`);
    reloadTable();
    $Loading.hide();
  };

  // 回滚按钮
  const handleRolledback = async (record: Recordable) => {
    let { appid, appname } = record;
    $Loading.show();
    await publishRollback({ id: appid, appname: appname });
    message.success(`服务[${appname}]回滚成功!`);
    reloadTable();
    $Loading.hide();
  };
</script>

<style lang="less" scoped>
  .list-title {
    display: flex;
    align-items: center;
    font-weight: bold;
  }
</style>
