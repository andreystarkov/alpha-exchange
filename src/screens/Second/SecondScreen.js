import React, { useState } from 'react'
import { Button } from '../../components/Button'
import { Container } from '../../components/Container'
import InputComponent from '../../components/Input'
import images from '../../images'
import styled from 'styled-components'
import CurrencyInfo from '../../components/CurrencyInfo'
import { feautureTransactions } from './FeautureTransactionsData'



const UnderEmail = styled.span`
font-size: 18px;
font-weight: 400;
color: rgba(117, 117, 117, 0.5);
letter-spacing: -0.019em;
margin-top: 3px;
margin-bottom: 35px;
`
const FeeAmount = styled.span`
font-size: 16px;
font-weight: 400;
color: rgba(134, 134, 134, 1);
letter-spacing: -0.011em;
margin-top: 5px;
`
const Adress = styled.span`
font-size: 16px;
font-weight: 400;
color: rgba(134, 134, 134, 1);
letter-spacing: -0.011em;
margin-top: 25px;
`
const AdressNumber = styled.span`
font-size: 16px;
font-weight: 700;
color: rgba(78, 77, 77, 1);
letter-spacing: -0.011em;
margin-top: 4px;
margin-bottom: 30px;
`
const ArrowIcon = styled.img `
height: 15px;
width: 24px;
margin-top: 9px;
margin-left: 11px;
`

function emailValidation (email){
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(!email || regex.test(email) === false){
      return false;
  }
  return true;
}

function SecondScreen () {
  const [ emailValue, setEmailValue ] = useState('')
  const isValidEmail = emailValidation(emailValue)

  console.log({isValidEmail, emailValue  })
  return (
    <Container>
        <InputComponent
          label="Your E-Mail"
          onChange={value => setEmailValue(value)}
          value={emailValue} />
        <UnderEmail> We will never spam you </UnderEmail>
          <>
            <CurrencyInfo label={'You give'} currencyIcon = {feautureTransactions.youGive.icon} amount ={feautureTransactions.youGive.amount}/>
            <ArrowIcon src={images.arrow.default} alt=".." />
            <CurrencyInfo label={'You get'} currencyIcon = {feautureTransactions.youGet.icon} amount ={feautureTransactions.youGet.amount}/>
            <FeeAmount>  Network fee:  {feautureTransactions.networkFee} </FeeAmount>
            <Adress> To adress: </Adress> 
            <AdressNumber> {feautureTransactions.toAddress} </AdressNumber>
          </>
      <Button
        disabled={!isValidEmail}
        onClick={() => {}}>{isValidEmail ? 'Confirm Exchange' : 'Enter a valid E-mail'}</Button>
    </Container>
  )
}

export default SecondScreen