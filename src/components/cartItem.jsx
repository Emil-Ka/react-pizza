import minusBtn from '../assets/img/minus.svg'
import plusBtn from '../assets/img/plus.svg'
import removeBtn from '../assets/img/cross.svg'

const cartItem = () => {
  return (
    <div className="cart__cart-item cart-item">
      <div className="cart-item__desc">
        <img src="https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg" alt="pizza" />
        <div>
          <h2>Сырный цеплёнок</h2>
          <p>тонкое тесто, 26 см.</p>
        </div>
      </div>
      <div className="cart-item__count">
        <img src={minusBtn} alt="minus" className="cart-item__minus" />
        <p>2</p>
        <img src={plusBtn} alt="plus" className="cart-item__plus" />
      </div>
      <p className="cart-item__price">770 p.</p>
      <img src={removeBtn} alt="remove" className="cart-item__remove-btn" />
    </div>
  )
}

export default cartItem