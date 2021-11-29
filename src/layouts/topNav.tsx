import React, { useState } from 'react';
import { Menu, Icon } from 'antd';

const TopNav: React.FC = () => {
  const { SubMenu } = Menu;
  const [current, setCurrent] = useState('mail');
  const handleClick = (e: any) => {
    console.log('click ', e);
    setCurrent('e.key');
  };
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home">
        <Icon type="home" />
        主页
      </Menu.Item>
      <Menu.Item key="users">
        <Icon type="appstore" />
        添加用户
      </Menu.Item>
      <Menu.Item key="alipay">
        <a href="/users" target="_blank" rel="noopener noreferrer">
          查看用户详情
        </a>
      </Menu.Item>
      <SubMenu
        title={
          <span className="submenu-title-wrapper">
            <Icon type="setting" />
            更多功能...
          </span>
        }
        disabled
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
  );
};

export default TopNav;
