import styled from 'styled-components'
import {Autocomplete, FormHelperText, Slider} from "@mui/material";
import {NavigationElement} from "./NavigationElement/NavigationElement";
import {TypeCard} from "./Type/TypeCard/TypeCard";
import {device} from "../../../styles/sizes";

export const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-top: 2px solid #EDEAE3;
  border-bottom: 2px solid #EDEAE3;
`

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  flex-wrap: wrap;
  
  @media ${device.laptop} {
    width: 100%;
    flex-direction: column;
    margin: 0
  }
`

export const NavigationElementContainer = styled.div`
  border-right: 2px solid #EDEAE3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 22px 14px 22px 0;

  @media ${device.laptop} {
    align-items: center;
    width: 100%;
    padding: 22px 0;
    border-right: 0;
    border-bottom: 2px solid #EDEAE3;
  }
  
  @media ${device.mobile} {
    align-items: flex-start;
    padding: 22px 16px
  }
`

export const NavigationTitle = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  font-size: 16px;
  font-family: Roboto sans-serif;
  letter-spacing: 0;
  color: #9C8C8C;
  opacity: 1;
  margin: 0;
  img {
    padding-left: 18px;
  }
`

export const NavigationContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledSlider = styled(Slider)`
  width: 328px;
  padding: 22px 0;
  
  @media ${device.mobileS} {
    width: 295px;
  }
`

export const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${device.mobileS} {
    .MuiOutlinedInput-root {
      width: 145px;
    }
  }
`

export const StyledFormHelperText = styled(FormHelperText)`
  color: #ff0000
`

export const TypeNavigationElement = styled(NavigationElement)`
  padding-left: 14px;
  div {
    flex-direction: row;
  }

  @media ${device.laptop} {
    padding-left: 0;
    div {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  
  @media ${device.mobile} {
    padding: 22px 16px;
    div {
      justify-content: flex-start;
    }
  }
`

export const TypeCardContainer = styled.div<{ isInArray: boolean }>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 156px;
  height: 88px;
  border: ${props => !props.isInArray ? '2px solid #EDEAE3' : '3px solid #119383'};
  border-radius: 8px;
  margin: 14px 14px 0 0;
  padding: 10px;
  cursor: pointer;
  
  @media ${device.mobileS} {
    padding: 5px;
    width: 141px
  }
`

export const TypeCardTitle = styled.p`
  margin: 0;
  text-align: left;
  font: normal normal normal 16px/16px Roboto;
  letter-spacing: 0;
  color: #1F2244;
  opacity: 1;
`

export const TypeCardContent = styled.p`
  margin: 4px 0 0 0;
  text-align: left;
  font: normal normal normal 12px/14px Roboto;
  letter-spacing: 0;
  color: #9C8C8C;
  opacity: 1;
  white-space: pre-wrap;
`

export const LastTypeCard = styled(TypeCard)`
  margin: 14px 0 0 0;
  @media ${device.laptop} {
    margin: 14px 14px 0 0;
  }

`

export const ReservationNavigationElement = styled(NavigationElement)`
  padding: 22px 0 22px 22px;
  border: 0;
  
  @media ${device.laptop} {
    padding: 22px 0
  }
  
  @media ${device.mobile} {
    padding: 22px 16px
  }
`

export const StyledAutocomplete = styled(Autocomplete)`
  margin: 14px 0 0 0;
  .MuiOutlinedInput-notchedOutline {
    border-color: #EDEAE3;
    border-width: 2px
  }
`
