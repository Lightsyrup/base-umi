import { Reducer } from 'redux';
import { Effect } from 'dva';
import { saySomething } from '@/services/testing';

// 规定变量类型
export interface WelcomeState {
  sayHello: string;
  ids: number;
}
// 创建类
export interface WelcomeModel {
  namespace: string;
  state: WelcomeState;
  reducers: {
    updateState: Reducer<WelcomeState>;
  };
  effects: {
    getMock: Effect;
  };
}

// 创建模板实例
const Model: WelcomeModel = {
  namespace: 'welcome',
  state: {
    sayHello: 'Welcome to my first Umi App!',
    ids: 0,
  },
  reducers: {
    updateState(state: any, { payload }: any): any {
      return { ...state, ...payload };
    },
  },
  effects: {
    *getMock({ payload }, { put, call }: any) {
      const res = yield call(saySomething, payload);
      yield put({
        type: 'updateState',
        payload: res,
      });
    },
  },
};

export default Model;
