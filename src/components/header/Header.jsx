import logo from '../../assets/img/logo.svg'
import cart from '../../assets/img/cart.svg'

const Header = () => {
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
            <button className="header__btn">
               <span className="header__price">520 р.</span>
               <div className="header__line"></div>
               <img src={cart} alt="cart"/>
               <span>3</span>
            </button>
         </div>
      </header>
   )
}

export default Header