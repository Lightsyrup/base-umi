import { Reducer } from 'redux';
import { Effect } from 'dva';
import { saySomething } from '@/services/testing';

// 规定变量类型
export interface WelcomeState {
  sayHello: string;
  id:number;
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
  namespace: 'welcome', //模板已经规定，使用逗号
  state: {
    sayHello: 'Welcome to my first Umi App!',
    id:0
  },
  reducers: {
    // 实时更新payload，不进行数据请求
    updateState(state: any, { payload }: any): any {
      return { ...state, ...payload };
    },
  },
  effects: {
    //   异步函数要带上星星
    *getMock({payload},{put,call}:any) {
        const res=yield call(saySomething,payload,)
        yield put({
            type:'updateState',
            payload:res
        })
    },
  },
};

export default Model;
