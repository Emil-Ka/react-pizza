import classNames from 'classnames'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

import { cartUpdate } from '../redux/actions/action'

const Card = (pizzas) => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state ? state.cart : [])

  const [doughIndex, setDoughIndex] = useState(null)
  const [diameterIndex, setDiameterIndex] = useState(null)

  const { imageUrl, name, price, sizes, types, id } = pizzas.pizzas
  const doughLabel = ['тонкое', 'традиционное']
  const diameterLabel = ['26 см.', '30 см.', '40 см.']
  const CART_API = 'http://localhost:3001/cart/'

  let isItemInCart = 0
  cart.forEach(item => {
    if (item._id === id) {
      isItemInCart++
    }
  })
  const classButton = isItemInCart ? 'btn-added' : 'btn-add'

  console.log(cart)

  const onChangeDough = (index) => {
    setDoughIndex(prev => {
      if (prev === index) {
        return null
      } else {
        return index
      }
    })
  }

  const onChangeDiameter = (index) => {
    setDiameterIndex(prev => {
      if (prev === index) {
        return null
      } else {
        return index
      }
    })
  }

  const onAddCartItem = async (e) => {
    if (diameterIndex !== null && doughIndex !== null) {
      e.preventDefault()
      const newCartItem = {
        id: uuidv4(),
        imageUrl,
        name,
        price,
        doughLabel: doughLabel[doughIndex],
        diameterLabel: diameterLabel[diameterIndex],
        _id: id
      }

      dispatch(cartUpdate(CART_API, newCartItem))

      setDiameterIndex(null)
      setDoughIndex(null)
    }
  }

  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <div className="card__choice choice">
        <ul className="choice__dough dough">
          {
            types.map((item, i) => (
              <li
                key={i}
                className={`dough__item ${item ? null : 'dough__item--disabled'} ${i === doughIndex ? 'dough__item--active' : null}`}
                disabled={!item}
                onClick={() => {
                  item && onChangeDough(i)
                }}>
                {doughLabel[i]}
              </li>
            ))
          }
        </ul>
        <ul className="choice__diameter diameter">
          {
            sizes.map((item, i) => (
              <li
                key={i}
                className={`diameter__item ${item ? null : 'diameter__item--disabled'} ${i === diameterIndex ? 'diameter__item--active' : null}`}
                onClick={() => {
                  item && onChangeDiameter(i)
                }}>
                {diameterLabel[i]}
              </li>
            ))
          }
        </ul>
      </div>
      <div className="card__total">
        <b>от {price} р.</b>
        <button type="button" onClick={(e) => onAddCartItem(e)} className={classButton}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white" />
          </svg>
          <span>Добавить</span>
          <div className="btn-count">
            <span>{isItemInCart}</span>
          </div>
        </button>
      </div>
    </div>
  )
}
export default Card