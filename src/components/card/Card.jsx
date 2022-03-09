import pizza from '../../assets/img/pizza1.jpg'
import plus_off from '../../assets/img/plus-white.svg'

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
            <button>
               <img src={plus_off} alt="add" />
               <span>Добавить</span>
            </button>
         </div>
      </div>
   )
}

export default Card