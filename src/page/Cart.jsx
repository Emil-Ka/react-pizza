import CartHeader from "../components/CartHeader"
import CartItem from '../components/cartItem'

import cartLogo from '../assets/img/cart-logo.svg'
import trashLogo from '../assets/img/trash.svg'
import arrow from '../assets/img/arrow-right.svg'

const Cart = () => {
  return (
    <>
      <CartHeader />
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
            <CartItem/>
            <CartItem/>
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