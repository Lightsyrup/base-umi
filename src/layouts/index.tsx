import React from 'react';
import GeneralLayout from './general';
import Welcome from './welcome';
import { ADD_USER } from '@/enums';

const BasicLayout: React.FC = (props: any) => {
  const { location } = props;

  const getLayout = () => {
    let _pathName: string = location.pathname;

    console.log(_pathName);

    switch (_pathName) {
      case ADD_USER:
        return <Welcome>{props.children}</Welcome>;
      default:
        return <GeneralLayout>{props.chilren}</GeneralLayout>;
    }
  };

  return <>{getLayout()}</>;
};

export default BasicLayout;
