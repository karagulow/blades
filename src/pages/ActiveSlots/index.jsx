import { useNavigate } from 'react-router-dom';

import styles from './ActiveSlots.module.scss';
import activeSlots from '../../assets/data/active_slots.json';

export const ActiveSlots = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.slots}>
      <div
        className={styles.slotsBack}
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
        <p className={styles.slotsBack__text}>Назад</p>
      </div>
      <h3 className={styles.slotsTitle}>Активные слоты</h3>
      <table className={styles.slotsTable}>
        <thead className={styles.slotsTable__head}>
          <tr className={styles.slotsTable__headItem}>
            <th className={styles.slotsTable__headItem__1}>Ссылка на товар</th>
            <th className={styles.slotsTable__headItem__2}>Название товара</th>
            <th className={styles.slotsTable__headItem__3}>Подробнее</th>
            <th className={styles.slotsTable__headItem__4}>Удалить слот</th>
          </tr>
        </thead>
        <tbody className={styles.slotsTable__body}>
          {activeSlots.map((item, index) => (
            <tr key={index} className={styles.slotsTable__bodyItem}>
              <td className={styles.slotsTable__bodyItem__1}>{item.url}</td>
              <td className={styles.slotsTable__bodyItem__2}>{item.name}</td>
              <td className={styles.slotsTable__bodyItem__3}>Подробнее</td>
              <td className={styles.slotsTable__bodyItem__4}>Удалить слот</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
