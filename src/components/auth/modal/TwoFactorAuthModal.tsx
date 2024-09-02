import React, { useState } from "react";
import { Modal, Input, Button, Typography } from "antd";

const { Title } = Typography;

interface TwoFactorAuthModalProps {
  visible: boolean;
  onClose: () => void;
  onVerify: (code: string) => void;
}

const TwoFactorAuthModal: React.FC<TwoFactorAuthModalProps> = ({
  visible,
  onClose,
  onVerify,
}) => {
  const [code, setCode] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleVerify = () => {
    onVerify(code);
  };

  return (
    <Modal
      title="Autenticación en dos fases"
      open={visible}
      onCancel={onClose}
      footer={null}
    >
      <div style={{ textAlign: "center" }}>
        <Title level={4} style={{ marginBottom: "1rem" }}>
          Ingresa el código de verificación
        </Title>
        <Input
          placeholder="Código"
          value={code}
          onChange={handleChange}
          style={{ marginBottom: "1rem", borderRadius: "8px" }}
        />
        <Button
          type="primary"
          onClick={handleVerify}
          style={{
            borderRadius: "30px",
            textAlign: "center",
            backgroundColor: "#0085c8",
          }}
        >
          Verificar
        </Button>
      </div>
    </Modal>
  );
};

export default TwoFactorAuthModal;
