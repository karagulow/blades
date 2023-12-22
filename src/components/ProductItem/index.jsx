import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './ProductItem.module.scss';

export const ProductItem = ({ index, image, price, url, isFav = false }) => {
  const [favActive, setFavActive] = useState(isFav);

  return (
    <li key={index} className={styles.item}>
      <Link to={url}>
        <img className={styles.itemImg} src={image} alt="item" />
      </Link>
      <Link to={url}>
        <p className={styles.itemPrice}>{price} ₽</p>
      </Link>
      <div className={styles.itemFav}>
        <svg
          className={
            favActive ? styles.itemFav__active : styles.itemFav__inactive
          }
          onClick={() => {
            setFavActive(!favActive);
          }}
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.4813 6.48021C24.7283 8.72721 24.7283 12.3703 22.4813 14.6173L14.6234 22.4752C14.174 22.9246 13.4454 22.9246 12.996 22.4752L5.13813 14.6173C2.89113 12.3703 2.89113 8.72721 5.13813 6.48021C6.92449 4.69385 9.08074 4.14688 11.2565 5.20852C12.12 5.62989 13.2523 6.48021 13.8097 7.59095C14.3671 6.48021 15.4994 5.62989 16.363 5.20852C18.5387 4.14688 20.6949 4.69385 22.4813 6.48021Z"
            stroke="#01C5BA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </li>
  );
};
