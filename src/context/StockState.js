import { useReducer, useContext } from 'react'
import axios from 'axios'
import StockContext from './stockContext'
import stockReducer from './stockReducer'
import {
  GET_STOCKS,
  ADD_STOCK,
  DELETE_STOCK,
  CLEAR_STOCKS,
} from '../types'

// Custom hook to use stock context

export const useStocks = () => {
  const { state, dispatch } = useContext(StockContext)
  return [state, dispatch]
}

// action creators

// add stock
export const addStock = async (dispatch, stockForm) => {
  const { symbol, shares, date } = stockForm

  const lastestURL = {
    url: 'http://api.marketstack.com/v1/eod/latest',
    params: {
      access_key: 'c3bc7854d0374886632c5db4808b77dc',
      symbols: symbol,
    }
  }

  const pastURL = {
    url: `http://api.marketstack.com/v1/eod/${date}`,
    params: {
      access_key: 'c3bc7854d0374886632c5db4808b77dc',
      symbols: symbol,
    }
  }

  try {
    const latestPriceJSON = await axios(lastestURL)
    const pastPriceRawJSON = await axios(pastURL)

    const latestPrice = latestPriceJSON.data.data[0].close
    const pastPrice = pastPriceRawJSON.data.data[0].close
    dispatch({
      type: ADD_STOCK,
      payload: { latestPrice, pastPrice, pastPrice, date, shares, symbol }
    })
  } catch (err) {
    console.error(err);
  }
}


const StockState = (props) => {
  const initialState = [
    {
      symbol: 'AAPL',
      latestPrice: 100.01,
      pastPrice: 50.22,
      date: '2020-11-11'
    }
  ]

  const [state, dispatch] = useReducer(stockReducer, initialState);

  return (
    <StockContext.Provider
      value={{ state: state, dispatch }}
    >
      {props.children}
    </StockContext.Provider>
  );
};

export default StockState;