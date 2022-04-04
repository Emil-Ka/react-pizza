import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'

import {fetchPizzas, fetchCart} from '../redux/actions/action'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Home from '../page/Home'
import Cart from '../page/Cart'

const App = () => {
  const PIZZAS_API = 'http://localhost:3001/pizzas'
  const CART_API = 'http://localhost:3001/cart'
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchPizzas(PIZZAS_API))
    dispatch(fetchCart(CART_API))
  }, [])

  return (
    <Router>
      <Layout>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  )
}

export default App
