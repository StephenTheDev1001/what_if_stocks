import './App.css';
import StockForm from './components/StockForm'
import { useState } from 'react'
import axios from 'axios'
import StockState from './context/StockState';
import StockList from './components/StockList';



const App = () => {

  return (
    <StockState>
      <div className="App">
        <StockForm />
        <StockList />
      </div>
    </StockState>
  );
}

export default App;