import time from '../../../img/time.svg';
import food from '../../../img/food.svg';
import styles from './RecipesCard2.module.scss';

export const RecipesCard2 = ({ src, title, like }) => {
  return (
    <div className={styles.last}>
      <div className={styles.hidden}>
        <img src={src} alt="" className={styles.image} />
        <img className={styles.like} src={like} alt="" />
      </div>
      <h3>{title}</h3>
      <div className={styles.flex}>
        <div className={styles.nav}>
          <img className={styles.time} src={time} alt="" />
          <p>30 Minutes</p>
        </div>
        <div className={styles.nav}>
          <img className={styles.time} src={food} alt="" />
          <p>Snack</p>
        </div>
      </div>
    </div>
  );
};