import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'

import Card from '../../components/Card'
import Header from '../../components/Header'
import Categories from '../../components/Categories'
import Sort from '../../components/Sort'
import {fetchPizzas} from '../../redux/actions/action'

const Home = () => {
  const _url = 'http://localhost:3001/pizzas/'
  const dispatch = useDispatch()
  const pizzas = useSelector(state => state ? state.pizzas : [])
  console.log(pizzas)

  useEffect(() => {
    dispatch(fetchPizzas(_url))
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