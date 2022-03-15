import logo from './../assets/img/logo.svg'
import cart from './../assets/img/cart.svg'

import {useSelector} from 'react-redux'

const Header = () => {
  const totalPrice = useSelector(state => {
    if (state) {
      let total = 0
      state.cart.forEach(item => {
        total += item.price
      })
      return total
    } else {
      return []
    }
  })

  const cartItemsCount = useSelector(state => state ? state.cart.length : ' ')

  return (
    <header className="header">
        <div className="header__container">
          <div className="header__logo logo">
              <img src={logo} alt="logo"/>
              <div>
                <a href="#">REACT PIZZA</a>
                <p>самая вкусная пицца во вселенной</p>
              </div>
          </div>
          <a href="#" className="header__btn">
              <span className="header__price">{totalPrice} р.</span>
              <div className="header__line"></div>
              <img src={cart} alt="cart"/>
              <span>{cartItemsCount}</span>
          </a>
        </div>
    </header>
  )
}

export default Header