import { h } from 'vue';
import { NSelect } from 'naive-ui';
import CurTag from './components/CurTag.vue';

export const columns = [
  {
    title: '服务名称',
    key: 'appname',
    align: 'center',
    width: 120,
  },
  {
    title: 'Git名称',
    key: 'gitname',
    align: 'center',
    width: 120,
    render(row) {
      return row.gitname;
    },
  },
  {
    title: '项目分组',
    key: 'group',
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
    key: 'updateTime',
    width: 160,
  },
  {
    title: '当前版本	',
    key: 'currversion',
    align: 'center',
    width: 120,
    render(row) {
      console.log(row);
      return h(CurTag, { title: row.currversion });
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
        style: 'width:120px',
        'default-value': row.currversion,
        'on-update:value'(v) {
          row.selectVersion = v;
        },
      });
    },
  },
];
