import { useNavigate } from 'react-router-dom';

import styles from './Settings.module.scss';

export const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.settings}>
      <div
        className={styles.settingsBack}
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
        <p className={styles.settingsBack__text}>Назад</p>
      </div>
      <div className={styles.settingsList}>
        <form className={styles.settingsList__item}>
          <input
            className={styles.settingsList__itemInput}
            type="text"
            placeholder="Логин"
            value="Ivanovich12333"
          />
          <button type="button" className={styles.settingsList__itemBtn}>
            Изменить
          </button>
        </form>
        <form className={styles.settingsList__item}>
          <input
            className={styles.settingsList__itemInput}
            type="password"
            placeholder="Пароль"
            value="Qwerty123"
          />
          <button type="button" className={styles.settingsList__itemBtn}>
            Изменить
          </button>
        </form>
        <form className={styles.settingsList__item}>
          <input
            className={styles.settingsList__itemInput}
            type="text"
            placeholder="Email"
            value="Jonston123@mail.ru"
          />
          <button type="button" className={styles.settingsList__itemBtn}>
            Изменить
          </button>
        </form>
        <form className={styles.settingsList__item}>
          <input
            className={styles.settingsList__itemInput}
            type="text"
            placeholder="Ссылка на базу данных"
            value="https://ask.chadgpt.ru/"
          />
          <button type="button" className={styles.settingsList__itemBtn}>
            Перенести
          </button>
        </form>
      </div>
    </div>
  );
};
