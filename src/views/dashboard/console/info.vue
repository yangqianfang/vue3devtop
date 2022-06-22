<template>
  <div>
    <n-card :bordered="false" class="mt-4 proCard">
      <n-grid cols="1 s:1 m:3 l:3 xl:3 2xl:3" responsive="screen">
        <n-grid-item offset="0 s:0 m:1 l:1 xl:1 2xl:1">
          <n-form
            :label-width="120"
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
                :options="selectData.typeList"
                v-model:value="formValue.apptype"
              />
            </n-form-item>
            <n-form-item label="应用开放API" path="appapi">
              <n-input placeholder="输入应用开放API" v-model:value="formValue.appapi" />
            </n-form-item>
            <n-form-item label="当前版本" path="appversion">
              <n-input placeholder="输入当前版本" v-model:value="formValue.appversion" />
            </n-form-item>
            <n-form-item label="Git仓库名称" path="appgit">
              <n-input placeholder="输入Git仓库名称" v-model:value="formValue.appgit" />
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
                :options="selectData.groupsList"
                v-model:value="formValue.appgroup"
              />
            </n-form-item>

            <div style="margin-left: 80px">
              <n-space>
                <n-button type="primary" @click="formSubmit" :loading="downLoadloading">
                  添加应用
                </n-button>
                <n-button type="default" @click="formCancel"> 取消 </n-button>
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
  import { useRouter } from 'vue-router';
  import { addApp, editApp, getAppInfo, getConfigParams } from '@/api/dashboard/console';
  import { jsonToSelectData, arrToSelectData } from '@/utils/index';
  const router = useRouter();
  const logList = ref<any>([]);
  const loading = ref(false);
  const downLoadloading = ref(false);
  const formRef: any = ref(null);
  console.log(router);
  /* 
  appname: '',
    apptype: '',
    appapi: '',
    appversion: '',
    appmembers: '',
    appgit: '',
    appgroup: '', 
    */
  const rules = {
    appname: {
      required: true,
      message: '请输入应用名称',
      trigger: ['blur', 'input'],
    },
    apptype: {
      required: true,
      message: '请选应用类型',
      trigger: 'change',
    },
    appapi: {
      required: true,
      message: '请输入应用api',
      trigger: ['blur', 'input'],
    },
    appversion: {
      required: true,
      message: '请输入当前版本',
      trigger: ['blur', 'input'],
    },
    appmembers: {
      required: true,
      message: '请输入项目成员',
      trigger: ['blur', 'input'],
    },
    appgit: {
      required: true,
      message: '请输入Git仓库名称',
      trigger: ['blur', 'input'],
    },
    appgroup: {
      required: true,
      message: '请选择项目分组',
      trigger: 'change',
    },
  };

  const selectData = reactive({
    typeList: [],
    groupsList: [],
  });

  const defaultValueRef = () => ({
    appname: '',
    apptype: null,
    appapi: '',
    appversion: '',
    appmembers: '',
    appgit: '',
    appgroup: null,
  });

  let formValue = reactive(defaultValueRef());

  onMounted(async () => {
    const publicData = await getConfigParams();
    //  jsonToSelectData, arrToSelectData
    selectData.typeList = arrToSelectData(publicData.type);
    selectData.groupsList = jsonToSelectData(publicData.groups);
    console.log(selectData.groupsList);
  });

  function formSubmit() {
    formRef.value.validate(async (errors) => {
      if (!errors) {
        const subdata = Object.assign({}, formValue);
        downLoadloading.value = true;
        try {
          await addApp(subdata);
          downLoadloading.value = false;
          formCancel();
        } catch (error) {
          downLoadloading.value = false;
        }
      }
    });
  }
  function formCancel() {
    router.push({ name: 'console' });
    // router.back();
  }

  /*   function resetForm() {
    formRef.value.restoreValidation();
    formValue = Object.assign(unref(formValue), defaultValueRef());
  } */
</script>
