import styled from "styled-components";
import {device} from "../../styles/sizes";

export const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  border: 2px solid #EDEAE3;

  @media ${device.mobileS} {
    width: min-content;
  }
`
