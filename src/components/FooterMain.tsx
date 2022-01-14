import React from 'react';
// import { Footer } from 'antd/lib/layout/layout';
import { Layout } from 'antd';
import styles from './FooterMain.less';

const FooterMain: React.FC = () => {
  const { Footer } = Layout;
  return <Footer className={styles.FooterMain}>There is a Footer</Footer>;
};

export default FooterMain;
