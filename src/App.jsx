import React from 'react'
import Header from './component/Navbar/Header'
import '@fortawesome/fontawesome-free/css/all.min.css';
import PriceInfo from './component/PriceInfo';
import TickerTable from './component/TickerTable';

const App = () => {
  return (
    <div>
    <Header/>
    <PriceInfo/>
    <TickerTable/>
    </div>
  )
}

export default App