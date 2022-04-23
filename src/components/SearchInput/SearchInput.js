import React, { useState, useEffect } from "react";
import { SearchInputContainer, SearchInputText } from "./SearchInputStyles";
import { getData } from "../../services/Api/request";
const Input = ({ setData, setGlobalText, changeText }) => {
  const [text, setText] = useState("");
  function handleChangeText(e) {
    setText(e.target.value);
    setGlobalText(e.target.value);
  }

  useEffect(() => {
    setText(changeText);
  }, [changeText]);
  useEffect(() => {
    const fetchdata = async (text) => {
      if (text?.length > 1) {
        const data = await getData(text);
        setData(data);
      } else {
        setData([]);
      }
    };
    fetchdata(text);
  }, [setData, text]);

  return (
    <SearchInputContainer>
      <SearchInputText
        type="text"
        value={text}
        placeholder="Find universities..."
        onChange={(e) => handleChangeText(e)}
      ></SearchInputText>
    </SearchInputContainer>
  );
};

export default Input;
