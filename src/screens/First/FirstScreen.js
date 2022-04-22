import React, { useState } from 'react'
import { Button } from '../../components/Button'
import { Container } from '../../components/Container'
import Input from '../../components/Input'

function FirstScreen () {
  const [ payValue, setPayValue ] = useState('')
  // if (payValue.length > 5) alert('lol')
  return (
    <Container>
      <Input onChange={value => setPayValue(value)} value={payValue} />
      <Button>Exchange</Button>
    </Container>
  )
}

export default FirstScreen