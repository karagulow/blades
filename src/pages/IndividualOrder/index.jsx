import { useNavigate } from 'react-router-dom';

import styles from './IndividualOrder.module.scss';
import { useState } from 'react';

export const IndividualOrder = () => {
  const navigate = useNavigate();

  const [pageFirst, setPageFirst] = useState(false);
  const [pageSecond, setPageSecond] = useState(false);
  const [pageThird, setPageThird] = useState(true);
  const [pageFourth, setPageFourth] = useState(false);

  return (
    <div className={styles.order}>
      <div
        className={styles.orderBack}
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
        <p className={styles.orderBack__text}>Назад</p>
      </div>
      <h3 className={styles.orderTitle}>Формирование индивидуального заказа</h3>
      {pageFirst && (
        <form className={styles.orderForm}>
          <p className={styles.orderForm__text}>
            Если у вас есть 3D модель необходимой оснастки, прикрепите ее
          </p>
          <div className={styles.orderForm__inputs}>
            <label style={{ cursor: 'pointer' }}>
              <input type="text" />
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 6.30859V14.3086M14 10.3086H6M10 19.3086C14.9706 19.3086 19 15.2792 19 10.3086C19 5.33803 14.9706 1.30859 10 1.30859C5.02944 1.30859 1 5.33803 1 10.3086C1 15.2792 5.02944 19.3086 10 19.3086Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </label>
            <label>
              <input type="text" placeholder="Для чего необходима оснастка" />
            </label>
            <label>
              <input type="text" placeholder="Приоритетный вид пластика" />
            </label>
            <label>
              <input
                type="text"
                placeholder="Предельная температура для оснастки"
              />
            </label>
            <label>
              <input type="text" placeholder="Условия хранения" />
            </label>
          </div>
          <button className={styles.orderForm__btn_first} type="button">
            Далее
          </button>
        </form>
      )}
      {pageSecond && (
        <form className={styles.orderForm}>
          <div className={styles.orderForm__inputs}>
            <label>
              <input type="text" placeholder="ФИО" />
            </label>
            <label>
              <input type="text" placeholder="Номер телефона или почта" />
            </label>
            <label>
              <input type="text" placeholder="Адрес доставки" />
            </label>
            <div className={styles.orderForm__inputsCheck}>
              <p className={styles.orderForm__inputsCheck__text}>
                Требуется консультация менеджера
              </p>
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
            </div>
          </div>
          <button className={styles.orderForm__btn_first}>Далее</button>
        </form>
      )}
      {pageThird && (
        <form className={styles.orderForm}>
          <p className={styles.orderForm__text}>
            Во избежание ошибки в заказе проверьте введенные вами данные
          </p>
          <div className={styles.orderForm__inputs}>
            <label>
              <input type="text" placeholder="Вид пластика" />
            </label>
            <label>
              <input type="text" placeholder="Предельная температура" />
            </label>
            <label>
              <input type="text" placeholder="Условия хранения" />
            </label>
            <label>
              <input type="text" placeholder="Город доставки" />
            </label>
            <label>
              <input type="text" placeholder="ФИО" />
            </label>
            <label>
              <input type="tel" placeholder="Телефон" />
            </label>
          </div>
          <button className={styles.orderForm__btn_second}>
            Изменить заказ
          </button>
          <button className={styles.orderForm__btn_first}>
            Подтвердить заказ
          </button>
        </form>
      )}
    </div>
  );
};
