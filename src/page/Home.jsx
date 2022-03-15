import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'

import Card from '../components/Card'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import {fetchPizzas, fetchCart} from '../redux/actions/action'

const Home = () => {
  const PIZZAS_API = 'http://localhost:3001/pizzas'
  const CART_API = 'http://localhost:3001/cart'
  const dispatch = useDispatch()
  const pizzas = useSelector(state => state ? state.pizzas : [])
  // const categoryIndex = useSelector(state => state ? state.categoryIndex : 0)
  //const filteredPizzas = useSelector(state => state ? state.filteredPizzas : [])
  console.log(pizzas[0])

  useEffect(() => {
    dispatch(fetchPizzas(PIZZAS_API))
    dispatch(fetchCart(CART_API))
  }, [])

  return (
    <>
        <Header/>
        <div className="home">
          <div className="home__container">
              <div className="home__content-top">
                <Categories/>
                <Sort/>
              </div>
              <div className="home__content">
                <h1>Все пиццы</h1>
                <div className="home__cards cards">
                    {
                      pizzas.map((item, i) => (
                          <Card
                            key={item.id}
                            pizzas={pizzas[i]}/>
                      ))
                    }
                </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default Home