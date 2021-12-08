import { Reducer } from 'redux';
import { Effect } from 'dva';

// 页面状态，命名用 ‘exampleState’
export interface userState {
  key: string;
  name: string;
  age: number;
  address: string;
}
//页面模板，名字与path相同
export interface users {
  namespace: string;
  state: userState;
  reducers: {
    setUsers: Reducer<userState>;
  };
//   effects:{
//       getUsers:{
//         // 发请求
//         // 将请求内容传给reducer
//       }
//   }
}

const Model: users = {
  namespace: 'userinfo',
  state: {
    key: '',
    name: '',
    age: -1,
    address: '',
  },
  reducers: {
    setUsers(state: any, { payload }: any) {
      // 发请求(异步函数)，更新state
      return { ...payload };
    },
  },
};

export default Model;
