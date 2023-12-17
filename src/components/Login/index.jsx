import { useEffect, useRef, useState } from 'react';

import styles from './Login.module.scss';

export const Login = ({ setLoginOpen, setRegisterOpen }) => {
  const [authCategoryActive, setAuthCategoryActive] = useState(true);
  const [registerCategoryActive, setRegisterCategoryActive] = useState(false);

  // components
  const [authActive, setAuthActive] = useState(true);
  const [registerActive, setRegisterActive] = useState(false);

  const loginRef = useRef();
  const loginBlockRef = useRef();
  useEffect(() => {
    const handleClickLoginOutside = event => {
      if (
        event.composedPath().includes(loginRef.current) &&
        !event.composedPath().includes(loginBlockRef.current)
      ) {
        setLoginOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickLoginOutside);
    return () => {
      document.body.removeEventListener('click', handleClickLoginOutside);
    };
  });

  return (
    <div className={styles.login} ref={loginRef}>
      <div className={styles.loginBlock} ref={loginBlockRef}>
        <div className={styles.loginBlock__category}>
          <button
            className={
              authCategoryActive
                ? styles.active
                : styles.loginBlock__categoryBtn
            }
            onClick={() => {
              setAuthCategoryActive(true);
              setAuthActive(true);
              setRegisterCategoryActive(false);
              setRegisterActive(false);
            }}
          >
            Авторизация
          </button>
          <button
            className={
              registerCategoryActive
                ? styles.active
                : styles.loginBlock__categoryBtn
            }
            onClick={() => {
              setAuthCategoryActive(false);
              setAuthActive(false);
              setRegisterCategoryActive(true);
              setRegisterActive(true);
            }}
          >
            Регистрация
          </button>
        </div>
        {authActive && (
          <form className={styles.loginBlock__auth}>
            <div
              className={styles.loginBlock__authItem}
              style={{ marginBottom: '20px' }}
            >
              <div className={styles.loginBlock__authItem__headline}>
                <label for="login">Логин</label>
              </div>
              <input type="text" id="login" placeholder="Логин" />
            </div>
            <div
              className={styles.loginBlock__authItem}
              style={{ marginBottom: '30px' }}
            >
              <div className={styles.loginBlock__authItem__headline}>
                <label for="password">Пароль</label>
                <button type="button">Забыл пароль</button>
              </div>
              <input type="password" id="password" placeholder="Пароль" />
            </div>
            <button
              className={styles.loginBlock__authBtn}
              onClick={() => {
                setLoginOpen(false);
              }}
              type="button"
            >
              Войти
            </button>
          </form>
        )}
        {registerActive && (
          <form className={styles.loginBlock__auth}>
            <div
              className={styles.loginBlock__authItem}
              style={{ marginBottom: '20px' }}
            >
              <div className={styles.loginBlock__authItem__headline}>
                <label for="fullname">ФИО</label>
              </div>
              <input type="text" id="fullname" placeholder="ФИО" />
            </div>
            <div
              className={styles.loginBlock__authItem}
              style={{ marginBottom: '30px' }}
            >
              <div className={styles.loginBlock__authItem__headline}>
                <label for="email">Email/телефон</label>
              </div>
              <input type="text" id="email" placeholder="Email/телефон" />
            </div>
            <button
              className={styles.loginBlock__authBtn}
              onClick={() => {
                setLoginOpen(false);
                setRegisterOpen(true);
              }}
              type="button"
            >
              Войти
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
