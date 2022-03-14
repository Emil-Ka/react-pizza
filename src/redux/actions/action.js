import axios from 'axios'

export const fetchPizzas = (url) => async (dispatch) => {
  dispatch(pizzasFetching())
  await axios.get(url)
    .then(res => dispatch(pizzasFetched(res.data)))
    .catch(() => pizzasFetchingError())
}

export const pizzasFetching = () => {
  return {
    type: 'PIZZAS_FETCHING'
  }
}

export const pizzasFetched = (pizzas) => {
  return {
    type: 'PIZZAS_FETCHED',
    payload: pizzas
  }
}

export const pizzasFetchingError = () => {
  return {
    type: 'PIZZAS_FETCHING_ERROR'
  }
}