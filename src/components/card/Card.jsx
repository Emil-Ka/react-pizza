import pizza from '../../assets/img/pizza1.jpg'
import plus_off from '../../assets/img/plus-white.svg'
import plus_on from '../../assets/img/plus-orange.svg'

const Card = () => {
   return (
      <div className="card">
         <img src={pizza} alt="pizza1"/>
         <h2>Чизбургер-пицца</h2>
         <div className="card__choice choice">
            <ul className="choice__dough dough">
               <li className="dough__item dough__item--active">тонкое</li>
               <li className="dough__item">традиционное</li>
            </ul>
            <ul className="choice__diameter diameter">
               <li className="diameter__item diameter__item--active">26 см.</li>
               <li className="diameter__item">30 см.</li>
               <li className="diameter__item">40 см.</li>
            </ul>
         </div>
         <div className="card__total">
            <b>от 395 р.</b>
            <button className="btn-add">
               <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"/>
               </svg>
               <span>Добавить</span>
               <div className="btn-count">
                  <span>2</span>
               </div>
            </button>
         </div>
      </div>
   )
}

export default Card