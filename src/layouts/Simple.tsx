import React from 'react';
import { Layout } from 'antd';
import FooterMain from '@/components/FooterMain';
import styles from './Simple.less';

const SimpleLayout: React.FC = (props): any => {
  const { Header, Content,Footer } = Layout;
  return (
    <Layout className={styles.simpleLayout}>
      <Header className={styles.simpleHeader}>首页头条位置</Header>
      <Content className={styles.simpleContent}>{props.children}</Content>
      <FooterMain />
    </Layout>
  );
};

export default SimpleLayout;
