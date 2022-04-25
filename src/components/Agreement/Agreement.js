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

export default AgreementComponent