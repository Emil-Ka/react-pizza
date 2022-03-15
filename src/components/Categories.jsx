import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {setCategory} from '../redux/actions/action'

const Categories = () => {
  const dispatch = useDispatch()
  const activeCategoryIndex = useSelector(state => state ? state.categoryIndex : null)
  const categoriesItems = useSelector(state => state ? state.categoriesItems : [])

  return (
    <ul className="home__categories categories">
        {
          categoriesItems.map((item, i) => (
              <li 
                className={`${activeCategoryIndex === i ? 'categories__item--active' : null} categories__item`}
                key={i}
                onClick={() => dispatch(setCategory(i))}>
                {item}
              </li>
          ))
        }
    </ul>
  )
}

export default Categories