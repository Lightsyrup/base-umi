import { connect } from 'dva';
import React from 'react';

const Welcome: React.FC = ({ newInfo, dispatch,newId }: any) => {
  return (
    <>
      <h1 className="">欢迎来到首页！</h1>
      <div>新的征程由此开始😃</div>
      <div>
        点击此处与用户发招呼：
        <button
          onClick={() => {
            alert(`${newInfo}`);
          }}
        >
          Umi,你好啊！
        </button>
      </div>
      {/* 使用mock数据，发送请求显示数据 */}
      <button
        onClick={() => {
          dispatch({
            type: 'welcome/getMock', //传给哪个模板的哪个方法
            payload: '0',
          });
        }}
      >
        获取传输内容
      </button>
      <p>当前state内容：{`${newId}`}</p>
    </>
  );
};

function mapStateToProps(state: any) {
  return { newInfo: state.welcome.sayHello, newId: state.welcome.id };
}

export default connect(mapStateToProps)(Welcome);
