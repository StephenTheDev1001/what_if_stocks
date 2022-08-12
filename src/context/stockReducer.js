import {
  GET_STOCKS,
  ADD_STOCK,
  DELETE_STOCK,
  CLEAR_STOCKS,
} from '../types'

const stockReducer = (state, action) => {
  switch (action.type) {
    case ADD_STOCK:
      return ([
        ...state,
        action.payload
      ])
    default:
      throw new Error(`Unsupported type of: ${action.type}`)
  }
}

export default stockReducer