import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'
import { rem } from 'polished'

export const Button = styled.div`
  background-color: ${(props) => props.disabled ? colors.grey : colors.green};
  padding: ${rem('10px')};
  border-radius: ${rem('10px')};
  text-align: center;
  color: ${colors.white};
  font-size: ${rem('25px')};
  font-weight: 600;
`
