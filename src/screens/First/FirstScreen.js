import React, { useState, useEffect } from 'react'
import { Button } from '../../components/Button'
import { Container } from '../../components/Container'
import Input from '../../components/Input'
import images from '../../images'

function FirstScreen () {
  const [ payValue, setPayValue ] = useState('')
  const [ isFormValid, setisFormValid ] = useState(false)
  // if (payValue.length > 5) alert('lol')
  //console.log({ isFormValid, payValue })
  return (
    <Container>
      <Input
        currencyIcon={images.usdIcon}
        label="You pay"
        onChange={value => setPayValue(value)}
        value={payValue} />
      <img src = {images.arrowImg}/>
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
        currencyIcon={images.walletImg}
        label="Your card Number"
        onChange={value => setPayValue(value)}
        value={payValue} />

      <Button
        disabled={isFormValid}
        onClick={() => setisFormValid(!isFormValid)}>Exchange</Button>
    </Container>
  )
}

export default FirstScreen