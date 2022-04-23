import styled from "styled-components";
import { color } from "../../theme/globalStyle";

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SearchInputText = styled.input`
  width: 95%;
  height: 40px;
  border-radius: 5px;
  border: none;
  outline: 0;
  font-size: 18px;
  color: ${color.primary};
  padding-left: 10px;
  background-color: ${color.background};
  &:focus {
    border: 1px solid ${color.primary};
    outline: 0;
  }
`;
