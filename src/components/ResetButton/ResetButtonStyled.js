import styled from "styled-components";
import { color } from "../../theme/globalStyle";

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  border: 1px solid ${color.primary};
  color: ${color.primary};
  background-color: ${color.background};
  &:hover {
    opacity: 0.7;
  }
`;
