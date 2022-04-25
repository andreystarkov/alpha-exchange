import styled from 'styled-components'
import { colors } from '../../theme/colors'

export const StatusText = styled.p`
  color: ${colors.darkGray};
  font-size: 20px;
  margin-bottom: 12px;
  margin-top: 12px;
`

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`

export const StatusCheckMark = styled.div`
    background-color: ${(props) => {
      if (props.statusId === 'received' ) return colors.green
      if (props.statusId === 'pended' ) return colors.green
      if (props.statusId === 'ready' ) return colors.green
      if (props.statusId === 'receiving' ) return colors.grey
      if (props.statusId === 'pending' ) return colors.grey
      if (props.statusId === 'error' ) return colors.redAlert
      return colors.grey
    }};
    margin-right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s linear all;
    > img {
      width: 20px;
      height: 20px;
    }
`

export const Circle = styled.div`
    width: 40px;
    height: 40px;
    background-color: ${colors.grey};
    border-radius: 16px; 
    outline 

`