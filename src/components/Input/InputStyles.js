import styled from 'styled-components'
import { colors } from '../../theme/colors'

export const Container = styled.div`
  
`

export const Input = styled.input`
  background-color: ${colors.white};
  color: #111;
  width: 370px;
  outline: 0;
  border: 0;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 25px;
`

export const Label = styled.p`
  margin-bottom: 10px;
  color: ${colors.darkGray};
  font-size: 24px;
`

export const InputContainer = styled.div`
  display: block;
`