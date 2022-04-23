import React from 'react'

import { Input, Label, InputContainer } from './InputStyles'

function InputComponent ({ currencyIcon, onChange, value, label }) {
  return (
  <div>
    {label && <Label>{label}</Label>}
    <InputContainer>
      {currencyIcon && <img src={currencyIcon.default} alt=".." />}
      <Input
          type="text"
          onChange={e => onChange(e.target.value)}
          value={value} />
    </InputContainer>
  </div>
  )
}

export default InputComponent