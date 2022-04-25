import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'
import { rem } from 'polished'

export const Container = styled.div`
  display: flex;
  width: ${rem('425px')};
  padding: ${rem('20px')};
  background-color: ${colors.lightGray};
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  position: relative;
`
