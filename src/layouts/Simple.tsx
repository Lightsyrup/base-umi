import React from 'react';
import { Layout } from 'antd';
import styles from './Simple.less';

const SimpleLayout: React.FC = (props): any => {
  const { Content } = Layout;
  return (
    <Layout className={styles.simpleLayout}>
      
      <Content className={styles.simpleMain}>
        {props.children}
      </Content>
      
    </Layout>
  );
};

export default SimpleLayout;
