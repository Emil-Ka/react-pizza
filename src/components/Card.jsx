import classNames from 'classnames'

const Card = (pizzas) => {
   const {imageUrl, name, price, sizes, types} = pizzas.pizzas
   const doughLabel = ['тонкое', 'традиционное']
   const diameterLabel = ['26 см.', '30 см.', '40 см.']
   
   return (
      <div className="card">
         <img src={imageUrl} alt={name}/>
         <h2>{name}</h2>
         <div className="card__choice choice">
            <ul className="choice__dough dough">
               {
                  types.map((item, i) => (
                     <li className={`dough__item ${item ? null : 'dough__item--disabled'}`}>{doughLabel[i]}</li>
                  ))
               }
            </ul>
            <ul className="choice__diameter diameter">
               {
                  sizes.map((item, i) => (
                     <li className={`diameter__item ${item ? null : 'diameter__item--disabled'}`}>{diameterLabel[i]}</li>
                  ))
               }
            </ul>
         </div>
         <div className="card__total">
            <b>от {price} р.</b>
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