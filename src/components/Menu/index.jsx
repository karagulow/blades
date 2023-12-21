import { Link, NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

const setActive = ({ isActive }) =>
  isActive ? styles.active : styles.menuBlock__navItem__link;

export const Menu = ({
  isAuth,
  setMenuOpen,
  setLoginOpen,
  setAuthClick,
  setRegisterClick,
}) => {
  return (
    <div className={styles.menu}>
      {isAuth ? (
        <div className={styles.menuBlock}>
          <Link to="/lk" className={styles.menuBlock__user}>
            <p className={styles.menuBlock__userName}>
              Барилов Александр Сергеевич
            </p>
            <p className={styles.menuBlock__userEmail}>Kuropatka1233@mail.ru</p>
          </Link>
          <ul className={styles.menuBlock__nav}>
            <li className={styles.menuBlock__navItem}>
              <NavLink
                to="/"
                className={setActive}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.25016 5.83333H21.3231C22.2189 5.83333 22.7805 6.80106 22.3361 7.57883L19.3386 12.8243C18.9232 13.5513 18.1501 14 17.3127 14H9.3335M9.3335 14L7.53245 16.8817C7.04679 17.6587 7.60544 18.6667 8.52179 18.6667H21.0002M9.3335 14L4.72841 4.78984C4.33317 3.99934 3.52522 3.5 2.64142 3.5H2.3335M9.3335 23.3333C9.3335 23.9777 8.81116 24.5 8.16683 24.5C7.5225 24.5 7.00016 23.9777 7.00016 23.3333C7.00016 22.689 7.5225 22.1667 8.16683 22.1667C8.81116 22.1667 9.3335 22.689 9.3335 23.3333ZM21.0002 23.3333C21.0002 23.9777 20.4778 24.5 19.8335 24.5C19.1892 24.5 18.6668 23.9777 18.6668 23.3333C18.6668 22.689 19.1892 22.1667 19.8335 22.1667C20.4778 22.1667 21.0002 22.689 21.0002 23.3333Z"
                    stroke="#9C99AE"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Главная</p>
              </NavLink>
            </li>
            <li className={styles.menuBlock__navItem}>
              <NavLink
                to="/favorites"
                className={setActive}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.7919 6.37464C25.07 8.65269 25.07 12.3462 22.7919 14.6242L14.8436 22.5725C14.378 23.0382 13.623 23.0382 13.1573 22.5725L5.20903 14.6242C2.93097 12.3462 2.93097 8.65269 5.20903 6.37464C7.02009 4.56358 9.20614 4.00905 11.4119 5.08536C12.2874 5.51256 13.4354 6.37464 14.0005 7.50073C14.5656 6.37464 15.7135 5.51256 16.589 5.08536C18.7948 4.00905 20.9809 4.56358 22.7919 6.37464Z"
                    stroke="#9C99AE"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Избранное</p>
              </NavLink>
            </li>
            <li className={styles.menuBlock__navItem}>
              <NavLink
                to="/support"
                className={setActive}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0002 2.33325C7.56716 2.33325 2.3335 7.56692 2.3335 13.9999V18.8334C2.3335 20.0281 3.38 20.9999 4.66683 20.9999H5.8335C6.14292 20.9999 6.43966 20.877 6.65845 20.6582C6.87725 20.4394 7.00016 20.1427 7.00016 19.8333V13.8331C7.00016 13.5237 6.87725 13.2269 6.65845 13.0081C6.43966 12.7893 6.14292 12.6664 5.8335 12.6664H4.77416C5.42283 8.15142 9.30783 4.66659 14.0002 4.66659C18.6925 4.66659 22.5775 8.15142 23.2262 12.6664H22.1668C21.8574 12.6664 21.5607 12.7893 21.3419 13.0081C21.1231 13.2269 21.0002 13.5237 21.0002 13.8331V20.9999C21.0002 22.2868 19.9537 23.3333 18.6668 23.3333H16.3335V22.1666H11.6668V25.6666H18.6668C21.2405 25.6666 23.3335 23.5736 23.3335 20.9999C24.6203 20.9999 25.6668 20.0281 25.6668 18.8334V13.9999C25.6668 7.56692 20.4332 2.33325 14.0002 2.33325Z"
                    fill="#9C99AE"
                  />
                </svg>
                <p>Поддержка</p>
              </NavLink>
            </li>
            <li className={styles.menuBlock__navItem}>
              <NavLink
                to="/settings"
                className={setActive}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.2593 5.32716C11.4966 4.25957 12.4435 3.5 13.5371 3.5H14.4603C15.5539 3.5 16.5008 4.25958 16.7381 5.32716L16.9748 6.39258C17.7462 6.69455 18.4603 7.11045 19.0967 7.61956L20.1399 7.29121C21.1831 6.96287 22.3144 7.40312 22.8612 8.35024L23.3228 9.14975C23.8696 10.0969 23.6852 11.2967 22.8793 12.0359L22.0741 12.7745C22.1342 13.1743 22.1654 13.5835 22.1654 14C22.1654 14.4165 22.1342 14.8257 22.0741 15.2254L22.8793 15.9641C23.6852 16.7033 23.8696 17.9031 23.3228 18.8502L22.8612 19.6498C22.3144 20.5969 21.1831 21.0371 20.1399 20.7088L19.0967 20.3804C18.4603 20.8895 17.7462 21.3054 16.9748 21.6074L16.7381 22.6728C16.5008 23.7404 15.5539 24.5 14.4603 24.5H13.5371C12.4435 24.5 11.4966 23.7404 11.2593 22.6728L11.0226 21.6074C10.2513 21.3054 9.53708 20.8895 8.90072 20.3804L7.85749 20.7088C6.81431 21.0371 5.68305 20.5969 5.13624 19.6497L4.67464 18.8502C4.12782 17.9031 4.31218 16.7033 5.11812 15.964L5.92338 15.2254C5.86323 14.8257 5.83205 14.4165 5.83205 14C5.83205 13.5835 5.86323 13.1743 5.92338 12.7746L5.11814 12.0359C4.3122 11.2967 4.12784 10.0969 4.67465 9.14976L5.13625 8.35024C5.68307 7.40313 6.81433 6.96288 7.8575 7.29122L8.90073 7.61957C9.53709 7.11045 10.2513 6.69456 11.0226 6.39258L11.2593 5.32716Z"
                    stroke="#9C99AE"
                    stroke-width="2.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.1654 14C15.1654 14.6443 14.643 15.1667 13.9987 15.1667C13.3544 15.1667 12.832 14.6443 12.832 14C12.832 13.3557 13.3544 12.8333 13.9987 12.8333C14.643 12.8333 15.1654 13.3557 15.1654 14Z"
                    stroke="#9C99AE"
                    stroke-width="2.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Настройки</p>
              </NavLink>
            </li>
          </ul>
          <hr className={styles.menuBlock__line} />
          <Link className={styles.menuBlock__exit}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9952 3.5H3.5V24.5H14"
                stroke="#01C5BA"
                stroke-width="2.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.25 19.25L24.5 14L19.25 8.75"
                stroke="#01C5BA"
                stroke-width="2.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.3335 13.9954H24.5002"
                stroke="#01C5BA"
                stroke-width="2.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className={styles.menuBlock__exitText}>Выйти</p>
          </Link>
        </div>
      ) : (
        <div className={styles.menuBlock}>
          <button
            className={styles.menuBlock__auth}
            onClick={() => {
              setMenuOpen(false);
              setLoginOpen(true);
              setAuthClick(true);
              setRegisterClick(false);
            }}
          >
            Войти
          </button>
          <button
            className={styles.menuBlock__register}
            onClick={() => {
              setMenuOpen(false);
              setLoginOpen(true);
              setAuthClick(false);
              setRegisterClick(true);
            }}
          >
            Зарегистрироваться
          </button>
        </div>
      )}
    </div>
  );
};
