import React from 'react';
import Footer from '@/components/Footer';
import styles from './index.css';

const BasicLayout: React.FC = (props: any) => {
   // 选择不同布局方案
   const getLayout=():any=>{
     let _pathName:string=props.location.pathname
   }
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
