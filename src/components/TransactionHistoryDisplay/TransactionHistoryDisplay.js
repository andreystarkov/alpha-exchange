import React from 'react'
import {AssetInContainer, AssetFromContainer, HistoryStatusStyle, DateTimeStyle, StatusContainer,  ArrowIcon, Address, AddressNumber, AddressContainer, HistoryStatusText} from './TransactionHistoryDisplayStyles'
import CurrencyInfo from '../../components/CurrencyInfo'
import images from '../../images'

function AssetFrom ({dateTime}){
return (<AssetFromContainer> 
  <DateTimeStyle>{dateTime}</DateTimeStyle>
  <CurrencyInfo currencyIcon = {images.usdIcon} amount ={'50'}/>
  <ArrowIcon src={images.arrow.default} alt=".." />
</AssetFromContainer>)
}

function AssetIn ({txStatus}){
return (<AssetInContainer> 
  <HistoryStatusStyle>Status: <HistoryStatusText txStatus={txStatus}>{txStatus}</HistoryStatusText> </HistoryStatusStyle>
  <CurrencyInfo currencyIcon = {images.usdIcon} amount ={'50'}/>
</AssetInContainer>)
}

function AdressNumber ({wallet}){
return (<AddressContainer><Address> To address: </Address>
  <AddressNumber> {wallet} </AddressNumber>
  </AddressContainer>)
}

function TransactionHistoryDisplay (props) {
  console.log({ props })
  const date = new Date(props.dateTime);
  const address = props.address
  return (
    <StatusContainer>
        <AssetFrom
          dateTime={date.toISOString().split('.')[0].split('T').join(' ')}/>
        <AssetIn
          txStatus={ props.status }/>
        <AdressNumber
          wallet = { address.substring(0, 20) + "..." + address.substr(address.length - 3)}/> 
    </StatusContainer>
  )
}

export default TransactionHistoryDisplay