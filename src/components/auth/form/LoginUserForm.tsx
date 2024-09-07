"use client";
import React, { useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import TwoFactorAuthModal from "../modal/TwoFactorAuthModal";

const { Title } = Typography;

const LoginUserForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleVerify = (code: string) => {
    console.log("Código verificado:", code);
    setIsModalVisible(false);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('/background/back-soft-blue-lines-wave.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.4)",
        }}
      />
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 1)",
          padding: "2rem",
          borderRadius: "20px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          maxWidth: "400px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          className="bonnadona-hub-logo fade-in"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBlock: "1px",
          }}
        >
          <img
            src="/logos/LOGO-BONNADONA-HUB.png"
            alt="Logo de Bonnadona HUB"
            style={{ height: 100, marginBottom: 30 }}
          />
        </div>
        <Title
          style={{
            textAlign: "center",
            fontWeight: "normal",
            lineHeight: 1.3,
            marginBottom: "2rem",
          }}
          level={2}
        >
          Iniciar sesión
        </Title>
        <Form onFinish={handleSubmit}>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Por favor ingrese su correo" },
              // { type: "email", message: "Por favor ingrese un correo válido" },
              {
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Por favor ingrese un correo válido",
              },
            ]}
          >
            <Input
              className="custom-input"
              type="email"
              placeholder="Correo"
              autoComplete="off"
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              value={email}
              style={{ borderRadius: "30px" }}
              onChange={handleEmailChange}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Por favor ingrese su contraseña" },
              // { pattern: /^[0-9]+$/, message: "El correo es incorrecto" },
            ]}
          >
            <Input.Password
              className="custom-input"
              prefix={<KeyOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              value={password}
              placeholder="Contraseña"
              style={{ borderRadius: "30px" }}
              onChange={handlePasswordChange}
            />
          </Form.Item>
          <Form.Item>
            <a href="#">¿Olvidaste tu contraseña?</a>
          </Form.Item>
          <Form.Item style={{ textAlign: "center" }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-button"
              style={{
                borderRadius: "30px",
                textAlign: "center",
                backgroundColor: "#0085c8",
              }}
            >
              Iniciar Sesión
            </Button>
          </Form.Item>
        </Form>
      </div>
      <TwoFactorAuthModal
        visible={isModalVisible}
        onClose={handleModalClose}
        onVerify={handleVerify}
      />
    </div>
  );
};

export default LoginUserForm;
