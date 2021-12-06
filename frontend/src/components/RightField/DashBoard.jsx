import React from 'react'
import TableBody from './TableBody'

function DashBoard() {
  return (
    <table>
      <thead>
        <tr>
          <th>NOTA FISCAL</th>
          <th>SACADO</th>
          <th>CEDENTE</th>
          <th>EMISSÃO</th>
          <th>VALOR</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <TableBody />
    </table>
  )
}

export default DashBoard;
