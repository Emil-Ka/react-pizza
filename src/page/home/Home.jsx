import sortSVG from '../../assets/img/sort.svg'

import Card from '../../components/card/Card'

const Home = () => {
   return (
      <div className="home">
         <div className="home__container">
            <div className="home__content-top">
               <ul className="home__categories categories">
                  <li className="categories__item categories__item--active">Все</li>
                  <li className="categories__item">Мясные</li>
                  <li className="categories__item">Вегетарианская</li>
                  <li className="categories__item">Гриль</li>
                  <li className="categories__item">Острые</li>
                  <li className="categories__item">Закрытые</li>
               </ul>
               <div className="sort">
                  <div className="sort__label">
                     <img src={sortSVG} alt="sort"/>
                     <b>Сортировка по:</b>
                     <span>популярности</span>
                  </div>
                  <div className="sort__popup">
                     <ul>
                        <li className="sort__item sort__item--active">по популярности</li>
                        <li className="sort__item">по цене</li>
                        <li className="sort__item">по алфавиту</li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="home__content">
               <h1>Все пиццы</h1>
               <div className="home__cards cards">
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home