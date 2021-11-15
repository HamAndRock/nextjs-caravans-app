import styled from "styled-components";
import {device} from "../../../styles/sizes";

export const HeaderContainer = styled.header`
  width: 1238px;
  display: flex;
  justify-content: flex-start;
  padding: 22px 0;
  margin: 0 auto;
  
  @media ${device.laptop} {
    width: 100%;
  }
`

export const HeaderImage = styled.img`
  height: 35.19px;
  width: 201px;

  @media ${device.laptop} {
    margin: 0 auto;
  }
`
