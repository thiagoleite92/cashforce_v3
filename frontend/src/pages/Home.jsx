import React from 'react'
import { MainContent, LeftBar } from '../components';
import '../components/styles/Home.css'

function Home() {
  return (
    <div id="home">
      <LeftBar />
      <MainContent />
    </div>
  )
}

export default Home;
