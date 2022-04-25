import React, { useState, useEffect } from 'react'
import { Button } from '../../components/Button'
import { Container } from '../../components/Container'
import Input  from '../../components/Input'
import images from '../../images'
import Arrow from '../../components/arrowIcon'
import Checkmark from '../../components/Checkmark'
import Agreement from '../../components/Agreement'



function FirstScreen () {
  const [ payValue, setPayValue ] = useState('')
  const [ isFormValid, setisFormValid ] = useState(false)
  const [ isAgreement, setIsAgreement ] = useState(false)
  // if (payValue.length > 5) alert('lol')
  //console.log({ isFormValid, payValue })
  return (
    <Container>
      <Input
        currencyIcon={images.usdIcon}
        label="You pay"
        onChange={value => setPayValue(value)}
        value={payValue} />
      <Arrow/>
      {/* <img src={images.arrowIcon.default}/> */}
      <Input
        currencyIcon={images.btcIcon}
        label="You get"
        onChange={value => setPayValue(value)}
        value={payValue} />
      <Input
        label="To address"
        onChange={value => setPayValue(value)}
        value={payValue} />
      <Input
        currencyIcon={images.walletIcon}
        label="Your card Number"
        onChange={value => setPayValue(value)}
        value={payValue} />
      {/* <Agreement
        currencyIcon={images.emptyCheck}
        label="Agree with our" /> */}
      <Checkmark
        onClick={() => setIsAgreement(!isAgreement)}
        label='Ты пидор?'
        checked={isAgreement}
        />

      <Button
        disabled={isFormValid}
        onClick={() => setisFormValid(!isFormValid)}>Exchange</Button>
    </Container>
  )
}

export default FirstScreen