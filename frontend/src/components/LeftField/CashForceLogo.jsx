import React from 'react'
import logoCashForce from '../../assets/sider-logo.png'
import ShakerHands from '../ShakerHands';

function CashForceLogo() {
  return (
    <>
      <img src={logoCashForce} alt="logo" />
      <aside id="aside-leftbar" >
        <svg width="4" height="64" viewBox="0 0 4 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="4" height="64" rx="2" fill="#00AD8C" />
        </svg>
        <ShakerHands input='left-side' />
        <span className="notas-left-side">Notas fiscais</span>
      </aside>
    </>

  )
}

export default CashForceLogo;
