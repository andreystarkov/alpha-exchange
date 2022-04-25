import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'
import { rem } from 'polished'

export const Button = styled.div`
  background-color: ${(props) => props.disabled ? colors.grey : colors.green};
  padding: 13px 60px;
  border-radius: ${rem('10px')};
  text-align: center;
  outline: 0;
  border: 0;
  color: ${colors.white};
  font-size: ${rem('25px')};
  font-weight: 600;
  transition: 0.35s linear all;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`
