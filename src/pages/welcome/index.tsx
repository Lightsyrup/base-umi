import { connect } from 'dva';
import React from 'react';

const Welcome: React.FC = ({newInfo}:any) => {
  return (
    <>
      <div className="">欢迎来到首页！</div>
      <div>新的征程由此开始😃</div>
      <div>
        点击此处与用户发招呼：
        <button onClick={() => {alert(`${newInfo}`);}}>
          Umi,你好啊！
        </button>
      </div>
    </>
  );
};

function mapStateToProps(state: any) {
  return { newInfo: state.welcome.sayHello };
}

export default connect(mapStateToProps)(Welcome);
