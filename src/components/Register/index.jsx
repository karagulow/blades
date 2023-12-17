import { useEffect, useRef, useState } from 'react';

import styles from './Register.module.scss';

export const Register = ({ setRegisterOpen }) => {
  const [codeActive, setCodeActive] = useState(true);
  const [pwActive, setPwActive] = useState(false);

  const registerRef = useRef();
  const registerBlockRef = useRef();
  useEffect(() => {
    const handleClickLoginOutside = event => {
      if (
        event.composedPath().includes(registerRef.current) &&
        !event.composedPath().includes(registerBlockRef.current)
      ) {
        setRegisterOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickLoginOutside);
    return () => {
      document.body.removeEventListener('click', handleClickLoginOutside);
    };
  });

  return (
    <div className={styles.register} ref={registerRef}>
      <div className={styles.registerBlock} ref={registerBlockRef}>
        <h5 className={styles.registerBlock__title}>Регистрация</h5>
        {codeActive && (
          <form className={styles.registerBlock__form}>
            <p className={styles.registerBlock__formText}>
              Введите код, отправленный вам по смс, чтобы продолжить
            </p>
            <label for="code">Код</label>
            <input type="text" id="code" placeholder="Код" />
            <button
              className={styles.registerBlock__formBtn}
              onClick={() => {
                setCodeActive(false);
                setPwActive(true);
              }}
              type="button"
            >
              Далее
            </button>
          </form>
        )}
        {pwActive && (
          <form className={styles.registerBlock__form}>
            <p className={styles.registerBlock__formText}>
              Придумайте логин и пароль
            </p>
            <label for="login">Код</label>
            <input type="text" id="login" placeholder="Логин" />
            <label for="pw-1">Пароль</label>
            <input type="password" id="pw-1" placeholder="Пароль" />
            <label for="pw-2">Подтвердите пароль</label>
            <input type="password" id="pw-2" placeholder="Пароль" />
            <button className={styles.registerBlock__formBtn} type="button">
              Далее
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
