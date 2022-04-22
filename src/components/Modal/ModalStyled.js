import styled from "styled-components";
import { color } from "../../theme/globalStyle";
import UpIconSrc from "../../assets/upIcon";
import DownIconSrc from "../../assets/downIcon";

export const ModalContainer = styled.div`
  border: 1px solid ${color.primary};
  border-radius: 10px;
  padding: 10px;
  height: 70px;
  width: 200px;
  background: ${color.backgroundContainer};
  @keyframes open {
    0% {
      height: 70px;
      width: 200px;
    }
    100% {
      height: 250px;
      width: 300px;
    }
  }
  @keyframes close {
    0% {
      height: 250px;
      width: 300px;
    }
    100% {
      height: 70px;
      width: 200px;
    }
  }
`;
export const ModalContent = styled.div`
  animation: show 0.5s ease-in-out;
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const ModalTitle = styled.h2`
  pointer-events: none;
  user-select: none;
`;

export const ModalIconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  svg {
    margin: auto;
  }
`;
export const UpIcon = styled(UpIconSrc)``;
export const DownIcon = styled(DownIconSrc)``;
