import React from 'react'

import { Label, AmountInfo, Amount, Container} from './CurrencyInfoStyles'

function CurrencyInfoComponent ({ label, currencyIcon, amount}) {
  return (
      <Container>
        {label && <Label>{label}</Label>}
         <AmountInfo>
            {currencyIcon && <img src={currencyIcon.default} alt=".." />}
            {amount && <Amount>{amount}</Amount>}
         </AmountInfo>
      </Container>
  )
}

export default CurrencyInfoComponent