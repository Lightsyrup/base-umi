import React from 'react';
import GeneralLayout from './general';
import Welcome from './welcome';
import {ADD_USER } from '@/enums';

const BasicLayout: React.FC = (props: any) => {
  const getLayout = (): any => {
    let _pathName: string = props.location.pathname;
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
