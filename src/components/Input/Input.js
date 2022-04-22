import React from 'react'

import { Input, Label } from './InputStyles'

function InputComponent ({ onChange, value, label }) {
  return (
  <div>
    {label && <Label>{label}</Label>}
    <Input
        type="text"
        onChange={e => onChange(e.target.value)}
        value={value} />
  </div>
  )
}

export default InputComponent