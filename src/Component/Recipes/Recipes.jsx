import card2_1 from '../../img/card2)1.png'
import card2_2 from '../../img/card2)2.png'
import card2_3 from '../../img/card2)3.png'
import card2_4 from '../../img/card2)4.png'
import card2_5 from '../../img/card2)5.png'
import card2_6 from '../../img/card2)6.png'
import card2_7 from '../../img/card2)7.png'
import card2_8 from '../../img/card2)8.png'
import card2_9 from '../../img/card2)9.png'
import RecipesCard from './ui/RecipesCard'
import like1 from '../../img/like1.svg'
import like2 from '../../img/like2.svg'

export const Recipes = () => {
  return (
    <div className="recipes">
        <h1>Simple and tasty recipes</h1>
        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqut enim ad minim </p>
        <div className="flex mt">
        <RecipesCard like={like2} src={card2_1} text={'Big and Juicy Wagyu Beef Cheeseburger'}/>
        <RecipesCard like={like1} src={card2_2} text={'Fresh Lime Roasted Salmon with Ginger Sauce '}/>
        <RecipesCard like={like1} src={card2_3} text={'Strawberry Oatmeal Pancake with Honey Syrup'}/>
        </div>
        <div className="flex">
        <RecipesCard like={like2} src={card2_4} text={'Fresh and Healthy Mixed Mayonnaise Salad'}/>
        <RecipesCard like={like1} src={card2_5} text={'Chicken Meatballs with Cream Cheese'}/>
        <img className='big' src={card2_6} alt=""/>
        </div>
        <div className="flex">
        <RecipesCard like={like2} src={card2_7} text={'Fruity Pancake with Orange & Blueberry'}/>
        <RecipesCard like={like1} src={card2_8} text={'The Best Easy One Pot Chicken and Rice'}/>
        <RecipesCard like={like1} src={card2_9} text={'The Creamiest Creamy Chicken and Bacon Pasta'}/>
        </div>
      </div>
  )
}
