import React from 'react';
import { Layout } from 'antd';
import Footer from '@/components/Footer';
import styles from './welcome.less';

const Welcome: React.FC = (props: any) => {
  const { Content } = Layout;
  return (
    <Layout className={styles.welcome}>
      <Content className={styles.welcomeMain}>{props.children}</Content>
      <Footer />
    </Layout>
  );
};

export default Welcome;
