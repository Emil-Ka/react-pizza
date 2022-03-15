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

export const fetchCart = (url) => async (dispatch) => {
  dispatch(cartFetching())
  await axios.get(url)
    .then(res => dispatch(cartFetched(res.data)))
    .catch(() => cartFetchingError())
}

export const cartFetching = () => {
  return {
    type: 'CART_FETCHING'
  }
}

export const cartFetched = (cart) => {
  return {
    type: 'CART_FETCHED',
    payload: cart
  }
}

export const cartFetchingError = () => {
  return {
    type: 'CART_FETCHING_ERROR'
  }
}

export const cartUpdate = async (url, data) => {
  await axios.post(url, data)
  return {
    type: 'CART_UPDATE',
    payload: data
  }
}

export const setCategory = (categoryIndex) => {
  return {
    type: 'SET_CATEGORY',
    payload: categoryIndex
  }
}