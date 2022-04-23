import React, { useState, useEffect } from 'react'
import { Button } from '../../components/Button'
import { Container } from '../../components/Container'
import Input from '../../components/Input'

function FirstScreen () {
  const [ payValue, setPayValue ] = useState('')
  const [ isFormValid, setisFormValid ] = useState(false)
  // if (payValue.length > 5) alert('lol')
  console.log({ isFormValid, payValue })
  return (
    <Container>
      <Input
        label="You pay"
        onChange={value => setPayValue(value)}
        value={payValue} />
      <Button
        disabled={isFormValid}
        onClick={() => setisFormValid(!isFormValid)}>Exchange</Button>
    </Container>
  )
}

export default FirstScreen