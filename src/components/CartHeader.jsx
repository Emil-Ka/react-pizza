const CartHeader = () => {
   return (
      <header className="header">
         <div className="header__container">
            <div className="header__logo logo">
               <img src={logo} alt="logo"/>
               <div>
                  <a href="#">REACT PIZZA</a>
                  <p>Самая реактивная пицца</p>
               </div>
            </div>
         </div>
      </header>
   )
}

export default CartHeader