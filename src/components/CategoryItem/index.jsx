import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './CategoryItem.module.scss';

export const CategoryItem = ({
  image,
  text,
  btn = false,
  description = '',
}) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <li
      className={styles.item}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link>
        <img className={styles.itemImg} src={image} alt="item" />
        <p className={styles.itemText}>{text}</p>
        {btn && <button className={styles.itemBtn}>Заказать</button>}
        {isHovered && description.length > 0 && (
          <div className={styles.itemHover}>
            <img className={styles.itemHover__img} src={image} alt="item" />
            <p className={styles.itemHover__text}>{text}</p>
            <p className={styles.itemHover__des}>{description}</p>
          </div>
        )}
      </Link>
    </li>
  );
};
