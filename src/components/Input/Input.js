import React from 'react'

import { Input, Container, Label, InputContainer } from './InputStyles'

function InputComponent ({ isNumeric,currencyIcon, onChange, value, label }) {
  return (
    
  <Container>
    {label && <Label>{label}</Label>}
    <InputContainer>
      {currencyIcon && <img src={currencyIcon.default} alt=".." />}
      <Input
          type="text"
          onChange={e => onChange(e.target.value)}
          value={value} />
          
    </InputContainer>
  </Container>
  
  )
}

export default InputComponent