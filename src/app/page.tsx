"use client";
import React from "react";
import Image from "next/image";
import ButtonAuth from "@/components/auth/ButtonAuth";
import { ImagesLinksApp } from "../../public/images_apps/imagesLinksApp";
import "../app/global.css";
import { Card, Col } from "antd";

const HomePage: React.FC = () => {
  return (
    <div
      className="homepage"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexFlow: "column wrap",
      }}
    >
      <div
        className="background-page"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('/background/back-soft-blue-lines-wave.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4,
        }}
      />

      <div
        className="content-homepage"
        style={{
          zIndex: 1,
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <div
          className="bonna-logo"
          style={{
            // display: "flex",
            // justifyContent: "left",
            // paddingTop: "22px",
            position: "absolute",
            top: "22px",
            right: "22px",
          }}
        >
          <img
            src="/logos/LOGO-BONNADONA.png"
            alt="Logo de Bonnadona"
            style={{ height: 80 }}
          />
        </div>

        <Col
          xs={24}
          lg={24}
          style={{
            padding: "0px 7px",
            width: "100vw",
            maxWidth: "450px",
            minWidth: "231px",
          }}
        >
          <Card
            className="content-card"
            style={{
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
              backgroundColor: "#fcfcfc",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              paddingBlock: "13px",
              paddingInline: "13px",
              marginBlock: "31px",
              marginInline: "13px",
            }}
          >
            <div
              className="bonnadona-hub-logo"
              style={{
                display: "flex",
                justifyContent: "center",
                paddingBlock: "1px",
              }}
            >
              <img
                src="/logos/LOGO-BONNADONA-HUB.png"
                alt="Logo de Bonnadona HUB"
                style={{ height: 120, marginBottom: 30 }}
              />
            </div>

            <div className="text-card">
              <h3
                className="presentation-text"
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  lineHeight: 1.3,
                  marginBottom: 15,
                }}
              >
                Plataforma de acceso a las aplicaciones de la Clínica Bonnadona
              </h3>
              {/* <h3
                className="presentation-text"
                style={{
                  textAlign: "center",
                  fontWeight: "normal",
                  lineHeight: 1.3,
                }}
              >
                Trámites en línea para hacer más fácil y ágil tus solicitudes
                con nosotros, a un solo clic de distancia.
              </h3> */}
              <div
                className="auth-button"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <ButtonAuth />
              </div>
            </div>
          </Card>
        </Col>
      </div>
    </div>
  );
};

export default HomePage;
