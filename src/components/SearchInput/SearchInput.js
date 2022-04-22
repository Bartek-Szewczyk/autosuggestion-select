import React, { useState } from "react";
import { SearchInputContainer, SearchInputText } from "./SearchInputStyles";

const Input = () => {
  const [text, setText] = useState("");
  function handleChangeText(e) {
    setText(e.target.value);
  }
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
