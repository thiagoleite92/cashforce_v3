import React from 'react'
import '../styles/MainContent.css'

const formatDate = (emissionDate) => {
  const regexPattern = /[0-9]{4}-[0-9]{2}-[0-9]{2}/gm
  const date = emissionDate.match(regexPattern)[0].split('-').reverse().join('/');
 
  return date;
}

const formatCurrency = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })


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
              <div className="span-color">{formatCurrency.format(value)}</div>
              <div className="span-color">{orderStatusBuyer}</div>
              <button className='btn-cedente-info'>
                Dados do cedente
              </button>
            </div>
          )
        })
      }
    </div>
  )
}

export default BillMenu;
