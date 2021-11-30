import React from 'react';
import TopNav from '@/components/topNav';
import styles from './general.less';
import { Layout } from 'antd';

const GeneralLayout: React.FC = (props): any => {
  return (
    <Layout>
      <TopNav />
      <Layout>
      
      </Layout>
    </Layout>
  );
};

export default GeneralLayout;
