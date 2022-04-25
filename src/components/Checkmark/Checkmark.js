import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import { colors } from '../../theme/colors'

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: pointer;
  width: ${rem('20px')};
  height: ${rem('20px')};
  background-color: ${props => props.checked ? colors.green : colors.white};
  border-radius: 50%;
  transition: 0.3s ease-in all; 
  margin-right: 20px;
`

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`

export const Label = styled.p`
  color: ${colors.darkGray};
  font-size: 24px;
`

function Checkmark ({ checked, label, onClick }) {
  return (
    <Container onClick={onClick}>
      <Circle checked={checked}>
        
      </Circle>
      <Label>{label}</Label>
    </Container>
  )
}

export default Checkmark