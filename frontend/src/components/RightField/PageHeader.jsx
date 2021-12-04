import React from 'react'
import ShakerHands from '../ShakerHands';

function PageHeader() {
  return (
    <div id="page-header">
      <ShakerHands input="right-side" />
      <h1 class="notas-right-side">Notas fiscais</h1>
    </div>
  )
}

export default PageHeader;
