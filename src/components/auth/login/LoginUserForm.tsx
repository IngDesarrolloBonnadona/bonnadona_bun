"use client";
import React, { useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import "../login/loginUserForm.css";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";

const { Title } = Typography;

const LoginUserForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="container">
      <div className="login-form">
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
            // label="Correo"
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
            // label="Contraseña"
            name="password"
            rules={[
              { required: true, message: "Por favor ingrese su contraseña" },
            ]}
          >
            <Input.Password
              prefix={<KeyOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              value={password}
              placeholder="Contreseña"
              style={{ borderRadius: "30px" }}
              onChange={handlePasswordChange}
            />
          </Form.Item>
          <Form.Item>
            <a href="#">¿Olvidaste tu contraseña?</a>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-button"
              style={{ borderRadius: "30px" }}
            >
              Ingresar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginUserForm;
