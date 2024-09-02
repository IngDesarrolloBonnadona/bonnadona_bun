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
        backgroundImage: "url('/background/back-soft-blue-lines-wave.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          padding: "2rem",
          borderRadius: "20px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          maxWidth: "400px",
          width: "100%",
        }}
      >
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
            rules={[{ required: true, message: "Por favor ingrese su correo" }]}
          >
            <Input
              type="email"
              placeholder="Correo"
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
            ]}
          >
            <Input.Password
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
              Ingresar
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
