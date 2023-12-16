import styles from './Search.module.scss';

export const Search = () => {
  return (
    <label className={styles.search} for="search">
      <input
        className={styles.searchInput}
        type="text"
        name="search"
        id="search"
        placeholder="Найти..."
      />
      <div className={styles.searchIcon}>
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.79932 16.1514C13.4237 16.1514 16.3618 13.2132 16.3618 9.58887C16.3618 5.9645 13.4237 3.02637 9.79932 3.02637C6.17495 3.02637 3.23682 5.9645 3.23682 9.58887C3.23682 13.2132 6.17495 16.1514 9.79932 16.1514Z"
            stroke="#9C99AE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.4399 14.2295L18.2368 18.0264"
            stroke="#9C99AE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </label>
  );
};
