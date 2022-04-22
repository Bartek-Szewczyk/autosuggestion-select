import React, { useState, useRef } from "react";
import Input from "../Input/Input";
import {
  DownIcon,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalIconWrapper,
  ModalTitle,
  UpIcon,
} from "./ModalStyled";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Modal = useRef();
  const handleOpen = () => {
    if (!isOpen) {
      Modal.current.style.animation = "open 0.5s ease-in-out";
      Modal.current.style.height = "250px";
      Modal.current.style.width = "300px";
    } else {
      Modal.current.style.animation = "close 0.5s ease-in-out";
      Modal.current.style.height = "70px";
      Modal.current.style.width = "200px";
    }
    setIsOpen(!isOpen);
  };
  return (
    <ModalContainer ref={Modal}>
      <ModalHeader>
        <ModalTitle>Universities</ModalTitle>
        <ModalIconWrapper onClick={handleOpen}>
          {isOpen ? <UpIcon /> : <DownIcon />}
        </ModalIconWrapper>
      </ModalHeader>

      {isOpen && (
        <ModalContent>
          <Input />
        </ModalContent>
      )}
    </ModalContainer>
  );
};

export default Modal;
