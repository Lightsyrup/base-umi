import React, { useState } from 'react';
import { Menu, Layout } from 'antd';
import styles from './HeaderMain.less';

const HeaderMain: React.FC = () => {
  const [current, setCurrent] = useState('mail');
  const { Header } = Layout;
  const { SubMenu } = Menu;

  const  handleClick = e => {
     console.log('click ', e);
     setCurrent(e.key)
  };

  return (
    <>
      {/* <Header className={styles.headerContent}>There is a header</Header> */}
      <Header>
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <SubMenu
            title={
              <span className="submenu-title-wrapper">  
                Navigation Three - Submenu
              </span>
            }
          >
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Header>
    </>
  );
};

export default HeaderMain;
