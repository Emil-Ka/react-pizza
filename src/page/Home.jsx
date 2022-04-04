import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import Card from '../components/Card'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import { fetchPizzas, fetchCart } from '../redux/actions/action'

const Home = () => {
  const pizzas = useSelector(state => {
    if (state) {
      switch (state.sortIndex) {
        case 0: //Сортировка по рейтингу
          return state.pizzas
            .filter(item => item.categories.includes(state.categoryIndex))
            .sort((a, b) => a.rating < b.rating ? 1 : -1)
        case 1: //Сортировка по цене
          return state.pizzas
            .filter(item => item.categories.includes(state.categoryIndex))
            .sort((a, b) => a.price > b.price ? 1 : -1)
        case 2: //Сортировка по алфавиту
          return state.pizzas
            .filter(item => item.categories.includes(state.categoryIndex))
            .sort((a, b) => a.name > b.name ? 1 : -1)
      }
    }
    return []
  })

  const categoriesItems = useSelector(state => state ? state.categoriesItems : [])
  const categoryIndex = useSelector(state => state ? state.categoryIndex : 0)

  return (
    <>
      <Header />
      <div className="home">
        <div className="home__container">
          <div className="home__content-top">
            <Categories />
            <Sort />
          </div>
          <div className="home__content">
            <h1>{categoriesItems[categoryIndex]} пиццы</h1>
            <div className="home__cards cards">
              {
                pizzas.map((item, i) => (
                  <Card
                    key={item.id}
                    pizzas={pizzas[i]} />
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