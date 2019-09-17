import React, { ReactElement } from "react";
import { Layout } from "antd";
import GridWatch from "../../features/grid-watch/GridWatch";
import NavMenu from "./NavMenu";

const { Sider, Content } = Layout;

const RootLayout = (): ReactElement => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider style={{ marginRight: 20 }}>
        <NavMenu />
      </Sider>
      <Content>
        {
          //Normally routes would go in here!
        }
        <GridWatch />
      </Content>
    </Layout>
  );
};

export default RootLayout;
