import React from 'react'
import '../styles/MainContent.css'

const formatDate = (emissionDate) => {
  const regexPatter = /[0-9]{4}-[0-9]{2}-[0-9]{2}/gm
  const date = emissionDate.match(regexPatter)[0].split('-').reverse().join('/');
 
  return date;
}


function BillMenu({ billInfo }) {


  return (
    <div>
      {
        billInfo.pedido.map(({ orderNumber, emissionDate, value, orderStatusBuyer }) => {
          return (
            <div key={orderNumber} className='container-bill-menu'>
              <div >{orderNumber}</div>
              <div >{billInfo.sacado[0].name}</div>
              <div>{billInfo.cedente[0].name}</div>
              <div>{formatDate(emissionDate)}</div>
              <div>{new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value)}</div>
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
