import React, { useState} from 'react'
import { Container } from '../../components/Container'
import styled from 'styled-components'
import { colors } from '../../theme/colors'
import TransactionHistoryDisplay  from '../../components/TransactionHistoryDisplay'
import { transactions } from './TransactionsData'

const HeaderText = styled.div`
  font-size: 28px;
  color: ${colors.darkGray};
  font-weight: 600;
  margin-bottom: 35px;
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content:left
`
const TansactionDisplayContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: raw;
  width: 380px;
  hight: 120px;
  background-color: ${colors.white};
  margin-bottom: 25px;
  border: 1px  solid  ${colors.grey};
  border-radius: 10px;
`

function FourthScreen () {
  const [ payValue, setPayValue ] = useState('')
  
  return (
    <Container>
      <HeaderText>Your transactions</HeaderText>
      {transactions.map((e, i) => (
        <TansactionDisplayContainer>
          <TransactionHistoryDisplay {...e} />
        </TansactionDisplayContainer>
      ))}
    </Container>
  )
}



export default FourthScreen