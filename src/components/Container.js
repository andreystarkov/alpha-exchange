import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'
import { rem } from 'polished'

export const Container = styled.div`
  display: flex;
  width: ${rem('375px')};
  padding: ${rem('50px')};
  padding-top: 40px;
  background-color: ${colors.lightGray};
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  border-radius: 15px;
`
