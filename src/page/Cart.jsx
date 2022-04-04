import { useSelector, useDispatch } from "react-redux"

import CartHeader from "../components/CartHeader"
import CartItem from '../components/cartItem'

import cartLogo from '../assets/img/cart-logo.svg'
import trashLogo from '../assets/img/trash.svg'
import arrow from '../assets/img/arrow-right.svg'

const Cart = () => {
  const cart = useSelector(state => state ? state.cart : [])

  const calcCount = (arr, _id, doughLabel, diameterLabel) => {
    let count = 0
    arr.forEach(item => {
      if (item._id === _id && item.doughLabel === doughLabel && item.diameterLabel === diameterLabel) {
        count++
      }
    })
    return count
  }

  const cartWithoutRepeats = []

  for (let i = 0; i < cart.length; i++) {
    if (i === 0) {
      cartWithoutRepeats.push(cart[i])
      continue
    }

    let repeats = 0

    for (let j = 0; j < cartWithoutRepeats.length; j++) {
      if (JSON.stringify(cart[i]) === JSON.stringify(cartWithoutRepeats[j])) {
        repeats++
      }
    }

    if (!repeats) {
      cartWithoutRepeats.push(cart[i])
    }
  }
  
  return (
    <>
      <CartHeader/>
      <div className="cart">
        <div className="cart__container">
          <div className="cart__top">
            <div>
              <img src={cartLogo} alt="cart-logo" className="cart__logo" />
              <h1 className="cart__title">Корзина</h1>
            </div>
            <div>
              <img src={trashLogo} alt="trash-logo" className="cart__trash" />
              <p className="cart__remove">Очистить корзину</p>
            </div>
          </div>
          <div className="cart__content">
            {
              cartWithoutRepeats.map(item => {
                return (
                  <CartItem
                    imageUrl={item.imageUrl}
                    name={item.name}
                    price={item.price}
                    doughLabel={item.doughLabel}
                    diameterLabel={item.diameterLabel}
                    key={item.id}
                    count={calcCount(cart, item._id, item.doughLabel, item.diameterLabel)}/>
                )
              })
            }
          </div>
          <div className="cart__total">
            <div>
              <p>Всего пицц: <span className="--fat">3 шт.</span></p>
              <p>Сумма заказа: <span className="--fat --orange">900 р.</span></p>
            </div>
            <div>
              <a href="#" className="cart__back">
                <img src={arrow} alt="back" />
                <span>Вернуться назад</span>
              </a>
              <button className="cart__pay-btn">
                <span>Оплатить сейчас</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart