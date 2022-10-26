import styled from "styled-components";

//------------//
//Window Icons//
//------------//

import { FiMinimize } from "react-icons/fi";
import { FiMaximize } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Minimize = styled(FiMinimize)`
  color: white;
  margin: 0.1em;
  padding: 0.3em 0.5em;
  color: green;
`;
export const Maximize = styled(FiMaximize)`
  color: white;
  margin: 0.1em;
  padding: 0.3em 0.5em;
  color: #e1fa05;
`;
export const CloseIcon = styled(AiOutlineCloseCircle)`
  color: white;
  margin: 0.1em;
  padding: 0.3em 0.5em;
  color: red;
`;

//-------------------//
//End of Window Icons//
//-------------------//

export const WindowMain = styled.section`
  background: lightgray;
  border-radius: 0.5em;
  background: rgba(255, 255, 255, 0.61);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.4px);
  -webkit-backdrop-filter: blur(8.4px);
`;

export const WindowBar = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5em 0.5em 0 0;
  padding: 0.7em 0.5em;
  background: rgba(67, 109, 255, 0.75);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.4px);
  -webkit-backdrop-filter: blur(8.4px);
`;

export const BarTxt = styled.small`
  color: white;
`;
