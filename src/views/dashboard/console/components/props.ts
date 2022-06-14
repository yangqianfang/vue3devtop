import { PropType } from 'vue';
import { object } from 'vue-types';

export interface BasicProps {
  width: string;
  height: string;
}

export const basicProps = {
  width: {
    type: String as PropType<string>,
    default: '100%',
  },
  height: {
    type: String as PropType<string>,
    default: '200px',
  },
  data: {
    type: Object,
    default: {},
  },
};
