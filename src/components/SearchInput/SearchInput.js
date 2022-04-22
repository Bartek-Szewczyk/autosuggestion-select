import React, { useState, useEffect } from "react";
import { SearchInputContainer, SearchInputText } from "./SearchInputStyles";
import { getData } from "../../services/Api/request";
const Input = ({ setData }) => {
  const [text, setText] = useState("");
  function handleChangeText(e) {
    setText(e.target.value);
  }
  const fetchdata = async (text) => {
    if (text.length > 0) {
      const data = await getData(text);
      setData(data);
    }
  };
  useEffect(() => {
    fetchdata(text);
  }, [text]);

  return (
    <SearchInputContainer>
      <SearchInputText
        type="text"
        placeholder="Find universities..."
        onChange={(e) => handleChangeText(e)}
      ></SearchInputText>
    </SearchInputContainer>
  );
};

export default Input;
