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
                v-model:value="formValue.appname"
              />
            </n-form-item>
            <n-form-item label="开始行数" path="start">
              <n-input-number
                :show-button="true"
                v-model:value="formValue.start"
                placeholder="输入开始行数"
              />
            </n-form-item>
            <n-form-item label="结束行数	" path="end">
              <n-input-number
                :show-button="true"
                placeholder="输入结束行数"
                v-model:value="formValue.end"
              />
            </n-form-item>
            <n-form-item label="日志文件" path="filename">
              <n-select
                placeholder="请选择日志文件"
                :options="logList"
                label-field="name"
                value-field="number"
                v-model:value="formValue.filename"
              />
            </n-form-item>

            <div style="margin-left: 80px">
              <n-space>
                <n-button type="primary" @click="formSubmit">下载日志</n-button>
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
  import { useMessage } from 'naive-ui';
  import { BasicUpload } from '@/components/Upload';
  import { useGlobSetting } from '@/hooks/setting';
  import { getAppList, crontabLogList, downLoadLog } from '@/api/log/crontab';
  const globSetting = useGlobSetting();

  // const logList = ref<any>([]);
  const logList = [
    {
      label: 'manage',
      value: 'manage',
    },
    {
      label: 'opserver',
      value: 'opserver',
    },
    {
      label: 'wechat',
      value: 'wechat',
    },
  ];
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
      type: 'number',
      message: '请选择日志文件',
      trigger: 'change',
    },
  };

  const appList = reactive({
    list: [],
  });

  onMounted(async () => {
    const applist = await getAppList();
    appList.list = applist;
  });

  const formRef: any = ref(null);
  const message = useMessage();

  const defaultValueRef = () => ({
    appname: null,
    filename: null,
    start: 1,
    end: 1000,
  });

  let formValue = reactive(defaultValueRef());
  watchEffect(() => {
    const appname = formValue.appname;
    if (appname) {
      getLogsList();
    }
  });

  const getLogsList = async () => {
    const loglist = await crontabLogList({ appname: formValue.appname });

    // logList.value = loglist;
    // console.log(logList);
  };

  function formSubmit() {
    formRef.value.validate((errors) => {
      if (!errors) {
        message.success('验证成功');
      } else {
        message.error('验证失败，请填写完整信息');
      }
    });
  }

  function resetForm() {
    formRef.value.restoreValidation();
    formValue = Object.assign(unref(formValue), defaultValueRef());
  }
</script>
