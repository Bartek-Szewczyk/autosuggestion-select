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
  transition: all 0.5s ease-in-out;
`;
export const ModalCounter = styled.p`
  font-size: 22px;
  margin-left: 5px;
`;
export const ModalContent = styled.div`
  animation: show 0.6s ease-in-out;
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes hide {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
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
  animation: jump infinite 2s ease-in-out;
  svg {
    margin: auto;
  }
  @keyframes jump {
    0% {
      transform: translate(0, 5px);
    }
    50% {
      transform: translate(0, -5px);
    }
    100% {
      transform: translate(0, 5px);
    }
  }
`;
export const UpIcon = styled(UpIconSrc)``;
export const DownIcon = styled(DownIconSrc)``;
