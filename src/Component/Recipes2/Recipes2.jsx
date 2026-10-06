import { RecipesCard2 } from "./ui/RecipesCard2"
import styles from './ui/RecipesCard2.module.scss'
import last1 from '../../img/last1.jpg'
import last2 from '../../img/last2.jpg'
import last3 from '../../img/last3.jpg'
import last4 from '../../img/last4.jpg'
import last5 from '../../img/last5.jpg'
import last6 from '../../img/last6.jpg'
import last7 from '../../img/last7.jpg'
import last8 from '../../img/last8.jpg'
import like1 from '../../img/like1.svg'
import like2 from '../../img/like2.svg'

export const Recipes2 = () => {
  return (
    <div className={styles.recipes}>
      <h1>Try this delicious recipe <br />to make your day</h1>
      <RecipesCard2 like={like2} src={last1} title={'Mixed Tropical Fruit Salad with Superfood Boosts '}/>
      <RecipesCard2 like={like1} src={last2} title={'Big and Juicy Wagyu Beef Cheeseburger'}/>
      <RecipesCard2 like={like2} src={last3} title={'Healthy Japanese Fried Rice with Asparagus'}/>
      <RecipesCard2 like={like1} src={last4} title={'Cauliflower Walnut Vegetarian Taco Meat'}/>
      <RecipesCard2 like={like2} src={last5} title={'Rainbow Chicken Salad with Almond Honey Mustard Dressing'}/>
      <RecipesCard2 like={like1} src={last6} title={'Barbeque Spicy Sandwiches with Chips '}/>
      <RecipesCard2 like={like1} src={last7} title={'Firecracker Vegan Lettuce Wraps - Spicy! '}/>
      <RecipesCard2 like={like2} src={last8} title={'Chicken Ramen Soup with Mushroom '}/>
    </div>
  )
}
