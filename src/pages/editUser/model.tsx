import { Effect } from 'dva';
import { Reducer } from 'redux';
import { getCity } from '@/services/testing';
import { getUsers } from '@/services/testing';

export interface editUserState {
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
    setUserToList: Effect;
    addDefaultNewUser:Effect
  };
}

// 实例
const Model: UserListModel = {
  namespace: 'editUserState',
  state: {
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
    *addDefaultNewUser(){
      // 发送post请求，将新数据传送给数据库
    },
    *setUserToList(){
        // 得到调用的数据
        // 提取返回数据最后一条
        // 将最后一条作为新增的内容
        // 传输给数据库，进行更新（最新内容已经显示）
    }
  },
};

export default Model;
