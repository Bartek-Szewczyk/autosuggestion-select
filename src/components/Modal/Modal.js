import React, { useState, useRef, useEffect, useCallback } from "react";
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
  const [showList, setShowList] = useState(false);
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
    setText("");
    if (!isOpen) {
      Modal.current.style.height = "170px";
      Modal.current.style.width = "350px";
      setIsOpen(!isOpen);
    } else {
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
    console.log(selected);
  }, [selected]);
  const selectedHandler = (data) => {
    setSelected(data);
  };
  const resize = useCallback(() => {
    if ((data?.length > 0 && isOpen) || (selected.length > 0 && isOpen)) {
      Modal.current.style.transition = "all 0.2s ease-in-out";
      Modal.current.style.height = "450px";
      Modal.current.style.transition = "all 0.5s ease-in-out";
      setTimeout(() => {
        setShowList(true);
      }, 200);
    } else if (isOpen && text?.length > 0) {
      setShowList(false);
      Modal.current.style.height = "170px";
      Modal.current.style.transition = "all 0.5s ease-in-out";
    } else if (isOpen) {
      setShowList(false);
      Modal.current.style.height = "120px";
      Modal.current.style.transition = "all 0.5s ease-in-out";
    } else {
      setShowList(false);
      Modal.current.style.height = "70px";
      Modal.current.style.transition = "all 0.5s ease-in-out";
    }
  }, [data, isOpen, selected, text]);
  useEffect(() => {
    resize();
  }, [data, selected, isOpen, resize]);
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
          {showList && (
            <List
              data={data}
              selected={selectedHandler}
              selectedData={selected}
            />
          )}
          {(text?.length > 0 || selected.length > 0) && (
            <ResetButton handleClick={handleReset} />
          )}
        </ModalContent>
      )}
    </ModalContainer>
  );
};

export default Modal;
