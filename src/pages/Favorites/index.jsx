import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import styles from './Favorites.module.scss';
import favoritesList from '../../assets/data/favorites.json';
import { ProductItem } from '../../components/ProductItem';

export const Favorites = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.favorites}>
      <div
        className={styles.favoritesBack}
        onClick={() => {
          navigate(-1);
          window.scrollTo(0, 0);
        }}
      >
        <svg
          width="10"
          height="17"
          viewBox="0 0 10 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.75721 6.3791C4.58564 7.55067 4.58564 9.45016 5.7572 10.6217L9.09103 13.9556C9.59304 14.4576 9.59303 15.2715 9.09101 15.7735C8.58901 16.2755 7.7751 16.2755 7.2731 15.7735L2.12132 10.6217C0.949747 9.45016 0.949748 7.55066 2.12132 6.37909L7.27308 1.22733C7.77509 0.725321 8.58901 0.725321 9.09102 1.22733C9.59304 1.72935 9.59304 2.54327 9.09103 3.04528L5.75721 6.3791Z"
            fill="white"
          />
        </svg>
        <p className={styles.favoritesBack__text}>Назад</p>
      </div>
      <h3 className={styles.favoritesTitle}>Избранное</h3>
      {favoritesList.length < 1 ? (
        <div className={styles.favoritesBlock}>
          <h6 className={styles.favoritesBlock__title}>
            В избранном пока пусто
          </h6>
          <p className={styles.favoritesBlock__text}>
            Сохраняйте товары, которые понравились, чтобы они были рядом
          </p>
          <Link to="/" className={styles.favoritesBlock__btn}>
            Перейти на главную
          </Link>
        </div>
      ) : (
        <div className={styles.favoritesBlock}>
          <label className={styles.favoritesBlock__search}>
            <input
              className={styles.favoritesBlock__searchInput}
              type="text"
              placeholder="Название..."
            />
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.79932 16.1514C13.4237 16.1514 16.3618 13.2132 16.3618 9.58887C16.3618 5.9645 13.4237 3.02637 9.79932 3.02637C6.17495 3.02637 3.23682 5.9645 3.23682 9.58887C3.23682 13.2132 6.17495 16.1514 9.79932 16.1514Z"
                stroke="#9C99AE"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.4399 14.2295L18.2368 18.0264"
                stroke="#9C99AE"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </label>
          <div className={styles.favoritesBlock__is_available}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                fill="#01C5BA"
              />
            </svg>
            <p className={styles.favoritesBlock__is_availableText}>
              Есть в наличии
            </p>
          </div>
          <ul className={styles.favoritesBlock__list}>
            {favoritesList.map((item, index) => (
              <ProductItem
                key={index}
                image={item.image}
                url={item.url}
                price={item.price}
                isFav={true}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
