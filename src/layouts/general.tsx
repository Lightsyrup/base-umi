import React from 'react';
import TopNav from '@/components/topNav';
import Footer from '@/components/Footer';
import styles from './general.less';
import { Layout } from 'antd';

const GeneralLayout: React.FC = (props): any => {
  const { Content } = Layout;
  return (
    <Layout className={styles.generalLayout}>
      <TopNav />
      <Content className={styles.generalMain}>
        {props.children}
      </Content>
      <Footer />
    </Layout>
  );
};

export default GeneralLayout;
