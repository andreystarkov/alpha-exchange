import React, { useState, useEffect } from 'react'
import { Rings } from  'react-loader-spinner'

import { Button } from '../../components/Button'
import { Container } from '../../components/Container'
import styled from 'styled-components'
import { colors } from '../../theme/colors'
import StatusRow  from '../../components/StatusRaw'

const HeaderText = styled.div`
  font-size: 28px;
  color: ${colors.darkGray};
  font-weight: 600;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content:left
`
const TopContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const MiddleContainer = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 55px;
  gap: 0px;
`





function ThirdScreen () {
  const [ payValue, setPayValue ] = useState('')
  const [ isFormValid, setisFormValid ] = useState(false)

  // if (payValue.length > 5) alert('lol')
  return (
    <Container>
      <HeaderText>Your exchange in progress</HeaderText>
      <TopContainer>
        <Rings color="#D10057" height={150} width={150}/>
      </TopContainer>
      <MiddleContainer>
        <StatusRow statusId={'received'} statusText='Recieved funds from bank' />
        <StatusRow statusId={'pending'} statusText='Transaction is pending' />
        <StatusRow statusId={'error'} statusText='Done' />
      </MiddleContainer>
      <Button
        disabled={isFormValid}
        onClick={() => setisFormValid(!isFormValid)}>To your control panel</Button>
    </Container>
  )
}

export default ThirdScreen