import styled from "styled-components";
import { Carousel } from 'react-responsive-carousel';
import {device} from "../../../styles/sizes";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  width: 100%;
  padding: 22px 0 0 32px;
  
  @media ${device.tablet} {
    padding: 22px 0;
  }
  
  @media ${device.mobile} {
    padding: 22px 16px 0 16px;
  }
`

export const ContentWrapperContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 1272px;
  height: 100%;
  margin: 0 auto 0 auto;

  @media ${device.laptop} {
    max-width: 848px;
  }
  
  @media ${device.tablet} {
    max-width: 390px;
  }
  
  @media ${device.mobile} {
    max-width: 344px;
  }
`

export const CaravanCardContainer = styled.div`
  width: 392px;
  height: 410px;
  background: #FFFFFF 0 0 no-repeat padding-box;
  border: 1px solid #EDEAE3;
  border-radius: 8px;
  opacity: 1;
  box-sizing: border-box;
  overflow: hidden;
  margin: 0 32px 32px 0;
  cursor: pointer;

  @media ${device.tablet} {
    margin: 0 0 32px 0
  }

  @media ${device.mobile} {
    width: 343px
  }
  
  @media ${device.mobileS} {
    width: 310px;
  }
  
`

export const StyledCarousel = styled(Carousel)`
  height: 56%;  
`

export const ImageContainer = styled.div`
  height: 230px;
  width: 100%;
`

export const StyledImage = styled.img`
  max-height: 100%;
  width: 100%;
  background: no-repeat center center fixed;
`

export const DescriptionContainer = styled.div`
  height: 190px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const DescriptionType = styled.div`
  text-align: left;
  font: normal normal bold 12px/12px Roboto;
  letter-spacing: 1px;
  color: #FF5E55;
  text-transform: uppercase;
  opacity: 1;
  padding-bottom: 2px;
`

export const DescriptionName = styled.div`
  width: 100%;
  text-align: left;
  font: normal normal bold 24px/24px Roboto;
  letter-spacing: 0;
  color: #1F2244;
  opacity: 1;
  padding-bottom: 6px;
  border-bottom: 2px solid #EDEAE3;
`

export const DescriptionLocation = styled.div`
  text-align: left;
  font: normal normal normal 14px/16px Roboto;
  letter-spacing: 0;
  color: #1F2244;
  opacity: 1;
  padding: 10px 0;
`

export const IconsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 2px solid #EDEAE3;
`

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-right: 20px;
`

export const StyledIcon = styled.img`
  height: 20px;
  width: 20px;
  padding-right: 5px;  
`

export const Count = styled.div`
  text-align: left;
  font: normal normal normal 14px/16px Roboto;
  letter-spacing: 0;
  color: #1F2244;
  opacity: 1;
`

export const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 17px;
`

export const PriceTitle = styled.div`
  text-align: left;
  font: normal normal normal 16px/16px Roboto;
  letter-spacing: 0;
  color: #9C8C8C;
  opacity: 1;
`

export const TotalPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-align: right;
  font: normal normal bold 16px/16px Roboto;
  letter-spacing: 0;
  color: #1F2244;
  opacity: 1;
`

export const FastReservationIcon = styled.img`
  padding-left: 8px;
`

export const StyledNextButton = styled.div<{isArray: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 155px;
  background: ${props => props.isArray ? '#119383' : '#757575'} no-repeat 0 0;
  border-radius: 8px;
  opacity: 1;
  margin: 48px 0 115px 0;
  cursor: ${props => props.isArray ? 'pointer' : 'wait'};
  
  @media ${device.mobile} {
    margin: 29px 0 45px 0;
  }
`

export const ButtonText = styled.div`
  text-align: center;
  font: normal normal 900 16px/16px Roboto;
  letter-spacing: 0;
  color: #FFFFFF;
  opacity: 1;  
`
