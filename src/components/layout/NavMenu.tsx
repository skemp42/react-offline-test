import React, { ReactElement } from "react";
import { Menu } from "antd";

const NavMenu = (): ReactElement => {
  return (
    <>
      <Menu
        theme='dark'
        mode='vertical'
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key='1'>GridWatch</Menu.Item>
      </Menu>
    </>
  );
};

export default NavMenu;
