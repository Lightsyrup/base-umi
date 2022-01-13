import React from "react";
import { Layout } from 'antd';
import styles from './Common.less'

const Common:React.FC=(props:any)=>{
    const { Content } = Layout;
    return (
      <Layout className={styles.CommonLayout}>
        
        <Content className={styles.CommonMain}>
          {props.children}
        </Content>
        
      </Layout>
    );
}


export default Common