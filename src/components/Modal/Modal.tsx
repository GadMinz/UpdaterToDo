import React from "react";
import s from "./Modal.module.scss";
import GlobalSvgSelector from "../../assets/icons/GlobalSvgSelector";
interface ModalProps {
  children: React.ReactElement;
  setOpen: (arg0: boolean) => void;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, setOpen, isOpen }) => {
  return (
    <div
      className={`${s.overlay} ${isOpen && s.active}`}
      onClick={() => setOpen(false)}
    >
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <button className={s.modal_close} onClick={() => setOpen(false)}>
          <GlobalSvgSelector id="x" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
