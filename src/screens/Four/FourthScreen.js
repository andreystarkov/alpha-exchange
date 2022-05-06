import React, { useState, useEffect } from 'react'
import { Container } from '../../components/Container'
import styled from 'styled-components'
import { colors } from '../../theme/colors'
import StatusRow  from '../../components/StatusRaw'

const HeaderText = styled.div`
  font-size: 28px;
  color: ${colors.darkGray};
  font-weight: 600;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content:left
`
const TansactionDisplayContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 380px;
  hight: 120px;
  background-color: ${colors.white};
`
const StatusDate = styled.div`
  display: flex;
  
  flex-direction: row;
  background-color: ${colors.white};
  font-size: 16px;
  color: ${colors.darkGray};
  font-weight: 500;
  
`
const DateSapcer1 = styled.div`
  margin-left: 30px;
`
const DateSapcer2 = styled.div`
  margin-left: 70px;
`





function FourthScreen () {
  const [ payValue, setPayValue ] = useState('')
  
  return (
    <Container>
      <HeaderText>Your transactions</HeaderText>
      <TansactionDisplayContainer>
        <StatusDate><p>01.04.2023 20:35</p><DateSapcer1/> <p>Status:</p> <p style={{ color: 'black' }}>Pending</p> <DateSapcer2/></StatusDate>
      </TansactionDisplayContainer>
      <TansactionDisplayContainer>
     
      </TansactionDisplayContainer>
      <TansactionDisplayContainer>
        
      </TansactionDisplayContainer>
    </Container>
  )
}

export default FourthScreen