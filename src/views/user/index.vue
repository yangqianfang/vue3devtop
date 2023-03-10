<template>
  <div>
    <n-card :bordered="false" class="proCard">
      <BasicTable
        :columns="columns"
        :dataSource="tableData"
        :row-key="(row) => row.id"
        :pagination="false"
        ref="actionRef"
        :reloadBt="loadDataTable"
        :scroll-x="1090"
      >
        <template #tableTitle>
          <div class="list-title">
            <n-icon size="18">
              <UnorderedListOutlined />
            </n-icon>
            用户列表
          </div>
        </template>
        <template #toolbar>
          <n-button type="primary" size="small" @click="handleEdit">
            <template #icon>
              <n-icon>
                <PlusOutlined />
              </n-icon>
            </template>
            新建
          </n-button>
        </template>
      </BasicTable>

      <!-- <div class="table-wrap">
        <n-data-table
          :bordered="false"
          :columns="columns"
          :data="tableData"
          striped
          :pagination="false"
        />
      </div> -->
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { NButton, useDialog } from 'naive-ui';
  import { BasicTable, TableAction } from '@/components/Table';
  import { getUserList, deleteUser, enableUser } from '@/api/system/userlist';
  import { getColumns } from './columns';
  import { UnorderedListOutlined, PlusOutlined } from '@vicons/antd';
  import { useRouter } from 'vue-router';
  const $Loading = window['$Loading'];
  const columns = getColumns({ handleEdit, handleEnable, handleDelete });
  const tableData = ref([]);
  const router = useRouter();
  const dialog = useDialog();

  onMounted(async () => {
    loadDataTable();
  });

  const loadDataTable = async () => {
    try {
      $Loading.value.show();
      let res = await getUserList();
      tableData.value = res.list;
      $Loading.value.hide();
    } catch (error) {
      $Loading.value.hide();
    }
  };

  // 启用禁用
  function handleEnable(record: Recordable) {
    const { id, nickname, enable } = record;
    const text = enable === 1 ? '禁用' : '启用';

    dialog.info({
      title: '提示',
      content: `确定要${text}[${nickname}]吗？`,
      positiveText: '确定',
      negativeText: '取消',
      onPositiveClick: async () => {
        try {
          $Loading.value.show();
          await enableUser({ id });
          loadDataTable();
          $Loading.value.hide();
        } catch (error) {
          $Loading.value.hide();
        }
      },
      onNegativeClick: () => {},
    });
  }

  // 删除
  function handleDelete(record: Recordable) {
    const { id, nickname } = record;
    dialog.info({
      title: '提示',
      content: `确定要删除[${nickname}]吗？`,
      positiveText: '确定',
      negativeText: '取消',
      onPositiveClick: async () => {
        try {
          $Loading.value.show();
          await deleteUser({ id });
          loadDataTable();
          $Loading.value.hide();
        } catch (error) {
          $Loading.value.hide();
        }
      },
      onNegativeClick: () => {},
    });
  }

  // 编辑
  function handleEdit(row) {
    router.push({ name: 'adduser', params: { id: row.id || '' } });
  }
</script>

<style lang="less" scoped>
  .table-toolbar {
    display: flex;
    justify-content: space-between;
    padding: 0 0 16px 0;
  }
  .table-wrap {
    border: 1px solid #efeff5;
    border-radius: 3px;
    border-bottom: 0;
    overflow: hidden;
  }
  .list-title {
    display: flex;
    align-items: center;
    font-weight: bold;
  }
  .list-button {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    gap: 8px 12px;
  }
  :deep(.button-wrap) {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    gap: 8px 12px;
  }
</style>
