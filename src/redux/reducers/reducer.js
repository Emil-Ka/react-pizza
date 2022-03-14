const initialState = {
  pizzas: [],
  loadingStatus: 'idle'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PIZZAS_FETCHING':
        return {
          ...state,
          loadingStatus: 'loading'
        }
    case 'PIZZAS_FETCHED':
        return {
          ...state,
          loadingStatus: 'idle',
          pizzas: action.payload
        }
    case 'PIZZAS_FETCHING_ERROR':
        return {
          ...state,
          loadingStatus: 'error'
        }
  }
}

export default reducer