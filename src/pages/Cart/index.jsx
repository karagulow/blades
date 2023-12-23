import { useNavigate } from 'react-router-dom';

import styles from './Cart.module.scss';
import productImg from '../../assets/img/product-img.jpeg';

export const Cart = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.cart}>
      <div
        className={styles.cartBack}
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
        <p className={styles.cartBack__text}>Назад</p>
      </div>
      <h3 className={styles.cartTitle}>Корзина</h3>
      <div className={styles.cartBlock}>
        <ul className={styles.cartBlock__list}>
          <li className={styles.cartBlock__listItem}>
            <div className={styles.cartBlock__listItem__left}>
              <img
                className={styles.cartBlock__listItem__leftImg}
                src={productImg}
                alt="product"
              />
              <div className={styles.cartBlock__listItem__leftAbout}>
                <p className={styles.cartBlock__listItem__leftAbout__title}>
                  Пластиковая оснастка для 3D-печати
                </p>
                <p className={styles.cartBlock__listItem__leftAbout__text}>
                  Высокоэффективный инструмент, который используется во время
                  производства изделий со сложной геометрией корпуса
                </p>
              </div>
            </div>
            <div className={styles.cartBlock__listItem__right}>
              <div className={styles.cartBlock__listItem__rightCount}>
                <button>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.14603"
                      y="1.14603"
                      width="33.4493"
                      height="33.7079"
                      rx="16.7246"
                      stroke="#01C5BA"
                      stroke-width="2.29206"
                    />
                    <line
                      x1="12.71"
                      y1="17.4311"
                      x2="23.0325"
                      y2="17.4311"
                      stroke="#01C5BA"
                      stroke-width="2.29206"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <span>1</span>
                <button>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="36" height="36" rx="18" fill="#01C5BA" />
                    <line
                      x1="18.2101"
                      y1="11.7889"
                      x2="18.2101"
                      y2="24.5955"
                      stroke="white"
                      stroke-width="2.17548"
                      stroke-linecap="round"
                    />
                    <line
                      x1="11.7892"
                      y1="18.174"
                      x2="24.5958"
                      y2="18.174"
                      stroke="white"
                      stroke-width="2.17548"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>

              <div className={styles.cartBlock__listItem__rightPrice}>
                1600 ₽
              </div>

              <div className={styles.cartBlock__listItem__rightOther}>
                <button
                  className={styles.cartBlock__listItem__rightOther__close}
                >
                  <svg
                    style={{ marginBottom: '40px' }}
                    width="37"
                    height="37"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.1251 13.8754L13.8751 23.1254M23.1251 23.1254L13.8751 13.8754M9.25008 30.8337H27.7501C29.453 30.8337 30.8334 29.4532 30.8334 27.7503V9.25033C30.8334 7.54745 29.453 6.16699 27.7501 6.16699H9.25008C7.5472 6.16699 6.16675 7.54745 6.16675 9.25032V27.7503C6.16675 29.4532 7.5472 30.8337 9.25008 30.8337Z"
                      stroke="#01C5BA"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>

                <button
                  className={styles.cartBlock__listItem__rightOther__cart}
                >
                  <svg
                    style={{ marginBottom: '15px' }}
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.46068 8.158H28.851C30.0432 8.158 30.7906 9.44588 30.1991 10.481L26.21 17.4618C25.6572 18.4293 24.6282 19.0264 23.5139 19.0264H12.8949M12.8949 19.0264L10.498 22.8614C9.85169 23.8956 10.5952 25.237 11.8146 25.237H28.4212M12.8949 19.0264L6.76632 6.76928C6.24032 5.71727 5.16508 5.05273 3.98889 5.05273H3.5791M12.8949 31.4475C12.8949 32.305 12.1998 33.0001 11.3423 33.0001C10.4848 33.0001 9.78963 32.305 9.78963 31.4475C9.78963 30.59 10.4848 29.8949 11.3423 29.8949C12.1998 29.8949 12.8949 30.59 12.8949 31.4475ZM28.4212 31.4475C28.4212 32.305 27.7261 33.0001 26.8686 33.0001C26.0111 33.0001 25.316 32.305 25.316 31.4475C25.316 30.59 26.0111 29.8949 26.8686 29.8949C27.7261 29.8949 28.4212 30.59 28.4212 31.4475Z"
                      stroke="#01C5BA"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>

                <button className={styles.cartBlock__listItem__rightOther__fav}>
                  <svg
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
                </button>
              </div>
            </div>
          </li>
        </ul>
        <div className={styles.cartBlock__order}>
          <p className={styles.cartBlock__orderText}>
            Укажите почту, куда поступит квитанция для оплаты
          </p>
          <input
            className={styles.cartBlock__orderInput}
            type="text"
            placeholder="Email"
          />
          <p className={styles.cartBlock__orderPrice}>
            Итоговая сумма:<span>1600 ₽</span>
          </p>
          <button className={styles.cartBlock__orderBtn}>
            Оставить заявку
          </button>
        </div>
      </div>
    </div>
  );
};
