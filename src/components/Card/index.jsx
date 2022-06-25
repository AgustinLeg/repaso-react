import styles from "./card.module.css";

const Card = () => {
  console.log(styles);

  return <h1 className={styles.titleRed}>Card</h1>;
};

export default Card;
