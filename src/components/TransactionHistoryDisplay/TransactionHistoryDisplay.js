import React from 'react'
import {HistoryTransaction, StatusContainer, HistoryStatus} from './TransactionHistoryDisplayStyles'




function StatusRow ({ statusId, statusText }) {
  return (
    <StatusContainer>
      <HistoryStatus> Status: </HistoryStatus>
      <HistoryTransaction statusId={statusId}>
          {statusId === 'receiving' && "Receiving from bank" }
          {statusId === 'received' && "Receieved from bank"  } 
          {statusId === 'pending' && "Pending" }
          {statusId === 'pended' && "Done" }
          {statusId === 'error' && "Failed" }
      </HistoryTransaction>
    </StatusContainer>
  )
}

export default StatusRow