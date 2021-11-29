import { Layout, Menu, Icon } from 'antd';
import { useState } from 'react';
import styles from './general.less';

const GeneralLayout: React.FC = (): any => {
  const { SubMenu } = Menu;
  const [current, setCurrent] = useState('mail');

  const handleClick = (e: any) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
//   return <Layout></Layout>;
};

export default GeneralLayout;
