import React from "react";
import Modal, { ModalInjectedProps } from "@/components/generics/Modal";
import { CONSTANTS, TEXT } from "@/statics";
import { useHandleLogin } from "@/services/authService";
import LoginForm from "./LoginForm";
import { useAuthStore } from "stores/AuthStore";

type LoginViewProps = Partial<ModalInjectedProps>;

const LoginView: React.FC<LoginViewProps> = ({handleClose}) => {
  const isLoggingIn = useAuthStore((state) => state.isLoggingIn);

  const { handleLogin, error, success } = useHandleLogin();

  const handleUserLogin = async (user: string, pwd: string) => await handleLogin(user, pwd);

  React.useEffect(() => {
    if (success) {
      console.log("Login success");
      handleClose && handleClose();
    }
  }, [handleClose, success]);
console.log({success, error, isLoggingIn})
  return (
    <div className="login-view-root">
      <h3 className="login-view-title">{TEXT.LOGIN.TITLE}</h3>
      <LoginForm onSubmit={handleUserLogin} disabled={isLoggingIn} />
      {error && <p className="login-error">{`Error: ${error}`}</p>}
    </div>
  );
};

export const LoginModal = () => {
  return (
    <Modal name="login" modalKey={CONSTANTS.MODALS.LOGIN}>
      <LoginView />
    </Modal>
  );
};

export default LoginView;
