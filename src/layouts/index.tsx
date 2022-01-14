import React from 'react';
import SimpleLayout from './Simple';
import Common from './Common';
import { LOGIN_ROUTE_PATH } from '@/enums/path';  //使用枚举功能判断模板

const BasicLayout: React.FC = (props: any) => {
  const selectLayout = () => {
    let _pathName: string = props.location.pathname;  //读取url路径
    // console.log(_pathName);
    // 根据不同路径显示模板
    switch (_pathName) {
      case LOGIN_ROUTE_PATH:
        return <SimpleLayout>{props.children}</SimpleLayout>;
      default:
        return <Common>{props.children}</Common>;
    }
  };

  return <>{selectLayout()}</>;  //执行切换模板
};

export default BasicLayout;
