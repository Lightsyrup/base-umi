import { Effect } from 'dva';
import { Reducer } from 'redux';
import { getCity } from '@/services/testing';
import { getUsers } from '@/services/testing';

export interface editUserState {
  id: number;
  list: {};
  userData: null;
}

export interface UserListModel {
  namespace: string;
  state: editUserState;
  reducers: {
    updataState: Reducer<editUserState>;
  };
  effects: {
    getInfo: Effect;
    getUserList: Effect;
  };
}

// 实例
const Model: UserListModel = {
  namespace: 'editUserState',
  state: {
    id: 100,
    list: {
      value: 20,
      type: 5,
    },
    userData: null,
  },
  reducers: {
    updataState(state: any, { payload }: any) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *getInfo({ payload }, { put, call }: any) {
      const res = yield call(getCity, payload);
      yield put({
        type: 'updataState',
        payload: res,
      });
    },
    *getUserList({ payload }, { put, call }) {
      const res = yield call(getUsers, payload);
      console.log(res);
      yield put({
        type: 'updataState',
        payload: res,
      });
    },
  },
};

export default Model;
