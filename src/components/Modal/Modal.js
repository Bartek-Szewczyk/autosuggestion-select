import React, { useState, useRef, useEffect } from "react";
import Input from "../SearchInput/SearchInput";
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
  const Content = useRef();
  const handleClickOutside = (event) => {
    if (Modal.current && !Modal.current.contains(event.target) && isOpen) {
      handleOpen();
    }
  };
  const handleEscapeClick = (event) => {
    if (event.key === "Escape" && isOpen === true) {
      handleOpen();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeClick, false);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeClick, false);
    };
  });
  const handleOpen = () => {
    if (!isOpen) {
      Modal.current.style.animation = "open 0.5s ease-in-out";
      Modal.current.style.height = "250px";
      Modal.current.style.width = "300px";
      setIsOpen(!isOpen);
    } else {
      Modal.current.style.animation = "close 0.5s ease-in-out";
      Modal.current.style.height = "70px";
      Modal.current.style.width = "200px";
      Content.current.style.animation = "hide 0.5s ease-in-out";
      Content.current.style.opaicty = "0";
      setTimeout(() => {
        setIsOpen(!isOpen);
      }, 500);
    }
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
        <ModalContent ref={Content}>
          <Input />
        </ModalContent>
      )}
    </ModalContainer>
  );
};

export default Modal;
