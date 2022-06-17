<template>
  <div>
    <n-card :bordered="false" class="mt-4 proCard">
      <n-grid cols="1 s:1 m:3 l:3 xl:3 2xl:3" responsive="screen">
        <n-grid-item offset="0 s:0 m:1 l:1 xl:1 2xl:1">
          <n-form
            :label-width="80"
            :model="formValue"
            :rules="rules"
            label-placement="left"
            ref="formRef"
            class="py-8"
          >
            <n-form-item label="服务名称" path="appname">
              <n-select
                clearable
                placeholder="请选择服务名称"
                :options="appList.list"
                @update:value="handleUpdateValue"
                v-model:value="formValue.appname"
              />
            </n-form-item>
            <n-form-item label="Before" path="before">
              <n-input-number
                :show-button="true"
                v-model:value="formValue.before"
                placeholder="输入开始行数"
              />
            </n-form-item>
            <n-form-item label="After	" path="after">
              <n-input-number
                :show-button="true"
                placeholder="输入结束行数"
                v-model:value="formValue.after"
              />
            </n-form-item>
            <n-form-item label="关键词" path="keyword">
              <n-input v-model:value="formValue.keyword" type="text" placeholder="关键词" />
            </n-form-item>

            <div style="margin-left: 80px">
              <n-space>
                <n-button type="success" @click="apiPullLog" :loading="pullLoading"
                  >拉取日志</n-button
                >
                <n-button type="primary" @click="formSubmit" :loading="downloadLoading"
                  >生成日志</n-button
                >
              </n-space>
            </div>
          </n-form>
        </n-grid-item>
      </n-grid>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  import { ref, unref, reactive, onMounted, watchEffect } from 'vue';
  import { useMessage, SelectOption } from 'naive-ui';
  import { getAppList, apiPullLogs, downLoadLog } from '@/api/log/apilog';
  const pullLoading = ref(false);
  const downloadLoading = ref(false);
  const formRef: any = ref(null);
  const message = useMessage();
  const rules = {
    appname: {
      required: true,
      message: '请选择服务名称',
      trigger: 'change',
    },
    before: {
      required: true,
      type: 'number',
      message: '请输入开始行数字',
      trigger: ['blur', 'input'],
    },
    after: {
      required: true,
      type: 'number',
      message: '请输入结束换行数字',
      trigger: ['blur', 'input'],
    },

    keyword: {
      message: '请输入关键词',
      trigger: ['blur', 'input'],
    },
  };

  const appList = reactive({
    list: [],
  });

  const defaultValueRef = () => ({
    appname: null,
    keyword: '',
    before: 1,
    apps: '',
    after: 1000,
  });
  const handleUpdateValue = (value: string, option: SelectOption) => {
    console.log(option);
    formValue.apps = option.pullapps;
  };

  let formValue = reactive(defaultValueRef());
  onMounted(async () => {
    const applist = await getAppList();
    appList.list = applist;
  });

  const apiPullLog = async () => {
    formRef.value.validate(async (errors) => {
      if (!errors) {
        pullLoading.value = true;
        const { appname, apps } = formValue;

        try {
          await apiPullLogs({ appname, apps });
          message.success(`服务[${appname}]日志操作成功！`);
          pullLoading.value = false;
        } catch (error) {
          pullLoading.value = false;
        }
      }
    });
  };

  /* 
    下载日志
  */
  function formSubmit() {
    formRef.value.validate(async (errors) => {
      if (!errors) {
        downloadLoading.value = true;
        const { appname, before, after, keyword, apps } = formValue;

        if (!keyword) {
          message.error(`请输入关键词！`);
          downloadLoading.value = false;
          return;
        }

        const subdata = { appname, keyword, before, after, apps };
        try {
          const data = await downLoadLog(subdata);
          window.location.href = data;
          downloadLoading.value = false;
        } catch (error) {
          downloadLoading.value = false;
        }
      }
    });
  }

  /*   function resetForm() {
    formRef.value.restoreValidation();
    formValue = Object.assign(unref(formValue), defaultValueRef());
  } */
</script>
