import { h } from 'vue';
import { NSelect } from 'naive-ui';
import CurTag from './components/CurTag.vue';

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
    width: 120,
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
    width: 120,
  },
  {
    title: '升级时间	',
    align: 'center',
    key: 'latest_time',
    width: 160,
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
  // {
  //   title: '选择版本	',
  //   key: 'select',
  //   align: 'center',
  //   width: 100,
  //   render(row) {
  //     return row.select || row.list[0].value;
  //   },
  // },
  {
    title: '可升级版本	',
    key: 'list',
    align: 'center',
    width: 160,
    render(row) {
      row.selectVersion = row.currversion;
      return h(NSelect, {
        options: row.list,
        placeholder: row.version,
        style: 'width:120px',
        'default-value': row.version,
        'on-update:value'(v) {
          row.selectVersion = v;
        },
        onClick(v) {
          // row.list = ['1.0.1', '1.20.99', '1.40.59'];
          console.log('click');
        },
      });
    },
  },
];
