import React from 'react'
import Header from './Header';
import PageHeader from './PageHeader';
import '../styles/MainContent.css'

function MainContent() {
  return (
    <div id="main-content">
      <Header />
      <hr style={{ backgroundColor: '#DFE2EB' }} />
      <PageHeader />
      <span className='span-notas-fiscais'>Visualize as notas fiscais que você tem</span>
    </div>
  )
}

export default MainContent;
