import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/MainContent.css'

function BillMenu({ billInfo }) {


  console.log(billInfo, 'tablebody')


  return (
    <div>
      {
        billInfo.pedido.map(({ orderNumber, emissionDate, value, orderStatusBuyer }) => {
          return (
            <div key={orderNumber} className='container-bill-menu'>
              <div >{orderNumber}</div>
              <div >{billInfo.sacado[0].name}</div>
              <div>{billInfo.cedente[0].name}</div>
              <div>{emissionDate}</div>
              <div>{value}</div>
              <div>{orderStatusBuyer}</div>
              <button>
                Dados DO CEDENTE
              </button>
            </div>
          )
        })
      }
    </div>
  )
}

export default BillMenu;
