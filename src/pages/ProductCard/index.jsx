import { useNavigate } from 'react-router-dom';

import styles from './ProductCard.module.scss';

import productImg from '../../assets/img/product-img.jpeg';

export const ProductCard = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.product}>
      <div
        className={styles.productBack}
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
        <p className={styles.productBack__text}>Назад</p>
      </div>
      <div className={styles.productMain}>
        <div className={styles.productMain__imgs}>
          <ul className={styles.productMain__imgsList}>
            <img
              className={styles.productMain__imgsList__item}
              src={productImg}
              alt="product img"
            />
            <img
              className={styles.productMain__imgsList__item}
              src={productImg}
              alt="product img"
            />
            <img
              className={styles.productMain__imgsList__item}
              src={productImg}
              alt="product img"
            />
            <img
              className={styles.productMain__imgsList__item}
              src={productImg}
              alt="product img"
            />
            <img
              className={styles.productMain__imgsList__item}
              src={productImg}
              alt="product img"
            />
          </ul>
          <img
            className={styles.productMain__imgsFull}
            src={productImg}
            alt="full product img"
          />
        </div>
        <div className={styles.productMain__params}>
          <ul className={styles.productMain__paramsList}>
            <li className={styles.productMain__paramsList__item}>
              Стоимость
              <span
                className={styles.productMain__paramsList__itemValue}
                style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#01C5BA',
                }}
              >
                1600 ₽
              </span>
            </li>
            <li className={styles.productMain__paramsList__item}>
              Размеры
              <span className={styles.productMain__paramsList__itemValue}>
                20 см
              </span>
            </li>
            <li className={styles.productMain__paramsList__item}>
              Условия хранения
              <span className={styles.productMain__paramsList__itemValue}>
                Не допускать прямого солнечного контакта, хранить в сухом месте
              </span>
            </li>
            <li className={styles.productMain__paramsList__item}>
              Срок службы
              <span className={styles.productMain__paramsList__itemValue}>
                2 года
              </span>
            </li>
          </ul>
          <button className={styles.productMain__paramsBtn}>
            Добавить в корзину
          </button>
        </div>
      </div>
      <div className={styles.productParams}>
        <h3 className={styles.productParams__title}>Описание товара</h3>
        <ul className={styles.productParams__list}>
          <li className={styles.productParams__listItem}>
            Вид пластика
            <span className={styles.productParams__listItem__value}>
              ABS пластик
            </span>
          </li>
          <li className={styles.productParams__listItem}>
            Есть чертеж
            <span className={styles.productParams__listItem__value}>Да</span>
          </li>
          <li className={styles.productParams__listItem}>
            Предельная температура
            <span className={styles.productParams__listItem__value}>300°</span>
          </li>
          <li className={styles.productParams__listItem}>
            Технология производства
            <span className={styles.productParams__listItem__value}>
              Создан на 3д-принтере
            </span>
          </li>
          <li className={styles.productParams__listItem}>
            С какими станками совместим товар:
            <span className={styles.productParams__listItem__value}>
              Токарно-фрезерные станки и прочие
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
