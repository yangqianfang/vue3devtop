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
            <n-form-item label="应用名称" path="appname">
              <n-input placeholder="输入应用名称" v-model:value="formValue.appname" />
            </n-form-item>
            <n-form-item label="应用类型" path="apptype">
              <n-select
                clearable
                placeholder="请选择应用类型"
                :options="appList.list"
                v-model:value="formValue.apptype"
              />
            </n-form-item>
            <n-form-item label="应用开放API" path="appapi">
              <n-input placeholder="输入应用开放API" v-model:value="formValue.appapi" />
            </n-form-item>
            <n-form-item label="当前版本" path="appversion">
              <n-input placeholder="输入当前版本" v-model:value="formValue.appversion" />
            </n-form-item>
            <n-form-item label="项目成员" path="appmembers">
              <n-input
                :show-button="true"
                placeholder="输入项目成员(英文逗号,分隔)"
                v-model:value="formValue.appmembers"
              />
            </n-form-item>

            <n-form-item label="项目分组" path="appgroup">
              <n-select
                placeholder="请选择项目分组"
                :options="logList"
                filterable
                label-field="name"
                value-field="number"
                :loading="loading"
                v-model:value="formValue.appgroup"
              />
            </n-form-item>

            <div style="margin-left: 80px">
              <n-space>
                <n-button type="primary" @click="formSubmit" :loading="downLoadloading"
                  >添加应用</n-button
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
  import { getAppList, crontabLogList, downLoadLog } from '@/api/log/crontab';
  const logList = ref<any>([]);
  const loading = ref(false);
  const downLoadloading = ref(false);
  const formRef: any = ref(null);
  const rules = {
    appname: {
      required: true,
      message: '请选择服务名称',
      trigger: 'change',
    },
    start: {
      required: true,
      type: 'number',
      message: '请输入开始行数字',
      trigger: ['blur', 'input'],
    },
    end: {
      required: true,
      type: 'number',
      message: '请输入结束换行数字',
      trigger: ['blur', 'input'],
    },

    filename: {
      required: true,
      message: '请选择日志文件',
      trigger: 'change',
    },
  };

  const appList = reactive({
    list: [],
  });

  const defaultValueRef = () => ({
    appname: '',
    apptype: '',
    appapi: '',
    appversion: '',
    appmembers: '',
    appgit: '',
    appgroup: '',
  });

  let formValue = reactive(defaultValueRef());

  onMounted(async () => {
    const applist = await getAppList();
    appList.list = applist;
  });

  watchEffect(() => {
    const appname = formValue.appname;
    if (appname) {
      getLogsList();
    } else {
      logList.value = [];
    }
  });

  /*
    获取日志list 
  */
  const getLogsList = async () => {
    loading.value = true;
    const loglist = await crontabLogList({ appname: formValue.appname });
    logList.value = loglist;
    loading.value = false;
  };

  function formSubmit() {
    formRef.value.validate(async (errors) => {
      if (!errors) {
        const { appname, filename, start, end } = formValue;
        const subdata = { appname: appname, filename: filename, start: start, end: end };
        downLoadloading.value = true;
        try {
          const data = await downLoadLog(subdata);
          downLoadloading.value = false;
          window.location.href = data;
        } catch (error) {
          downLoadloading.value = false;
        }
      }
    });
  }

  /*   function resetForm() {
    formRef.value.restoreValidation();
    formValue = Object.assign(unref(formValue), defaultValueRef());
  } */
</script>
