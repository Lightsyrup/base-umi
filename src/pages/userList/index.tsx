import React from 'react';
import List from '@/components/List';
import { connect } from 'dva';

const UserList: React.FC = ({ dispatch, city, test,list }: any) => {
  return (
    <>
      <List />
      <div>
        <h3>展示请求数据</h3>
        <button
          onClick={() => {
            dispatch({
              type: 'userList/getInfo',
              payload: '0',
            });
          }}
        >
          点击城市数据
        </button>
        <p>{`city:${city}`}</p>
        <p>{`list:${list}`}</p>
        {console.log(`list:${list}`)}
        <button
          onClick={() => {
            dispatch({
              type: 'welcome/getMock', 
              payload: '0',
            });
          }}
        >
          对比数据
        </button>
        <p>{`test:${test}`}</p>
      </div>
    </>
  );
};
function mapStateToProps(state: any) {
  return {
    city: state.userList.id,
    test: state.welcome.ids,
    list: state.userList.list[10],
  };
}
export default connect(mapStateToProps)(UserList);

