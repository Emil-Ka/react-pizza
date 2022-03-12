import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'

import Card from '../../components/Card'
import Header from '../../components/Header'
import Categories from '../../components/Categories'
import Sort from '../../components/Sort'

const Home = () => {
   const _url = 'http://localhost:3001/pizzas'
   const dispatch = useDispatch()
   const store = useSelector(state => state)
   const [pizzas, setPizzas] = useState([])

   useEffect(async () => {
      await axios.get(_url)
         .then(res => setPizzas(res.data))
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