import time from '../../../img/time.svg';
import food from '../../../img/food.svg';
import styles from './RecipesCard.module.scss';

const RecipesCard = ({ src, text, like }) => {
    return (
        <div className={styles.recipes}>
            <div className={styles.hidden}>
                <img src={src} alt="" />
                <img className={styles.like} src={like} alt="" />
            </div>
            <h2>{text}</h2>
            <div className={styles.flex}>
            <div className={styles.nav}><img className={styles.time} src={time} alt="" /> <p>30 Minutes</p></div>
            <div className={styles.nav}><img className={styles.time} src={food} alt="" /> <p>Snack</p></div>
            </div>
        </div>
    );
}

export default RecipesCard;
