import { Effect } from 'dva';
import { Reducer } from 'redux';
import { getCity } from '@/services/testing';

export interface userListState {
  id: number;
  list: {};
}

export interface UserListModel {
  namespace: string;
  state: userListState;
  reducers: {
    updateState: Reducer<userListState>;
  };
  effects: {
    getInfo: Effect;
  };
}

// 实例
const Model: UserListModel = {
  namespace: 'userList',
  state: {
    id: 100,
    list: {
      'value':20,
      'type':5
    },
  },
  reducers: {
    updateState(state: any, { payload }: any) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *getInfo({ payload }, { put, call }: any) {
      const res = yield call(getCity, payload);
      // 不清楚返回内容，尝试在这里打印一下
      console.log(res)
      yield put({
        type: 'updateState',
        payload: res,
      });
    },
  },
};

export default Model;
