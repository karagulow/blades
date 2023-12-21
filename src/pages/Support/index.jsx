import { useNavigate } from 'react-router-dom';

import styles from './Support.module.scss';

export const Support = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.support}>
      <div
        className={styles.supportBack}
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
        <p className={styles.supportBack__text}>Назад</p>
      </div>
      <form className={styles.supportForm}>
        <div className={styles.supportForm__block}>
          <input
            className={styles.supportForm__blockInput}
            type="text"
            placeholder="Как к вам обращаться?"
          />
          <textarea
            className={styles.supportForm__blockTextarea}
            placeholder="Опишите свою проблему"
          ></textarea>
          <input
            className={styles.supportForm__blockInput}
            type="email"
            placeholder="Эллектронная почта"
          />
        </div>
        <button type="button" className={styles.supportForm__btn}>
          Отправить
        </button>
      </form>
    </div>
  );
};
