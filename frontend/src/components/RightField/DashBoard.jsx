import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BillMenu from './BillMenu'
import '../styles/MainContent.css'



function DashBoard() {

  const [billInfo, setBillInfo] = useState([]);
  const [loadingInfo, setLoadingInfo] = useState(true);

  useEffect(() => {
    const fetchBillInfo = async () => {
      const endPoint = 'http://localhost:3001/bills/1'
      try {
        const { data } = await axios.get(endPoint);
        console.log(data);
        setBillInfo(data);
        setLoadingInfo(false);
      } catch (error) {
        console.log(error)
      }
    }
    setTimeout(() => fetchBillInfo(), 1500); //setTimeOut para simular uma API mais real
  }, []);

  return (
    <>
      <div className="container-bill-header">
        <div>NOTA FISCAL</div>
        <div>SACADO</div>
        <div>CEDENTE</div>
        <div>EMISSÃO</div>
        <div>VALOR</div>
        <div>STATUS</div>
      </div>
      {
        loadingInfo
          ? <span>Carregando informação</span>
          : <BillMenu billInfo={billInfo} />
      }
    </>
  );
};

export default DashBoard;
