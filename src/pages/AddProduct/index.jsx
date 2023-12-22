import { useNavigate } from 'react-router-dom';

import styles from './AddProduct.module.scss';
import { useEffect, useRef, useState } from 'react';

export const AddProduct = () => {
  const navigate = useNavigate();

  const textAreaRef = useRef(null);
  const [textAreaVal, setTextAreaVal] = useState('');

  const handleTextAreaChange = e => {
    setTextAreaVal(e.target.value);
  };

  useEffect(() => {
    textAreaRef.current.style.height = '156px';
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
  }, [textAreaVal]);

  return (
    <div className={styles.add_product}>
      <div
        className={styles.add_productBack}
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
        <p className={styles.add_productBack__text}>Назад</p>
      </div>
      <h3 className={styles.add_productTitle}>Выставить на продажу</h3>
      <form>
        <div className={styles.add_productBlock}>
          <div className={styles.add_productBlock__item}>
            <p className={styles.add_productBlock__itemText}>
              Добавить фотографии
            </p>
            <div className={styles.add_productBlock__itemPhotos}>
              {/* ul list photos */}
              <label className={styles.add_productBlock__itemPhotos__add}>
                <input type="file" hidden />
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
            </div>
          </div>
          <div className={styles.add_productBlock__item}>
            <p className={styles.add_productBlock__itemText}>Название товара</p>
            <input className={styles.add_productBlock__itemInput} type="text" />
          </div>
          <div className={styles.add_productBlock__item}>
            <p className={styles.add_productBlock__itemText}>Описание товара</p>
            <textarea
              className={styles.add_productBlock__itemBig_textarea}
              value={textAreaVal}
              onChange={handleTextAreaChange}
              ref={textAreaRef}
            ></textarea>
          </div>
          <div className={styles.add_productBlock__item}>
            <p className={styles.add_productBlock__itemText}>
              Условия хранения:
            </p>
            <input className={styles.add_productBlock__itemInput} type="text" />
          </div>
          <div className={styles.add_productBlock__item}>
            <p className={styles.add_productBlock__itemText}>
              Срок эксплуатации
            </p>
            <input className={styles.add_productBlock__itemInput} type="text" />
          </div>
        </div>

        <h3 className={styles.add_productTitle}>Характеристики оснастки</h3>
        <div className={styles.add_productBlock}>
          <div className={styles.add_productBlock__item}>
            <p className={styles.add_productBlock__itemText}>Вид пластика</p>
            <input className={styles.add_productBlock__itemInput} type="text" />
          </div>
          <div className={styles.add_productBlock__item}>
            <p className={styles.add_productBlock__itemText}>
              Предельная температура
            </p>
            <input className={styles.add_productBlock__itemInput} type="text" />
          </div>
          <div className={styles.add_productBlock__item}>
            <p className={styles.add_productBlock__itemText}>
              Технология производства
            </p>
            <input className={styles.add_productBlock__itemInput} type="text" />
          </div>
          <div className={styles.add_productBlock__item}>
            <p className={styles.add_productBlock__itemText}>Совместимость</p>
            <input className={styles.add_productBlock__itemInput} type="text" />
          </div>
        </div>

        <h3 className={styles.add_productTitle}>Размеры оснастки</h3>
        <div className={styles.add_productBlock}>
          <div className={styles.add_productBlock__item}>
            <p className={styles.add_productBlock__itemText}>Длина оснастки</p>
            <input className={styles.add_productBlock__itemInput} type="text" />
          </div>
          <div className={styles.add_productBlock__item}>
            <p className={styles.add_productBlock__itemText}>Ширина оснастки</p>
            <input className={styles.add_productBlock__itemInput} type="text" />
          </div>
          <div className={styles.add_productBlock__item}>
            <p className={styles.add_productBlock__itemText}>Высота оснастки</p>
            <input className={styles.add_productBlock__itemInput} type="text" />
          </div>
          <div className={styles.add_productBlock__item}>
            <p className={styles.add_productBlock__itemText}>Вес оснастки</p>
            <input className={styles.add_productBlock__itemInput} type="text" />
          </div>
          <div className={styles.add_productBlock__item}>
            <p className={styles.add_productBlock__itemText}>Стоимость</p>
            <input className={styles.add_productBlock__itemInput} type="text" />
          </div>
        </div>

        <button className={styles.add_productBtn}>Подтвердить</button>
      </form>
    </div>
  );
};
