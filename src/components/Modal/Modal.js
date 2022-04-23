import React, { useState, useRef, useEffect } from "react";
import List from "../List/List";
import ResetButton from "../ResetButton/ResetButton";
import SearchInput from "../SearchInput/SearchInput";
import {
  DownIcon,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalIconWrapper,
  ModalTitle,
  UpIcon,
  ModalCounter,
} from "./ModalStyled";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState();
  const [text, setText] = useState();
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState([]);
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
      Modal.current.style.height = "450px";
      Modal.current.style.width = "350px";
      setIsOpen(!isOpen);
    } else {
      Modal.current.style.animation = "close 0.5s ease-in-out";
      Modal.current.style.height = "70px";
      Modal.current.style.width = "210px";
      Content.current.style.animation = "hide 0.3s ease-in-out";
      Content.current.style.opaicty = "0";
      setTimeout(() => {
        setIsOpen(!isOpen);
      }, 300);
    }
  };
  const handleReset = () => {
    setData();
    setText("");
    setCount(0);
    setSelected([]);
  };
  useEffect(() => {
    setCount(selected.length);
  }, [selected]);
  const selectedHandler = (data) => {
    setSelected(data);
  };
  return (
    <ModalContainer ref={Modal}>
      <ModalHeader>
        <ModalTitle>Universities</ModalTitle>
        {count > 0 && <ModalCounter>{count}</ModalCounter>}
        <ModalIconWrapper onClick={handleOpen}>
          {isOpen ? <UpIcon /> : <DownIcon />}
        </ModalIconWrapper>
      </ModalHeader>

      {isOpen && (
        <ModalContent ref={Content}>
          <SearchInput
            setData={setData}
            setGlobalText={setText}
            changeText={text}
          />
          {data && (
            <>
              <List
                data={data}
                selected={selectedHandler}
                selectedData={selected}
              />
              <ResetButton handleClick={handleReset} />
            </>
          )}
        </ModalContent>
      )}
    </ModalContainer>
  );
};

export default Modal;
