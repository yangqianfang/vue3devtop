import { defineStore } from 'pinia';
import { getConfigParams } from '@/api/dashboard/console';

export const publicDataStore = defineStore({
  id: 'app-publicdata',
  state: () => ({
    publicData: null,
  }),
  getters: {},
  actions: {
    async getPublicData() {
      const res = await getConfigParams();
      this.publicData = res;
      return res;
    },
  },
});
