import React from "react";
import { Button, ButtonContainer } from "./ResetButtonStyled";

const ResetButton = ({ handleClick }) => {
  return (
    <ButtonContainer>
      <Button onClick={handleClick}>Reset</Button>
    </ButtonContainer>
  );
};

export default ResetButton;
