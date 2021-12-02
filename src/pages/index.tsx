import React from 'react';
import { Layout } from 'antd';
import styles from './index.css';

export default function() {
  const { Content } = Layout;
  return (
    <Layout>
      <Content>
        <h1 className={styles.welcome}>umi！</h1>
      </Content>
    </Layout>
  );
}
