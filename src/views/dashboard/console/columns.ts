import { h } from 'vue';
import { NAvatar, NSelect } from 'naive-ui';
import CurTag from './components/CurTag.vue';
const options = [
  {
    label: "Everybody's Got Something to Hide Except Me and My Monkey",
    value: 'song0',
    disabled: true,
  },
  {
    label: 'Drive My Car',
    value: 'song1',
  },
  {
    label: 'Norwegian Wood',
    value: 'song2',
  },
  {
    label: "You Won't See",
    value: 'song3',
    disabled: true,
  },
  {
    label: 'Nowhere Man',
    value: 'song4',
  },
  {
    label: 'Think For Yourself',
    value: 'song5',
  },
  {
    label: 'The Word',
    value: 'song6',
  },
  {
    label: 'Michelle',
    value: 'song7',
    disabled: true,
  },
  {
    label: 'What goes on',
    value: 'song8',
  },
  {
    label: 'Girl',
    value: 'song9',
  },
  {
    label: "I'm looking through you",
    value: 'song10',
  },
  {
    label: 'In My Life',
    value: 'song11',
  },
  {
    label: 'Wait',
    value: 'song12',
  },
];
export const columns = [
  {
    title: '服务名称',
    key: 'name',
    width: 100,
  },
  {
    title: 'Git名称',
    key: 'avatar',
    width: 100,
    render(row) {
      return h(NAvatar, {
        size: 48,
        src: row.avatar,
      });
    },
  },
  {
    title: '项目分组',
    key: 'address',
    auth: ['basic_list'], // 同时根据权限控制是否显示
    ifShow: (_column) => {
      return true; // 根据业务控制是否显示
    },
    width: 150,
  },
  {
    title: '升级时间	',
    key: 'beginTime',
    width: 160,
  },
  {
    title: '当前版本	',
    key: 'endTime',
    width: 160,
    render(row) {
      console.log(row);
      return h(CurTag, { title: row.name });
    },
  },
  {
    title: '可升级版本	',
    key: 'endTime',
    width: 160,
    render(row) {
      return h(NSelect, {
        options: row.list,
        style: 'width:100px',
        value: '1.0.1',
        // 'v-model': row.no,
        onChange(v) {
          row.select = v;
          console.log(row);
        },
      });
    },
  },
];
