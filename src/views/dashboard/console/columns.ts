import { h } from 'vue';
import { NSelect } from 'naive-ui';
import CurTag from './components/CurTag.vue';
import { getPublishVersion } from '@/api/dashboard/console';
import { arrToSelectData } from '@/utils/index';

import moment from 'moment';

export const columns = [
  {
    title: '服务名称',
    key: 'name',
    align: 'center',
    width: 120,
  },
  {
    title: 'Git名称',
    key: 'project',
    align: 'center',
    width: 100,
    render(row) {
      return row.project;
    },
  },
  {
    title: '项目分组',
    key: 'groups',
    align: 'center',
    // auth: ['basic_list'], // 同时根据权限控制是否显示
    // ifShow: (_column) => {
    //   return true; // 根据业务控制是否显示
    // },
    width: 100,
  },
  {
    title: '升级时间	',
    align: 'center',
    key: 'latest_time',
    width: 140,
    render(row) {
      return moment.utc(row.latest_time).format('YYYY-MM-DD HH:MM:SS');
    },
  },
  {
    title: '当前版本	',
    key: 'version',
    align: 'center',
    width: 120,
    render(row) {
      return h(CurTag, { title: row.version });
    },
  },
  /*  {
    title: '选择版本	',
    key: 'select',
    align: 'center',
    width: 100,
    render(row) {
      return row.selectVersion || row.version;
    },
  }, */
  {
    title: '可升级版本	',
    key: 'list',
    align: 'center',
    width: 150,
    render(row) {
      return h(NSelect, {
        options: row.list,
        placeholder: row.version,
        style: 'width:120px',
        'default-value': row.selectVersion,
        loading: row.loading,
        'on-update:value'(v) {
          row.selectVersion = v;
        },
        onClick: async () => {
          row.loading = true;
          const data = await getPublishVersion({ id: row.id });
          row.list = arrToSelectData(data);
          row.loading = false;
        },
      });
    },
  },
];
