import React from 'react';
import { Layout } from 'antd';
import styles from './HeaderMain.less'

const HeaderMain: React.FC = () => {
  const { Header } = Layout;
  return (
    <>
      <Header className={styles.headerContent}>There is a header</Header>
    </>
  );
};

export default HeaderMain;
