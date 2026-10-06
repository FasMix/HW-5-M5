import CategoriesCard from "./ui/CategoriesCard"
import card1 from '../../img/card1.svg'
import card2 from '../../img/card2.svg'
import card3 from '../../img/card3.svg'
import card4 from '../../img/card4.svg'
import card5 from '../../img/card5.svg'
import card6 from '../../img/card6.svg'

export const Category = () => {
  return (
    <div className='categories'>
        <h1>Categories</h1>
        <div className='card'>
        <CategoriesCard src={card1} name={'Breakfast'}/>
        <CategoriesCard src={card2} bgColor="#f0f0f0" name={'Vegan'}/>
        <CategoriesCard src={card3} name={'Meat'}/>
        <CategoriesCard src={card4} name={'Dessert'}/>
        <CategoriesCard src={card5} name={'Lunch'}/>
        <CategoriesCard src={card6} name={'Chocolate'}/>
        </div>
      </div>
  )
}
