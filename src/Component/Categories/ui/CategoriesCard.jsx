import styles from './CategoriesCard.module.scss';

const CategoriesCard = ({ src, name }) => {
    return (
        <div className={styles.recipes}>
            <img src={src} alt="" />
            <h3>{name}</h3>
        </div>
    );
}

export default CategoriesCard;
