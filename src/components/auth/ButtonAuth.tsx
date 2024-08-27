'use client'
import { Button } from "antd";
import { useRouter } from "next/navigation";

const ButtonAuth = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login'); 
  };

  return (
    <Button
      onClick={handleLogin}
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
