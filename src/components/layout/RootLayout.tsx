import React, { ReactElement } from "react";
import { Layout } from "antd";
import GridWatch from "../../features/grid-watch/GridWatch";

const { Content } = Layout;

const RootLayout = (): ReactElement => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
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
