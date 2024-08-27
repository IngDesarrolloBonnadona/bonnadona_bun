'use client'
import React, { useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import '../login/loginUserForm.css';

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
    // Perform login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="container">
      <div className="login-form">
        <Title level={2}>Iniciar sesión</Title>
        <Form onFinish={handleSubmit}>
          <Form.Item
            label="Correo"
            name="email"
            rules={[{ required: true, message: 'Por favor ingrese su correo' }]}
          >
            <Input
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Item>
          <Form.Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, message: 'Por favor ingrese su contraseña' }]}
          >
            <Input.Password
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Item>
          <Form.Item>
            <a href="#">¿Olvidaste tu contraseña?</a>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-button">
              Ingresar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginUserForm;
