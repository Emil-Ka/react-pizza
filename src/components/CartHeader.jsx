import logo from './../assets/img/logo.svg'

import { Link } from 'react-router-dom'

const CartHeader = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo logo">
          <img src={logo} alt="logo" />
          <div>
            <Link to="/">REACT PIZZA</Link>
            <p>Самая реактивная пицца</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default CartHeader