<template>
  <div>
    <n-card
      content-style="padding-top: 0;padding-bottom: 0;"
      :bordered="false"
      size="small"
      :title="aid ? '编辑服务' : '添加服务'"
    >
      <n-grid cols="1 s:1 m:3 l:3 xl:3 2xl:3" responsive="screen">
        <n-grid-item offset="0 s:0 m:1 l:1 xl:1 2xl:1">
          <n-form
            :label-width="120"
            :model="formValue"
            :rules="rules"
            label-placement="left"
            ref="formRef"
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
                <n-button type="primary" @click="formSubmit" :loading="submitLoading">
                  保存
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
  import { ref, unref, reactive, onMounted, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { addApp, getAppInfo } from '@/api/dashboard/console';
  import { jsonToSelectData, arrToSelectData } from '@/utils/index';
  import { publicDataStore } from '@/store/modules/publicData';
  import { useMessage } from 'naive-ui';
  const usePublicData = publicDataStore();
  const router = useRouter();
  const message = useMessage();
  const submitLoading = ref(false);
  const formRef: any = ref(null);
  const $Loading = window['$Loading'];
  const aid = ref('');
  /* 
    验证规则
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
  /* 
    下拉数据
  */
  const selectData = reactive({
    typeList: [],
    groupsList: [],
  });

  /* 
    表单默认值
  */
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

  // 获取store中的数据
  const publicData = computed(() => usePublicData.publicData);

  onMounted(async () => {
    const { id } = router.currentRoute.value.params;
    !publicData.value && (await usePublicData.getPublicData());
    selectData.typeList = arrToSelectData(publicData.value.type);
    selectData.groupsList = jsonToSelectData(publicData.value.groups);
    /* 获取单个app信息 */
    if (id) {
      aid.value = id;
      getAppByid(id);
    }
  });

  /* 
    请求单个app信息 
  */
  async function getAppByid(id) {
    try {
      $Loading.value.show();
      const info = await getAppInfo({ id });
      const { app } = info;
      const form = {
        id: app.id,
        appname: app.name,
        apptype: app.type,
        appapi: app.api,
        appversion: app.version,
        appmembers: app.members,
        appgit: app.project,
        appgroup: app.groups,
      };
      formValue = Object.assign(unref(formValue), form);
      $Loading.value.hide();
    } catch (error) {
      $Loading.value.hide();
    }
  }

  /* 
    提交表单
  */
  function formSubmit() {
    formRef.value.validate(async (errors) => {
      if (!errors) {
        const subdata = Object.assign({}, formValue);
        submitLoading.value = true;
        try {
          await addApp(subdata);
          submitLoading.value = false;
          if (subdata.id) {
            message.success(`保存成功！`);
          } else {
            formCancel();
          }
        } catch (error) {
          submitLoading.value = false;
        }
      }
    });
  }
  function formCancel() {
    router.push({ name: 'console' });
    // router.back();
  }

  /*function resetForm() {
    formRef.value.restoreValidation();
    formValue = Object.assign(unref(formValue), defaultValueRef());
  } */
</script>
