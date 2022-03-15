import {useState, useRef, useEffect} from 'react'

import sortSVG from '../assets/img/sort.svg'

const Sort = () => {
  const [visiblePopup, setVisiblePopup] = useState(false)
  const [activeItem, setActiveItem] = useState(0)
  const sortRef = useRef()
  const sortItems = ['популярности', 'цене', 'алфавиту']

  const changeVisiblePopup = () => {
    setVisiblePopup(prev => !prev)
  }

  const closePopupOutside = (e) => {
    if (!e.path.includes(sortRef.current)) {
        setVisiblePopup(false)
    }
  }

  const changeActiveItem = (index) => {
    setActiveItem(index)
    setVisiblePopup(false)
  }

  useEffect(() => {
    document.querySelector('html').addEventListener('click', closePopupOutside)
  }, [])

  return (
    <div className="sort" ref={sortRef}>
        <div className="sort__label">
          <img className={visiblePopup ? 'sort__icon--active' : 'sort__icon'} src={sortSVG} alt="sort"/>
          <b>Сортировка по:</b>
          <span onClick={changeVisiblePopup}>{sortItems[activeItem]}</span>
        </div>
        {
          visiblePopup ?
          <div className="sort__popup">
          <ul>
              {
                sortItems.map((item, i) => (
                    <li 
                      className={`sort__item ${activeItem === i ? 'sort__item--active' : null}`}
                      key={i}
                      onClick={() => changeActiveItem(i)}>
                      по {item}
                    </li>
                ))
              }
          </ul>
        </div> : null
        }
    </div>
  )
}

export default Sort