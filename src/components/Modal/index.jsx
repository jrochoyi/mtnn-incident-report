import * as React from "react";
import { useEffect } from "react";
import "./modal.css";

const Modal = ({
  isVisible = false,
  title,
  content,
  footer,
  onClose,
  size = "md",
}) => {
  const keydownHandler = ({ key }) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  return !isVisible ? null : (
    <div className="modal" onClick={onClose}>
      <div className={`closeCon ${size}`}>
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
      </div>

      <div
        className={`modal-dialog ${size}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
        </div>
        <div className="modal-body">
          <div className="modal-content">{content}</div>
        </div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
