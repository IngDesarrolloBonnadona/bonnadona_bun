import React from "react";

import { Card, Col, Row } from "antd";
import styles from "./AllAppsContent.module.css";

import CustomDashboardLayout from "@/components/common/custom_dashboard_layout/CustomDashboardLayout";

const AllAppsContent: React.FC = () => {
  return (
    <>
      <CustomDashboardLayout
        customLayoutContent={
          <div>
            <Row gutter={[16, 16]} style={{ width: "100%" }}>
              <Col xs={24} sm={12} md={8} lg={6}>
                <Card id="all-app-options-card" className={styles.card}>
                  <img
                    src="https://bonnadona-public.s3.amazonaws.com/assets/alicanto_logo.svg"
                    alt="Logo de Bonnadona HUB"
                    style={{
                      height: 70,
                      filter: "drop-shadow(0px 3px 3px white)",
                      // width: "100%",
                      // objectFit: "contain",
                    }}
                  />
                </Card>
                <Card id="all-app-options-card" className={styles.card}>
                  <img
                    src="https://bonnadona-public.s3.amazonaws.com/assets/alicanto_logo.svg"
                    alt="Logo de Bonnadona HUB"
                    style={{
                      height: 70,
                      filter: "drop-shadow(0px 3px 3px white)",
                      // width: "100%",
                      // objectFit: "contain",
                    }}
                  />
                </Card>
              </Col>
            </Row>
          </div>
        }
      />
    </>
  );
};

export default AllAppsContent;
