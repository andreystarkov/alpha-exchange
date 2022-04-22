import React from 'react'

import { Input } from './InputStyles'

function InputComponent ({ onChange, value }) {
  return <Input
    type="text"
    onChange={e => onChange(e.target.value)}
    value={value} />
}

export default InputComponent