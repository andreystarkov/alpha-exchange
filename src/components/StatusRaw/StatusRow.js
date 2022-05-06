import React from 'react'
import {StatusText, StatusContainer, StatusCheckMark } from './StatusRowStyles'
import images from '../../images'



function StatusRow ({ statusId, statusText }) {
  return (
    <StatusContainer>
      <StatusCheckMark statusId={statusId}>
          {statusId === 'receiving' && <img src={images.dotIcon.default} alt=".." /> }
          {statusId === 'received' && <img src={images.checkmarkIcon.default} alt=".." /> } 
          {statusId === 'pending' && <img src={images.dotIcon.default} alt=".." /> }
          {statusId === 'pended' && <img src={images.checkmarkIcon.default} alt=".." /> }
          {statusId === 'ready' && <img src={images.checkmarkIcon.default} alt=".."/> }
          {statusId === 'error' && <img src={images.crossIcon.default} alt=".."/> }
      </StatusCheckMark>
      <StatusText>{statusText}</StatusText>
    </StatusContainer>
  )
}

export default StatusRow