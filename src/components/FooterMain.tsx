import React from 'react';
import { Layout } from 'antd';
import styles from './FooterMain.less';

const FooterMain: React.FC = () => {
  const { Footer } = Layout;
  return <Footer className={styles.FooterMain}>There is a Footer</Footer>;
};

export default FooterMain;
