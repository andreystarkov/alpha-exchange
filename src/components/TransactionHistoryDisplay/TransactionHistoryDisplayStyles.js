import styled from 'styled-components'
import { colors } from '../../theme/colors'

export const ArrowIcon = styled.img `
  height: 30px;
  width: 50px;
  margin-top: 7px;
  transform: rotate(270deg);
  top: 20px;
  right: 20px;
  position: absolute;  
`

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 380px;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 10px;
`

export const CurrencyResult = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.white};
  font-size: 16px;
  color: ${colors.darkGray};
  font-weight: 500;
  align-items: left;
`

export const Address = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: rgba(134, 134, 134, 1);
  letter-spacing: -0.011em;
  margin-top: 5px;
  margin-bottom: 10px;
  margin-right: 5px;
`
export const Link = styled.a`
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  color: rgba(78, 77, 77, 1);
  letter-spacing: -0.011em;
  margin-top: 5px;
  margin-bottom: 10px;
`
export const AssetFromContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  position: relative;
  margin-left: 15px;
`
export const AssetInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`
export const DateTimeStyle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.darkGray};
`
export const HistoryStatusStyle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: 500;
  color: ${colors.darkGray};
`
export const AddressContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 25px;
  width: 340px;
  margin-left: 15px;
`
export const HistoryStatusText = styled.div`  
  margin-left: 5px;
  color: ${(props) => {
    console.log({ ...props })
    if (props.txStatus === 'Received' ) return colors.darkGray
    if (props.txStatus === 'Pended' ) return colors.darkGray
    if (props.txStatus === 'Success' ) return colors.green
    if (props.txStatus === 'Receiving' ) return colors.darkGray
    if (props.txStatus === 'Pending' ) return colors.darkGray
    if (props.txStatus === 'Error' ) return colors.redAlert
  }};
`