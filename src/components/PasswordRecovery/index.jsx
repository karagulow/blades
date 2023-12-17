import { useEffect, useRef, useState } from 'react';

import styles from './PasswordRecovery.module.scss';

export const PasswordRecovery = ({ setRecoveryOpen }) => {
  const [emailActive, setEmailActive] = useState(true);
  const [codeActive, setCodeActive] = useState(false);
  const [pwActive, setPwActive] = useState(false);

  const recoveryRef = useRef();
  const recoveryBlockRef = useRef();
  useEffect(() => {
    const handleClickLoginOutside = event => {
      if (
        event.composedPath().includes(recoveryRef.current) &&
        !event.composedPath().includes(recoveryBlockRef.current)
      ) {
        setRecoveryOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickLoginOutside);
    return () => {
      document.body.removeEventListener('click', handleClickLoginOutside);
    };
  });

  return (
    <div className={styles.register} ref={recoveryRef}>
      <div className={styles.registerBlock} ref={recoveryBlockRef}>
        <h5 className={styles.registerBlock__title}>Восстановление</h5>
        {emailActive && (
          <form className={styles.registerBlock__form}>
            <p className={styles.registerBlock__formText}>
              Введите адрес электронной почты или номер телефона, связанный с
              вашей учетной записью.
            </p>
            <label for="email">Email/телефон</label>
            <input type="text" id="email" placeholder="Email/телефон" />
            <button
              className={styles.registerBlock__formBtn}
              onClick={() => {
                setEmailActive(false);
                setCodeActive(true);
              }}
              type="button"
            >
              Продолжить
            </button>
          </form>
        )}
        {codeActive && (
          <form className={styles.registerBlock__form}>
            <p className={styles.registerBlock__formText}>
              Введите код, отправленный вам, чтобы восстановить доступ
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
              Продолжить
            </button>
          </form>
        )}
        {pwActive && (
          <form className={styles.registerBlock__form}>
            <p className={styles.registerBlock__formText}>
              Придумайте новый пароль
            </p>
            <label for="pw-1">Новый пароль</label>
            <input type="password" id="pw-1" placeholder="Пароль" />
            <label for="pw-2">Подтверждение пароля</label>
            <input type="password" id="pw-2" placeholder="Пароль" />
            <button className={styles.registerBlock__formBtn} type="button">
              Продолжить
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
