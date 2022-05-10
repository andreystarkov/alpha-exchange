import React from 'react'

import { Input, Label, InputContainer } from './AgreementStyles'

function AgreementComponent({ currencyIcon, label }) {
    return (
        <div>
            {currencyIcon && <img src={currencyIcon.default} alt=".." />}
            {label && <Label>{label}</Label>}
        </div>
    )
}

function InputComponent({ currencyIcon, onChange, value, label }) {
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


export default AgreementComponent