import React from "react";
import Modal from "@mui/material/Modal";
import { useAppStore, ValidModalKey } from "stores/AppStore";

interface ModalWrapperProps {
  modalKey: ValidModalKey;
  name: string;
  children: React.ReactElement<any>;
  disableDefaultClose?: boolean;
}

export interface ModalInjectedProps {
  modalData?: Object;
  handleClose: () => void;
}

const ModalWrapper: React.FC<ModalWrapperProps> = (props) => {
  const modal = useAppStore((state) => state.modals.login)
  const closeModal = useAppStore((state) => state.closeModal)

  const handleClose = () => {
    closeModal({ key: props.modalKey });
  };

  const injectedProps: ModalInjectedProps = {
    modalData: modal?.data,
    handleClose,
  };

  return (
    <Modal
      open={modal?.visible}
      className={`web-app-modal ${props.name}-modal`}
      onClose={props.disableDefaultClose ? () => {} : handleClose}
    >
      <div className="web-app-modal-content">
        {React.cloneElement(props.children, injectedProps)}
      </div>
    </Modal>
  );
};

export default ModalWrapper;
