import React, { useState, useEffect } from 'react'
import { Container } from '../../components/Container'
import styled from 'styled-components'
import { colors } from '../../theme/colors'
import images from '../../images'
import CurrencyInfo from '../../components/CurrencyInfo'

const ArrowIcon = styled.img `
  height: 30px;
  width: 50px;
  margin-top: 7px;
  transform: rotate(270deg)
  `

const HeaderText = styled.div`
  font-size: 28px;
  color: ${colors.darkGray};
  font-weight: 600;
  margin-bottom: 35px;
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
  margin-bottom: 25px;
  border: 1px  solid  ${colors.grey};
  border-radius: 10px;
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
const DateSapcer3 = styled.div`
  margin-left: 40px;
`

const CurrencyResult = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.white};
  font-size: 16px;
  color: ${colors.darkGray};
  font-weight: 500;
  align-items: left;
`

const Adress = styled.span`
font-size: 16px;
font-weight: 400;
color: rgba(134, 134, 134, 1);
letter-spacing: -0.011em;
margin-top: 5px;
margin-bottom: 10px;
`
const AdressNumber = styled.span`
font-size: 16px;
font-weight: 700;
color: rgba(78, 77, 77, 1);
letter-spacing: -0.011em;
margin-top: 10px;
margin-bottom: 5px;
`





function FourthScreen () {
  const [ payValue, setPayValue ] = useState('')
  
  return (
    <Container>
      <HeaderText>Your transactions</HeaderText>
      <TansactionDisplayContainer>
        <StatusDate><p>01.04.2023 20:35</p><DateSapcer1/> <p>Status:</p> <p style={{ color: 'black' }}>Pending</p> <DateSapcer2/></StatusDate>
        <CurrencyResult><CurrencyInfo currencyIcon = {images.usdIcon} amount ={'50'}/>
        <ArrowIcon src={images.arrow.default} alt=".." />
        <CurrencyInfo currencyIcon = {images.usdIcon} amount ={'0.0012'}/><DateSapcer3/></CurrencyResult> 
        <Adress> To adress: 
        <AdressNumber> 3BBGhNBNNZA2tpjvpusjq54895...szDjD </AdressNumber> </Adress> 
      </TansactionDisplayContainer>
      <TansactionDisplayContainer>
     <StatusDate><p>01.04.2023 20:35</p><DateSapcer1/> <p>Status:</p> <p style={{ color: 'black' }}>Pending</p> <DateSapcer2/></StatusDate>
        <CurrencyResult><CurrencyInfo currencyIcon = {images.usdIcon} amount ={'50'}/>
        <ArrowIcon src={images.arrow.default} alt=".." />
        <CurrencyInfo currencyIcon = {images.usdIcon} amount ={'0.0012'}/><DateSapcer3/></CurrencyResult> 
        <Adress> To adress: 
        <AdressNumber> 3BBGhNBNNZA2tpjvpusjq54895...szDjD </AdressNumber> </Adress>
      </TansactionDisplayContainer>
      <TansactionDisplayContainer>
        <StatusDate><p>01.04.2023 20:35</p><DateSapcer1/> <p>Status:</p> <p style={{ color: 'black' }}>Pending</p> <DateSapcer2/></StatusDate>
        <CurrencyResult><CurrencyInfo currencyIcon = {images.usdIcon} amount ={'50'}/>
        <ArrowIcon src={images.arrow.default} alt=".." />
        <CurrencyInfo currencyIcon = {images.usdIcon} amount ={'0.0012'}/><DateSapcer3/></CurrencyResult> 
        <Adress> To adress: 
        <AdressNumber> 3BBGhNBNNZA2tpjvpusjq54895...szDjD </AdressNumber> </Adress>
      </TansactionDisplayContainer>
    </Container>
  )
}

export default FourthScreen