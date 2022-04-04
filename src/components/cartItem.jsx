import minusBtn from '../assets/img/minus.svg'
import plusBtn from '../assets/img/plus.svg'
import removeBtn from '../assets/img/cross.svg'

const cartItem = ({imageUrl, doughLabel, diameterLabel, name, price, count}) => {
  console.log(imageUrl, doughLabel, diameterLabel, name, price)
  return (
    <div className="cart__cart-item cart-item">
      <div className="cart-item__desc">
        <img src={imageUrl} alt="pizza" />
        <div>
          <h2>{name}</h2>
          <p>{doughLabel} тесто, {diameterLabel}</p>
        </div>
      </div>
      <div className="cart-item__count">
        <img src={minusBtn} alt="minus" className="cart-item__minus" />
        <p>{count}</p>
        <img src={plusBtn} alt="plus" className="cart-item__plus" />
      </div>
      <p className="cart-item__price">{price} p.</p>
      <img src={removeBtn} alt="remove" className="cart-item__remove-btn" />
    </div>
  )
}

export default cartItem