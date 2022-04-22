import styled from "styled-components";
import { color } from "../theme/globalStyle";

export const HomeContainer = styled.div`
  background: ${color.background};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${color.primary};
`;
