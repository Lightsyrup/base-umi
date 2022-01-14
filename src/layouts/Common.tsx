import React from 'react';
import { Layout } from 'antd';
import HeaderMain from '@/components/HeaderMain';
import FooterMain from '@/components/FooterMain';
import styles from './Common.less';

const Common: React.FC = (props: any) => {
  const { Content } = Layout;
  return (
    <Layout className={styles.CommonLayout}>
      <HeaderMain />
      <Content className={styles.CommonMain}>{props.children}</Content>
      <FooterMain />
    </Layout>
  );
};

export default Common;
