import React from "react";
import "./Modal.scss";

import { ReactNode } from "react";

type ModalProps = {
  title?: string;
  isOpen?: boolean;
  onClose?: () => void;
  children?: ReactNode;
};

const Modal = ({ title = "Modal", isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header px-5 py-3">
          <h1>{title}</h1>
          <button onClick={onClose}>x</button>
        </div>
        <div className="modal-body p-5">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
