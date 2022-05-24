import React, { useState, useEffect } from 'react'
import { Button } from '../../components/Button'
import { Container } from '../../components/Container'
import Input  from '../../components/Input'
import images from '../../images'
import Arrow from '../../components/arrowIcon'
import Checkmark from '../../components/Checkmark'
import {cardNumberValidation} from '../../Utils/cardNumberValidation'




function FirstScreen () {
  const [ payValue, setPayValue ] = useState('')
  // const [ isFormValid, setisFormValid ] = useState(false)
  const [ getValue, setGetValue ] = useState('')
  const [ toAddress, setToAddress ] = useState('')
  const [ cardNumber, setCardNumber ] = useState('')
  const [ isAgreement, setIsAgreement ] = useState('')
  
  // if (payValue.length > 5) alert('lol')
  //console.log({ isFormValid, payValue })


  const isValid = cardNumberValidation(cardNumber) 

 
  const isFormValid = isValid && isAgreement

  

  console.log({is: isValid})
  
  return (
    <Container>
      <Input
        currencyIcon={images.usdIcon}
        label="You pay"
        onChange={value => {
          setPayValue(value)
        }}
        value={payValue} />
      <Arrow/>
      {/* <img src={images.arrowIcon.default}/> */}
      <Input
        currencyIcon={images.btcIcon}
        label="You get"
        onChange={value => setGetValue(value)}
        value={getValue} />
      <Input
        label="To address"
        onChange={value => setToAddress(value)}
        value={toAddress} />
      <Input
        currencyIcon={images.walletIcon}
        label="Your card Number"
        onChange={value => setCardNumber(value)}
        value={cardNumber} />
        
      {/* <Agreement
        currencyIcon={images.emptyCheck}
        label="Agree with our" /> */}
      <Checkmark
        onClick={() => setIsAgreement(!isAgreement)}
        currencyIcon={images.checkmarkIcon} 
        label='Ты пидор?'
        LinkText = 'Да'
        checked={isAgreement}
        />

      <Button
        disabled={!isFormValid}
        onClick={() => {}}>Exchange</Button>
    </Container>
  )
}

export default FirstScreen

