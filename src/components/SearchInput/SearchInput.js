import React, { useState, useEffect } from "react";
import { SearchInputContainer, SearchInputText } from "./SearchInputStyles";
import { getData } from "../../services/Api/request";
const Input = ({ setData, setGlobalText, changeText }) => {
  const [text, setText] = useState("");
  function handleChangeText(e) {
    setText(e.target.value);
    setGlobalText(e.target.value);
  }

  const fetchdata = async (text) => {
    if (text?.length > 1) {
      const data = await getData(text);
      setData(data);
    } else {
      setData([]);
    }
  };
  useEffect(() => {
    setText(changeText);
  }, [changeText]);
  useEffect(() => {
    fetchdata(text);
  }, [text]);

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