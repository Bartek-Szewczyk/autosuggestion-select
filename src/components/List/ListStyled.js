import styled from "styled-components";
import { color } from "../../theme/globalStyle";
import TickIconSrc from "../../assets/tickIcon";

export const ListContainer = styled.div`
  margin-top: 20px;
  padding-left: 10px;
  max-height: 250px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 10px;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-track {
    background: ${color.background};
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${color.primary};
    border-radius: 5px;
  }
`;
export const ItemContainer = styled.div`
  cursor: pointer;
  margin: 20px 0;
  &:first-child {
    margin-top: 0;
  }
  &:after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 80%;
    padding-top: 2px;
    border-bottom: 1px solid ${color.primary};
  }
`;
export const ItemTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  svg {
    width: 30px;
    margin: auto;
  }
`;
export const ItemText = styled.p`
  width: 75%;
`;
export const TickIcon = styled(TickIconSrc)``;
