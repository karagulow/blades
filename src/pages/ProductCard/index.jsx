import { useNavigate } from 'react-router-dom';

import styles from './ProductCard.module.scss';

import productImg from '../../assets/img/product-img.jpeg';

export const ProductCard = () => {
  const navigate = useNavigate();

  const userProduct = true;

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
        {userProduct && (
          <div className={styles.productMain__userWarning}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.67693 24.4014H23.3177C23.6205 24.4013 23.918 24.3227 24.1813 24.1733C24.4446 24.0238 24.6646 23.8086 24.8199 23.5487C24.9751 23.2887 25.0602 22.993 25.067 22.6903C25.0737 22.3876 25.0018 22.0883 24.8583 21.8218L15.5384 4.51316C14.8772 3.28598 13.1174 3.28598 12.4562 4.51316L3.13639 21.8218C2.99286 22.0883 2.92095 22.3876 2.92768 22.6903C2.93441 22.993 3.01955 23.2887 3.17478 23.5487C3.33001 23.8086 3.55003 24.0238 3.81332 24.1733C4.07661 24.3227 4.37418 24.4013 4.67693 24.4014V24.4014Z"
                stroke="#01C5BA"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.6828 10.6819L13.9967 17.3537L14.3101 10.6846C14.312 10.642 14.3052 10.5994 14.2902 10.5594C14.2751 10.5195 14.252 10.4831 14.2224 10.4524C14.1928 10.4217 14.1572 10.3973 14.1178 10.3808C14.0784 10.3643 14.0361 10.356 13.9935 10.3565V10.3565C13.9515 10.3569 13.9101 10.3657 13.8716 10.3824C13.8332 10.399 13.7984 10.4233 13.7695 10.4536C13.7405 10.4839 13.7179 10.5198 13.703 10.559C13.6882 10.5982 13.6813 10.6399 13.6828 10.6819V10.6819Z"
                stroke="#01C5BA"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 21.7217C13.7837 21.7217 13.5722 21.6575 13.3923 21.5374C13.2125 21.4172 13.0723 21.2463 12.9895 21.0465C12.9067 20.8466 12.8851 20.6267 12.9273 20.4146C12.9695 20.2024 13.0736 20.0075 13.2266 19.8545C13.3796 19.7016 13.5745 19.5974 13.7866 19.5552C13.9988 19.513 14.2187 19.5347 14.4186 19.6174C14.6184 19.7002 14.7892 19.8404 14.9094 20.0203C15.0296 20.2001 15.0938 20.4116 15.0938 20.6279C15.0938 20.918 14.9785 21.1962 14.7734 21.4013C14.5683 21.6064 14.2901 21.7217 14 21.7217Z"
                fill="#01C5BA"
              />
            </svg>
            <p className={styles.productMain__userWarning__text}>
              Товар от пользователя
            </p>
          </div>
        )}

        <div className={styles.productMain_content}>
          <div className={styles.productMain_content__imgs}>
            <ul className={styles.productMain_content__imgsList}>
              <img
                className={styles.productMain_content__imgsList__item}
                src={productImg}
                alt="product img"
              />
              <img
                className={styles.productMain_content__imgsList__item}
                src={productImg}
                alt="product img"
              />
              <img
                className={styles.productMain_content__imgsList__item}
                src={productImg}
                alt="product img"
              />
              <img
                className={styles.productMain_content__imgsList__item}
                src={productImg}
                alt="product img"
              />
              <img
                className={styles.productMain_content__imgsList__item}
                src={productImg}
                alt="product img"
              />
            </ul>
            <img
              className={styles.productMain_content__imgsFull}
              src={productImg}
              alt="full product img"
            />
          </div>
          <div className={styles.productMain_content__params}>
            <ul className={styles.productMain_content__paramsList}>
              <li className={styles.productMain_content__paramsList__item}>
                Стоимость
                <span
                  className={styles.productMain_content__paramsList__itemValue}
                  style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#01C5BA',
                  }}
                >
                  1600 ₽
                </span>
              </li>
              <li className={styles.productMain_content__paramsList__item}>
                Размеры
                <span
                  className={styles.productMain_content__paramsList__itemValue}
                >
                  20 см
                </span>
              </li>
              <li className={styles.productMain_content__paramsList__item}>
                Условия хранения
                <span
                  className={styles.productMain_content__paramsList__itemValue}
                >
                  Не допускать прямого солнечного контакта, хранить в сухом
                  месте
                </span>
              </li>
              <li className={styles.productMain_content__paramsList__item}>
                Срок службы
                <span
                  className={styles.productMain_content__paramsList__itemValue}
                >
                  2 года
                </span>
              </li>
            </ul>
            <button className={styles.productMain_content__paramsBtn}>
              Добавить в корзину
            </button>
          </div>
        </div>

        {userProduct && (
          <div className={styles.productMain__userText}>
            *Мы не несем ответственность за приобретенный товар у пользователей
          </div>
        )}
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
