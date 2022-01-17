import { Reducer } from 'redux';
// import {Effect} from 'dva'

// 规定变量类型
export interface WelcomeState {
  sayHello: string;
}
// 创建类
export interface WelcomeModel {
  namespace: string;
  state: WelcomeState;
  reducers: {
    showGreeting: Reducer<WelcomeState>;
  };
  // efferct:{}
}

// 创建模板实例
const Model: WelcomeModel = {
  namespace: 'welcome', //模板已经规定，使用逗号
  state: {
    sayHello: 'Welcome to my first Umi App!',
  },
  reducers: {
    // 更新数据库
    showGreeting(state: any, { payload }: any): any {
      return { ...state, ...payload };
    },
  },
};

export default Model;
