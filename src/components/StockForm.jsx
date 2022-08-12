import { useState } from 'react'
import { addStock, useStocks } from '../context/StockState'

const StockForm = (props) => {
  const [stockItem, setStockItem] = useState({
    symbol: null,
    shares: 1,
    date: null
  })

  const [stockState, stockDispatch] = useStocks()

  const { symbol, shares, date } = stockItem

  const onChange = (e) => {
    setStockItem({
      ...stockItem,
      [e.target.name]: e.target.value
    })
    console.log(typeof stockItem.date)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    addStock(stockDispatch, stockItem)
  }

  return (
    <div className="bg-gray-200">
      <form onSubmit={onSubmit}>
        <div className="form-item-container">
          <label htmlFor="symbol">Symbol: </label>
          <input type="text" name="symbol" onChange={onChange} />
        </div>
        <div className="form-item-container">
          <label htmlFor="shares">Number of Shares: </label>
          <input type="number" name="shares" onChange={onChange} />
        </div>
        <div className="form-item-container">
          <label htmlFor="date">Date Purchased: </label>
          <input type="date" name="date" onChange={onChange} />
        </div>
        <input type="submit" value='Submit' />
      </form>
    </div>
  )
}
export default StockForm