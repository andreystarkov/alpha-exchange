import React, { useState } from 'react'
import { Button } from '../../components/Button'
import { Container } from '../../components/Container'
import Input from '../../components/Input'
import images from '../../images'
import styled from 'styled-components'
import CurrencyInfo from '../../components/CurrencyInfo'



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

function SecondScreen () {
  const [ payValue, setPayValue ] = useState('')
  const [ isFormValid, setisFormValid ] = useState(false)
  // if (payValue.length > 5) alert('lol'§)

  console.log({ })
  return (
    <Container>
        <Input
          label="Your E-Mail"
          onChange={value => setPayValue(value)}
          value={payValue} />
        <UnderEmail> We will never spam you </UnderEmail>
        <CurrencyInfo label={'You take'} currencyIcon = {images.usdIcon} amount ={'50'}/>
        <ArrowIcon src={images.arrow.default} alt=".." />
        <CurrencyInfo label={'You get'} currencyIcon = {images.usdIcon} amount ={'0.0012'}/>
        <FeeAmount>  Network fee:  0.000023 </FeeAmount>
        <Adress> To adress: </Adress> 
        <AdressNumber> 3BBGhNBNNZA2tpjvpusjq54895...szDjD </AdressNumber> 
      <Button
        disabled={isFormValid}
        onClick={() => setisFormValid(!isFormValid)}>Confirm Exchange</Button>
    </Container>
  )
}

export default SecondScreen