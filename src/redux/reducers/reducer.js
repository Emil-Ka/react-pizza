const initialState = {
  pizzas: [],
  filteredPizzas: [],
  pizzasLoadingStatus: 'idle',
  cart: [],
  cartLoadingStatus: 'idle',
  categoryIndex: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PIZZAS_FETCHING':
        return {
          ...state,
          pizzasLoadingStatus: 'loading'
        }
    case 'PIZZAS_FETCHED':
        return {
          ...state,
          pizzasLoadingStatus: 'idle',
          pizzas: action.payload
        }
    case 'PIZZAS_FETCHING_ERROR':
        return {
          ...state,
          pizzasLoadingStatus: 'error'
        }
    case 'CART_FETCHING':
      return {
        ...state,
        cartLoadingStatus: 'loading'
      }
    case 'CART_FETCHED':
      return {
        ...state,
        cartLoadingStatus: 'idle',
        cart: action.payload
      }
    case 'CART_FETCHING_ERROR':
      return {
        ...state,
        cartLoadingStatus: 'error'
      }
    case 'CART_UPDATE':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case 'SET_CATEGORY':
      return {
        ...state,
        categoryIndex: action.payload,
        filteredPizzas: state.pizzas
      }
  }
}

export default reducer