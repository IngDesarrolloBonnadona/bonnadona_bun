"use client";

import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import UserHeaderLayout from "@/components/user/header_layout_dashboard/UserHeaderLayout";
import { Button, Col, Layout, Row, theme } from "antd";
// import { ItemKeys } from "./enums/item_names_and_keys.enums";
// import { useMenuItems } from "@/components/admin/items_menu_dashboard_admin/items_menu_dashboard_admin";
// import {
//   setSelectedKey,
//   setSelectedOpenKeys,
// } from "@/redux/features/common/modal/modalSlice";

const { Header, Content, Footer } = Layout;

const CustomDashboardLayout: React.FC<{
  customLayoutHeader?: ReactNode;
  customLayoutContent: ReactNode;
  customLayoutFooter?: any;
}> = ({ customLayoutHeader, customLayoutContent, customLayoutFooter }) => {
  const router = useRouter();
  // const dispatch = useAppDispatch();
  // const items = useMenuItems();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // const selectedKeyState = useAppSelector((state) => state.modal.selectedKey);
  // const selectedOpenKeysState = useAppSelector(
  //   (state) => state.modal.selectedOpenKeys
  // );

  return (
    <Layout
      className="custom-dashboard-layout"
      style={{
        minHeight: "100vh",
        backgroundColor: "transparent",
      }}
    >
      <Layout
        className="custom-dashboard-apps-components"
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#DFEBF2",
          minHeight: "100vh",
        }}
      >
        <Header
          className="custom--dashboard-layout-header"
          style={{
            background: "#0085c8",
            padding: "0px",
            position: "fixed",
            width: "100%",
            top: 0,
            zIndex: 1000,
          }}
        >
          <Row
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <Col
              xs={12}
              sm={6}
              md={6}
              lg={6}
              style={{
                display: "flex",
                flexFlow: "row wrap",
                alignContent: "center",
                justifyContent: "flex-start",
                paddingLeft: "17px",
              }}
            >
              <img
                src="/logos/LOGO-BONNADONA-HUB-HORIZ.png"
                alt="Logo de Bonnadona HUB"
                style={{ height: 60, filter: "drop-shadow(0px 3px 3px white)" }}
              />
            </Col>

            <Col
              xs={12}
              sm={18}
              md={18}
              lg={18}
              style={{
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "flex-end",
                alignContent: "center",
                paddingRight: "17px",
              }}
            >
              {customLayoutHeader || <UserHeaderLayout />}
            </Col>
          </Row>
        </Header>
        <Content
          className="custom--dashboard-layout-content"
          style={{
            flexGrow: 1,
            margin: "13px 13px",
            marginTop: "80px",
            display: "flex",
            justifyContent: "center",
            backgroundColor: colorBgContainer,
            borderRadius: borderRadiusLG,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            padding: "70px",
          }}
        >
          {customLayoutContent}
        </Content>
        <Footer
          className="custom--dashboard-layout-footer"
          style={{
            textAlign: "center",
            backgroundColor: colorBgContainer,
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          {customLayoutFooter ||
            `Clínica Bonnadona © ${new Date().getFullYear()}💙`}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default CustomDashboardLayout;
