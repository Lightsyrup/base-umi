import React from 'react';
import SimpleLayout from './Simple';
import Common from './Common';
import { LOGIN_ROUTE_PATH } from '@/enums/path';

const BasicLayout: React.FC = (props: any) => {
  const selectLayout = () => {
    let _pathName: string = props.location.pathname;
    console.log(_pathName);
    switch (_pathName) {
      case LOGIN_ROUTE_PATH:
        return <SimpleLayout>{props.children}</SimpleLayout>;
      default:
        return <Common>{props.children}</Common>;
    }
  };

  return <>{selectLayout()}</>;
};

export default BasicLayout;
