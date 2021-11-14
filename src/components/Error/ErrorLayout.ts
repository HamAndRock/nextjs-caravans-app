import styled from "styled-components";

export const ErrorContainer = styled.div`
  height: 60vh;
  width: 100%;
  min-width: 342px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font: normal normal 900 20px/20px Roboto;
`

export const ErrorButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 155px;
  background: #a80000 no-repeat 0 0;
  border-radius: 8px;
  opacity: 1;
  margin: 48px 0 115px 0;
  cursor: pointer;
`

export const ErrorButtonText = styled.div`
  text-align: center;
  font: normal normal 900 16px/16px Roboto;
  letter-spacing: 0;
  color: #FFFFFF;
  opacity: 1;  
`
