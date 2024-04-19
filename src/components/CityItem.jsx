import styles from "./CityItem.module.css";
function CityItem({ city }) {
  const { cityName, emoji, date } = city;
  return (
    <li className={styles.CityItem}>
      {/* <span className={styles.emoji}>{emoji}</span> */}
      <h3 cl></h3>
    </li>
  );
}

export default CityItem;
