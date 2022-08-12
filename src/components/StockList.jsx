import { useStocks } from '../context/StockState'
import StockItem from './StockItem'

const StockList = (props) => {
  const [stockState, stockDispatch] = useStocks();

  const populate = (stockState) => stockState.map((stock) => {
    <StockItem symbol={stock.symbol} />
  })


  return (
    <div>
      {stockState.map((stock) => {
        return <StockItem symbol={stock.symbol} />
      })}
    </div>
  )
}
export default StockList