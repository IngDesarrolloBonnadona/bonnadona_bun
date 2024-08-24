'use client'
import { Button } from "antd";

const ButtonAuth = () => {
  return (
    <Button
      onClick={() => ({})}
      className="button-signin"
      type="primary"
      size="large"
      style={{
        borderRadius: 31,
        fontWeight: "bold",
        backgroundColor: "#0085c8",
      }}
    >
      Ingresar
    </Button>
  );
};

export default ButtonAuth;
