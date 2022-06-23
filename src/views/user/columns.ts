import { h } from 'vue';
import { NButton } from 'naive-ui';
import { RoleEnum } from '@/enums/roleEnum';
import moment from 'moment';

export function getColumns(action) {
  const { handleEdit, handleEnable, handleDelete } = action;
  const columns = [
    {
      title: '登录名',
      key: 'username',
      width: 120,
    },
    {
      title: '用户昵称',
      key: 'nickname',
      width: 120,
    },
    {
      title: '用户类型',
      key: 'cid',
      width: 120,
      render(row) {
        return row.cid === RoleEnum.ADMIN ? '超级管理员' : '普通用户';
      },
    },
    {
      title: '用户状态',
      key: 'enable',
      width: 120,
      render(row) {
        return row.enable === 1 ? '启用' : '禁用';
      },
    },
    {
      title: '注册时间	',
      key: 'created_time',
      width: 160,
      render(row) {
        return moment.utc(row.created_time).format('YYYY-MM-DD HH:MM:SS');
      },
    },
    {
      title: '更新时间',
      key: 'updated_time',
      width: 160,
      render(row) {
        return moment.utc(row.updated_time).format('YYYY-MM-DD HH:MM:SS');
      },
    },
    {
      title: '操作',
      key: 'actions',
      render(row) {
        const buttonType = row.enable === 1 ? 'warning' : 'success';
        const buttonText = row.enable === 1 ? '禁用' : '启用';
        return h(
          'div',
          { class: 'button-wrap' },
          {
            default: () => [
              h(
                NButton,
                {
                  strong: true,
                  type: 'primary',
                  size: 'small',
                  onClick: () => handleEdit(row),
                },
                { default: () => '编辑' }
              ),
              h(
                NButton,
                {
                  strong: true,
                  type: buttonType,
                  size: 'small',
                  onClick: () => handleEnable(row),
                },
                { default: () => buttonText }
              ),
              h(
                NButton,
                {
                  strong: true,
                  type: 'error',
                  size: 'small',
                  onClick: () => handleDelete(row),
                },
                { default: () => '删除' }
              ),
            ],
          }
        );
      },
    },
  ];

  return columns;
}
