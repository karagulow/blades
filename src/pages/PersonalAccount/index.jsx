import { useNavigate } from 'react-router-dom';

import styles from './PersonalAccount.module.scss';
import historyData from '../../assets/data/order_history.json';
import myStore from '../../assets/data/my_store.json';

export const PersonalAccount = () => {
  const navigate = useNavigate();

  const today = new Date().toLocaleDateString('ru-RU');

  return (
    <div className={styles.account}>
      <div
        className={styles.accountBack}
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
        <p className={styles.accountBack__text}>Назад</p>
      </div>
      <h3 className={styles.accountTitle}>Личный кабинет (мой бизнес)</h3>
      <div className={styles.accountMain}>
        <div className={styles.accountMain__data}>
          <label className={styles.accountMain__dataItem}>
            <input
              className={styles.accountMain__dataItem__input}
              type="text"
              value="Иванов Алексей Владимирович"
            />
            <svg
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 6.85162L17.5 9.48675M4 21.0813V18.4462L16.6843 5.07632C17.3994 4.32247 18.6006 4.32247 19.3157 5.07632V5.07632C19.9796 5.77609 19.9796 6.87309 19.3157 7.57286L6.5 21.0813H4Z"
                stroke="#01C5BA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </label>
          <label className={styles.accountMain__dataItem}>
            <input
              className={styles.accountMain__dataItem__input}
              type="text"
              value="ПрогрессСтрой"
            />
            <svg
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 6.85162L17.5 9.48675M4 21.0813V18.4462L16.6843 5.07632C17.3994 4.32247 18.6006 4.32247 19.3157 5.07632V5.07632C19.9796 5.77609 19.9796 6.87309 19.3157 7.57286L6.5 21.0813H4Z"
                stroke="#01C5BA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </label>
          <label className={styles.accountMain__dataItem}>
            <input
              className={styles.accountMain__dataItem__input}
              type="text"
              value="progressstroy@mail.ru"
            />
            <svg
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 6.85162L17.5 9.48675M4 21.0813V18.4462L16.6843 5.07632C17.3994 4.32247 18.6006 4.32247 19.3157 5.07632V5.07632C19.9796 5.77609 19.9796 6.87309 19.3157 7.57286L6.5 21.0813H4Z"
                stroke="#01C5BA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </label>
          <label className={styles.accountMain__dataItem}>
            <input
              className={styles.accountMain__dataItem__input}
              type="text"
              value="Почта"
            />
            <svg
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 6.85162L17.5 9.48675M4 21.0813V18.4462L16.6843 5.07632C17.3994 4.32247 18.6006 4.32247 19.3157 5.07632V5.07632C19.9796 5.77609 19.9796 6.87309 19.3157 7.57286L6.5 21.0813H4Z"
                stroke="#01C5BA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </label>
          <label className={styles.accountMain__dataItem}>
            <input
              className={styles.accountMain__dataItem__input}
              type="text"
              value="+7 (495) 123-4567"
            />
            <svg
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 6.85162L17.5 9.48675M4 21.0813V18.4462L16.6843 5.07632C17.3994 4.32247 18.6006 4.32247 19.3157 5.07632V5.07632C19.9796 5.77609 19.9796 6.87309 19.3157 7.57286L6.5 21.0813H4Z"
                stroke="#01C5BA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </label>

          <div className={styles.accountMain__dataBank}>
            <p className={styles.accountMain__dataBank__text}>
              - Банк: ОАО "Сбербанк"
            </p>
            <p className={styles.accountMain__dataBank__text}>
              - Расчетный счет: 40817810012345678901
            </p>
            <p className={styles.accountMain__dataBank__text}>
              - Корреспондентский счет: 30101810400000000225
            </p>
            <p className={styles.accountMain__dataBank__text}>
              - БИК: 044525225
            </p>
            <svg
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 6.85162L17.5 9.48675M4 21.0813V18.4462L16.6843 5.07632C17.3994 4.32247 18.6006 4.32247 19.3157 5.07632V5.07632C19.9796 5.77609 19.9796 6.87309 19.3157 7.57286L6.5 21.0813H4Z"
                stroke="#01C5BA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <label className={styles.accountMain__dataItem}>
            <input
              className={styles.accountMain__dataItem__input}
              type="text"
              value="ИНН организации: 1234567890"
            />
            <svg
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 6.85162L17.5 9.48675M4 21.0813V18.4462L16.6843 5.07632C17.3994 4.32247 18.6006 4.32247 19.3157 5.07632V5.07632C19.9796 5.77609 19.9796 6.87309 19.3157 7.57286L6.5 21.0813H4Z"
                stroke="#01C5BA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </label>

          <div className={styles.accountMain__dataCheck}>
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
            <p className={styles.accountMain__dataCheck__text}>
              Автоматически пополнять склад
            </p>
          </div>

          <div className={styles.accountMain__dataBtns}>
            <button className={styles.accountMain__dataBtns__item}>
              Индивидуальный заказ
            </button>
            <button className={styles.accountMain__dataBtns__item}>
              Выставить на продажу
            </button>
            <button className={styles.accountMain__dataBtns__item}>
              Активные слоты
            </button>
          </div>
        </div>
        <div className={styles.accountMain__history}>
          <h6 className={styles.accountMain__historyTitle}>История заказов</h6>
          <table className={styles.accountMain__historyTable}>
            <thead className={styles.accountMain__historyTable__head}>
              <tr className={styles.accountMain__historyTable__headItem}>
                <th className={styles.accountMain__historyTable__headItem__1}>
                  № заказа
                </th>
                <th className={styles.accountMain__historyTable__headItem__2}>
                  Информация о заказе
                </th>
                <th className={styles.accountMain__historyTable__headItem__3}>
                  Дата заказа
                </th>
                <th className={styles.accountMain__historyTable__headItem__4}>
                  Подробнее
                </th>
              </tr>
            </thead>
            <tbody className={styles.accountMain__historyTable__body}>
              {historyData.map((item, index) => (
                <tr
                  className={styles.accountMain__historyTable__bodyItem}
                  key={index}
                >
                  <td className={styles.accountMain__historyTable__bodyItem__1}>
                    {item.id}
                  </td>
                  <td className={styles.accountMain__historyTable__bodyItem__2}>
                    {item.name}
                  </td>
                  <td className={styles.accountMain__historyTable__bodyItem__3}>
                    {item.date}
                  </td>
                  <td className={styles.accountMain__historyTable__bodyItem__4}>
                    Подробнее
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.accountStore}>
        <h3 className={styles.accountStore__title}>Мой склад</h3>
        <table className={styles.accountStore__table}>
          <thead className={styles.accountStore__tableHead}>
            <tr className={styles.accountStore__tableHead__item}>
              <th className={styles.accountStore__tableHead__item1}>
                ID оснастки
              </th>
              <th className={styles.accountStore__tableHead__item2}>
                Наименование
              </th>
              <th className={styles.accountStore__tableHead__item3}>
                Описание товара (для чего используется, с какими станками
                совместима, из чего сделана)
              </th>
              <th className={styles.accountStore__tableHead__item4}>
                Остаток на складе
              </th>
              <th className={styles.accountStore__tableHead__item5}>
                Размер изделия
              </th>
              <th className={styles.accountStore__tableHead__item6}>
                Дата последней поставки
              </th>
              <th className={styles.accountStore__tableHead__item7}>
                Чертеж изделия
              </th>
              <th className={styles.accountStore__tableHead__item8}>
                Оформить заказ
              </th>
            </tr>
          </thead>
          <tbody className={styles.accountStore__tableBody}>
            {myStore.map((item, index) => (
              <tr key={index} className={styles.accountStore__tableBody__item}>
                <td className={styles.accountStore__tableBody__item1}>
                  {item.id}
                </td>
                <td className={styles.accountStore__tableBody__item2}>
                  {item.name}
                </td>
                <td className={styles.accountStore__tableBody__item3}>
                  {item.description}
                </td>
                <td className={styles.accountStore__tableBody__item4}>20 шт</td>
                <td className={styles.accountStore__tableBody__item5}>
                  {item.size} мм
                </td>
                <td className={styles.accountStore__tableBody__item6}>
                  {item.date}
                </td>
                <td className={styles.accountStore__tableBody__item7}>Файл</td>
                <td className={styles.accountStore__tableBody__item8}>
                  {item.date > today ? 'Оформить заказ' : 'Повторить заказ'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
