import {useState} from 'react'

const Categories = () => {
   const categoriesItems = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
   const [activeItem, setActiveItem] = useState(0)

   const toggleActiveItem = (index) => {
      setActiveItem(prev => index)
   }

   return (
      <ul className="home__categories categories">
         {
            categoriesItems.map((item, i) => (
               <li 
                  className={`${activeItem === i ? 'categories__item--active' : null} categories__item`}
                  key={i}
                  onClick={() => toggleActiveItem(i)}>
                  {item}
               </li>
            ))
         }
      </ul>
   )
}

export default Categories