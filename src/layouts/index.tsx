import React from 'react';
import Footer from '@/components/Footer';
import styles from './index.css';

const BasicLayout: React.FC = (props: any) => {
  return (
    <>
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to umi!</h1>
        {props.children}
      </div>
      <Footer />
    </>
  );
};

export default BasicLayout;
