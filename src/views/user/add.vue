<template>
  <div>
    <n-card
      :bordered="false"
      class="mt-4 proCard"
      content-style="padding-top: 0;padding-bottom: 0;"
      size="small"
      :title="aid ? '编辑用户' : '添加用户'"
    >
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
            <n-form-item label="登录名称" path="username">
              <n-input placeholder="输入登录名称" v-model:value="formValue.username" />
            </n-form-item>

            <n-form-item label="真实姓名" path="nickname">
              <n-input placeholder="输入真实姓名" v-model:value="formValue.nickname" />
            </n-form-item>
            <n-form-item label="用户密码" path="password">
              <n-input
                placeholder="输入用户密码"
                type="password"
                show-password-on="click"
                autocomplete
                v-model:value="formValue.password"
              />
            </n-form-item>
            <n-form-item label="可发布项目" path="publish">
              <n-checkbox-group v-model:value="formValue.publish">
                <n-space item-style="display: flex;">
                  <n-checkbox
                    :value="item"
                    :label="item"
                    v-for="(item, index) in publishList"
                    :key="index"
                  />
                </n-space>
              </n-checkbox-group>
            </n-form-item>

            <n-form-item label="用户权限" path="cid">
              <n-select
                placeholder="请选择用户权限"
                :options="roleList"
                v-model:value="formValue.cid"
              />
            </n-form-item>
            <n-form-item label="用户状态" path="enable">
              <n-select
                placeholder="请选择用户状态"
                :options="enableList"
                v-model:value="formValue.enable"
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
  import { getUserInfo, saveUser } from '@/api/system/userlist';
  import { publicDataStore } from '@/store/modules/publicData';

  const usePublicData = publicDataStore();
  const router = useRouter();
  const aid = ref('');
  const submitLoading = ref(false);
  const formRef: any = ref(null);

  const publishList = ref([]);
  const $Loading = window['$Loading'];
  const roleList = [
    {
      label: '超级管理员',
      value: '1',
    },
    {
      label: '普通用户',
      value: '2',
    },
  ];
  const enableList = [
    {
      label: '启用',
      value: '1',
    },
    {
      label: '禁用',
      value: '0',
    },
  ];
  /* 
    验证规则
  */

  const rules = {
    username: {
      required: true,
      message: '请输入登录名称',
      trigger: ['blur', 'input'],
    },

    nickname: {
      required: true,
      message: '请输入真实姓名',
      trigger: ['blur', 'input'],
    },
    password: {
      required: true,
      message: '请输入用户密码',
      trigger: ['blur', 'input'],
    },
    appmembers: {
      required: true,
      message: '请输入项目成员',
      trigger: ['blur', 'input'],
    },
    publish: {
      type: 'array',
      required: true,
      message: '请输勾选可发布项目',
      trigger: ['change'],
    },
  };

  /* 
    表单默认值
  */
  const defaultValueRef = () => ({
    username: '',
    nickname: '',
    password: '',
    cid: '1',
    enable: '1',
    publish: [],
  });
  let formValue = reactive(defaultValueRef());

  // 获取store中的数据
  const publicData = computed(() => usePublicData.publicData);

  onMounted(async () => {
    const { id } = router.currentRoute.value.params;
    const title = id ? '编辑用户' : '添加用户';
    router.currentRoute.value.matched.title = title;
    console.log(router.currentRoute);
    console.log(router.currentRoute.value.meta.title);

    !publicData.value && (await usePublicData.getPublicData());
    publishList.value = publicData.value.enables;

    /* 获取单个app信息 */
    if (id) {
      aid.value = id;
      getUserByid(id);
    }
  });

  /* 
    请求单个app信息 
  */
  async function getUserByid(id) {
    try {
      $Loading.value.show();
      const info = await getUserInfo({ id });
      const { user } = info;
      const publish = user.publish;
      let viewPublish = publish.split('@') || [];
      if (publish === 'all') {
        viewPublish = publishList.value;
      }

      const form = {
        id: user.id,
        username: user.username,
        nickname: user.nickname,
        password: '',
        cid: String(user.cid),
        enable: String(user.enable),
        publish: viewPublish,
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
        subdata.publish = subdata.publish.join('@');
        submitLoading.value = true;
        try {
          await saveUser(subdata);
          submitLoading.value = false;
          formCancel();
        } catch (error) {
          submitLoading.value = false;
        }
      }
    });
  }
  function formCancel() {
    router.push({ name: 'user-list' });
    // router.back();
  }

  /*function resetForm() {
    formRef.value.restoreValidation();
    formValue = Object.assign(unref(formValue), defaultValueRef());
  } */
</script>
