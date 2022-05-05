import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import { colors } from '../../theme/colors'
import images from '../../images'

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: pointer;
  width: ${rem('36px')};
  height: ${rem('36px')};
  background-color: ${props => props.checked ? colors.green : colors.white};
  //background-image: url({images.checkmarkIcon}) ;
  border-radius: ${rem('16px')};
  transition: 0.3s ease-in all; 
  margin-right: 20px;
`

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
`

export const Label = styled.p`
  color: ${colors.darkGray};
  font-size: 24px;
`


function Checkmark ({ checked, label, onClick, currencyIcon }) {
  return (
    <Container onClick={onClick}>
      <Circle checked={checked}>
        {currencyIcon && <img src={images.checkmarkIcon.default} alt=".." />}
      </Circle>
      <Label>{label}</Label>
    </Container>
  )
}

export default Checkmark