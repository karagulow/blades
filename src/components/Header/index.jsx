import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

import { Search } from '../Search';
import { Menu } from '../Menu';
import { Login } from '../Login';
import { Register } from '../Register';
import { PasswordRecovery } from '../PasswordRecovery';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [recoveryOpen, setRecoveryOpen] = useState(false);

  const [isAuth, setIsAuth] = useState(false);

  const [authClick, setAuthClick] = useState(true);
  const [registerClick, setRegisterClick] = useState(false);

  return (
    <>
      <div className={styles.fixedHeader}>
        <div className="container">
          <header className={styles.header}>
            <div className={styles.headerLeft}>
              <Link
                to="/"
                className={styles.headerLeft__logo}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <svg
                  width="108"
                  height="30"
                  viewBox="0 0 108 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 22.7723L0.747404 22.6025C1.51746 22.3533 2.02705 22.0476 2.27619 21.6852C2.54797 21.3228 2.68386 20.6774 2.68386 19.7488V7.8922C2.68386 6.66918 2.58194 5.68396 2.37811 4.93656C2.17427 4.18915 1.82321 3.47572 1.32494 2.79626L0.917269 2.21872L1.32494 1.7431H10.7354C12.5247 1.7431 13.6911 1.52794 14.2347 1.09762L14.8122 0.689941L15.2878 1.09762V6.56726L14.2347 6.94096L14.0648 6.19356C13.861 5.44615 13.6345 4.87994 13.3853 4.49491C13.1588 4.10988 12.8418 3.8381 12.4341 3.67956C12.0264 3.52102 11.4489 3.44175 10.7015 3.44175H7.71186C6.91915 3.44175 6.39824 3.60029 6.1491 3.91737C5.89997 4.23445 5.7754 4.86861 5.7754 5.81985V18.186C5.7754 19.8846 6.1038 20.9831 6.76061 21.4814C7.44007 21.9796 8.2441 22.2288 9.17269 22.2288C10.5996 22.2288 11.7207 21.7758 12.536 20.8699C13.3514 19.9413 13.759 18.7296 13.759 17.2348C13.759 15.8758 13.3061 14.7434 12.4001 13.8375C11.5168 12.9089 10.3617 12.4446 8.93488 12.4446C8.39131 12.4446 7.92702 12.4899 7.54199 12.5805C7.15696 12.6711 6.91915 12.7164 6.82856 12.7164C6.55678 12.7164 6.42088 12.4785 6.42088 12.0029C6.42088 11.6406 6.70399 11.3688 7.27021 11.1876C7.83642 11.0064 8.53853 10.9158 9.37653 10.9158C10.894 10.9158 12.2189 11.2102 13.3514 11.7991C14.5064 12.388 15.3897 13.1807 16.0013 14.1772C16.6354 15.1511 16.9525 16.2156 16.9525 17.3707C16.9525 19.3864 16.3183 20.9718 15.05 22.1269C13.8043 23.2593 11.7886 23.8255 9.00283 23.8255H0.407675L0 22.7723Z"
                    fill="#01C5BA"
                  />
                  <path
                    d="M21.0247 24.2672C20.2094 24.2672 19.5526 24.018 19.0543 23.5198C18.556 22.9988 18.3069 22.3194 18.3069 21.4814C18.3069 20.8925 18.4428 20.4282 18.7146 20.0885C18.9864 19.7488 19.3487 19.5789 19.8017 19.5789C20.2094 19.5789 20.4472 19.896 20.5151 20.5301C20.5604 20.8472 20.6624 21.1303 20.8209 21.3795C21.0021 21.6059 21.2625 21.7192 21.6023 21.7192C23.3009 21.7192 24.3994 18.4804 24.8976 12.0029L24.9316 11.4254C24.9316 10.8139 24.7957 10.3949 24.5239 10.1684C24.2522 9.9419 23.7086 9.77204 22.8932 9.6588L22.2478 9.45496L22.5875 8.53769H34.8517L35.2594 8.97934L34.8517 9.48893C34.3761 10.1231 34.0364 10.7912 33.8325 11.4933C33.6513 12.1954 33.5607 13.1127 33.5607 14.2451V20.2923C33.5607 21.085 33.6853 21.6399 33.9344 21.957C34.1836 22.2741 34.6479 22.5345 35.3273 22.7384L35.9049 22.8743L35.5991 23.8255H28.6686L28.3289 22.8743L28.9744 22.6704C29.6992 22.4666 30.1861 22.1948 30.4352 21.8551C30.6844 21.5154 30.8089 20.9038 30.8089 20.0205V12.3087C30.8089 11.4254 30.6844 10.8478 30.4352 10.5761C30.2087 10.3043 29.7218 10.1684 28.9744 10.1684H28.4308C27.842 10.1684 27.4003 10.2477 27.1059 10.4062C26.8341 10.5421 26.6869 10.8365 26.6642 11.2895C26.3698 14.8227 25.9282 17.5405 25.3393 19.443C24.7731 21.3455 24.1276 22.6251 23.4028 23.2819C22.7007 23.9388 21.908 24.2672 21.0247 24.2672Z"
                    fill="#01C5BA"
                  />
                  <path
                    d="M45.8507 24.2672C44.4239 24.2672 43.1782 23.9388 42.1137 23.2819C41.0492 22.6251 40.2225 21.7079 39.6337 20.5301C39.0448 19.3298 38.7504 17.9482 38.7504 16.3854C38.7504 14.7547 39.0788 13.3165 39.7356 12.0709C40.3924 10.8252 41.321 9.86263 42.5214 9.18318C43.7444 8.50372 45.1486 8.16399 46.734 8.16399C48.41 8.16399 49.701 8.60564 50.6069 9.48893C51.5355 10.3722 51.9998 11.4367 51.9998 12.6824C51.9998 13.543 51.762 14.3697 51.2864 15.1624C50.8334 15.9551 50.154 16.6006 49.248 17.0989C48.3647 17.5971 47.3229 17.8463 46.1225 17.8463C45.443 17.8463 44.707 17.733 43.9143 17.5065C43.1216 17.2574 42.7252 16.895 42.7252 16.4194C42.7252 16.2382 42.7705 16.0797 42.8611 15.9438C42.9517 15.8079 43.0536 15.74 43.1669 15.74C43.2348 15.74 43.4386 15.8079 43.7784 15.9438C44.1407 16.057 44.605 16.1137 45.1713 16.1137C46.4169 16.1137 47.3795 15.7739 48.059 15.0945C48.7384 14.415 49.0781 13.5997 49.0781 12.6484C49.0781 11.8331 48.8064 11.131 48.2628 10.5421C47.7419 9.95323 47.0398 9.6588 46.1565 9.6588C44.8202 9.6588 43.7784 10.2477 43.031 11.4254C42.3062 12.5805 41.9438 14.2338 41.9438 16.3854C41.9438 18.22 42.3289 19.6582 43.0989 20.7C43.8916 21.7192 45.024 22.2288 46.4962 22.2288C48.3081 22.2288 49.8029 21.6399 50.9806 20.4622C51.0486 20.3942 51.1392 20.3603 51.2524 20.3603C51.4336 20.3603 51.6148 20.4509 51.796 20.6321C51.9998 20.8132 52.1017 21.0058 52.1017 21.2096C52.1017 21.2775 52.0791 21.3455 52.0338 21.4134C51.9885 21.4587 51.9658 21.4927 51.9658 21.5153C51.1958 22.4213 50.2785 23.1121 49.214 23.5877C48.1722 24.0407 47.0511 24.2672 45.8507 24.2672Z"
                    fill="#01C5BA"
                  />
                  <path
                    d="M55.1428 22.8743L55.7883 22.6704C56.4904 22.4666 56.9547 22.2061 57.1812 21.8891C57.4304 21.5493 57.5549 20.9491 57.5549 20.0885V12.2747C57.5549 11.4141 57.4304 10.8139 57.1812 10.4741C56.9547 10.1344 56.4904 9.86263 55.7883 9.6588L55.1428 9.45496L55.4826 8.53769H61.6317L62.0054 8.94536L61.6317 9.45496C61.1561 10.1118 60.8163 10.7912 60.6125 11.4933C60.4313 12.1728 60.3407 13.0901 60.3407 14.2451V18.5597L67.7808 11.5613C67.6675 10.9498 67.4863 10.5194 67.2372 10.2703C67.0107 10.0212 66.6483 9.81734 66.1501 9.6588L65.5386 9.45496L65.8103 8.53769H72.0274L72.3671 8.94536L72.0274 9.45496C71.5518 10.1118 71.212 10.7912 71.0082 11.4933C70.827 12.1728 70.7364 13.0901 70.7364 14.2451V20.2923C70.7364 21.1077 70.8497 21.6626 71.0761 21.957C71.3026 22.2514 71.7669 22.5119 72.469 22.7384L73.0466 22.9082L72.7748 23.8255H65.8103L65.5386 22.8743L66.1501 22.6704C66.8748 22.4666 67.3504 22.2061 67.5769 21.8891C67.8261 21.5493 67.9506 20.9491 67.9506 20.0885V13.8714L60.5106 20.8699C60.6012 21.504 60.7597 21.9457 60.9862 22.1948C61.2353 22.4213 61.609 22.6025 62.1073 22.7384L62.7188 22.9082L62.413 23.8255H55.4826L55.1428 22.8743ZM64.0437 6.2615C62.5716 6.2615 61.4052 6.02369 60.5445 5.54807C59.7065 5.0498 59.2875 4.33637 59.2875 3.40778C59.2875 2.75097 59.5027 2.23005 59.933 1.84502C60.3633 1.43735 60.8843 1.23351 61.4958 1.23351C61.6543 1.23351 61.7902 1.27881 61.9035 1.3694C62.0167 1.46 62.0733 1.56191 62.0733 1.67516C62.0733 1.7431 61.9941 1.91297 61.8355 2.18475C61.677 2.45654 61.5977 2.83024 61.5977 3.30586C61.5977 4.41564 62.413 4.97053 64.0437 4.97053C64.927 4.97053 65.5725 4.82332 65.9802 4.52888C66.3879 4.23445 66.5917 3.8381 66.5917 3.33983C66.5917 2.86421 66.5125 2.49051 66.3539 2.21872C66.218 1.92429 66.1501 1.7431 66.1501 1.67516C66.1501 1.53927 66.1954 1.43735 66.286 1.3694C66.3992 1.27881 66.5577 1.23351 66.7616 1.23351C67.3278 1.23351 67.8147 1.43735 68.2224 1.84502C68.6527 2.23005 68.8679 2.75097 68.8679 3.40778C68.8679 4.33637 68.4376 5.0498 67.5769 5.54807C66.7163 6.02369 65.5386 6.2615 64.0437 6.2615Z"
                    fill="#01C5BA"
                  />
                  <path
                    d="M91.0262 28.7176C90.6185 26.9284 90.1203 25.66 89.5314 24.9126C88.9426 24.1879 88.0366 23.8255 86.8136 23.8255H79.9171C79.0791 23.8255 78.4109 23.9954 77.9127 24.3351C77.4144 24.6748 77.0067 25.1731 76.6896 25.8299C76.3726 26.5094 76.0442 27.4719 75.7044 28.7176L75.5006 29.3291L74.5494 28.9554V22.6365C75.8177 22.5006 76.7689 22.0702 77.4031 21.3455C78.0372 20.6207 78.4676 19.7035 78.694 18.5937C78.9432 17.4612 79.181 15.7739 79.4075 13.5317L79.5773 12.0029C79.6453 11.6632 79.6793 11.3801 79.6793 11.1536C79.6793 10.6553 79.5321 10.3156 79.2376 10.1344C78.9658 9.95323 78.4449 9.79469 77.6749 9.6588L76.9954 9.45496L77.3351 8.53769H90.6185L90.9922 8.97934L90.6185 9.45496C90.1429 10.0665 89.8145 10.7233 89.6333 11.4254C89.4748 12.1048 89.3955 13.0448 89.3955 14.2451V20.8359C89.3955 21.4248 89.6447 21.8777 90.1429 22.1948C90.6638 22.4892 91.332 22.6365 92.1473 22.6365V28.9894L91.1961 29.3631L91.0262 28.7176ZM84.7752 22.2288C85.5226 22.2288 86.0096 22.0929 86.236 21.8211C86.4625 21.5493 86.5758 20.9718 86.5758 20.0885V12.3427C86.5758 11.482 86.4625 10.9158 86.236 10.644C86.0096 10.3722 85.5226 10.2363 84.7752 10.2363H83.6201C83.0313 10.2363 82.5896 10.3156 82.2952 10.4741C82.0234 10.61 81.8649 10.9045 81.8196 11.3574C81.5478 13.7355 81.2873 15.6154 81.0382 16.997C80.789 18.3559 80.4606 19.477 80.053 20.3603C79.6453 21.2436 79.113 21.8664 78.4562 22.2288H84.7752Z"
                    fill="#01C5BA"
                  />
                  <path
                    d="M101.829 24.2672C100.402 24.2672 99.122 23.9161 97.9896 23.214C96.8572 22.5119 95.9626 21.5493 95.3057 20.3263C94.6716 19.1033 94.3545 17.733 94.3545 16.2156C94.3545 14.5849 94.6603 13.1693 95.2718 11.969C95.8833 10.7459 96.7553 9.80601 97.8877 9.1492C99.0201 8.49239 100.334 8.16399 101.829 8.16399C103.414 8.16399 104.705 8.54901 105.701 9.31907C106.721 10.0665 107.23 11.0404 107.23 12.2407C107.23 13.124 106.947 13.8488 106.381 14.415C105.815 14.9586 105.09 15.2304 104.207 15.2304C104.003 15.2304 103.856 15.2077 103.765 15.1624C103.674 15.1171 103.629 15.0378 103.629 14.9246C103.629 14.8567 103.697 14.7094 103.833 14.483C103.991 14.2565 104.127 13.9847 104.241 13.6676C104.354 13.3279 104.41 12.8975 104.41 12.3766C104.41 11.5613 104.139 10.9271 103.595 10.4741C103.074 9.99853 102.372 9.76071 101.489 9.76071C100.311 9.76071 99.3599 10.3383 98.6351 11.4933C97.933 12.6258 97.5819 14.1319 97.5819 16.0117C97.5819 17.9142 98.0009 19.4204 98.8389 20.5301C99.6996 21.6399 100.855 22.1948 102.304 22.1948C103.052 22.1948 103.754 22.0702 104.41 21.8211C105.067 21.572 105.724 21.1756 106.381 20.6321C106.426 20.5868 106.517 20.5641 106.653 20.5641C106.834 20.5641 107.004 20.666 107.162 20.8699C107.343 21.0511 107.434 21.2436 107.434 21.4474C107.434 21.6059 107.411 21.6852 107.366 21.6852C106.641 22.5232 105.792 23.1687 104.818 23.6217C103.867 24.052 102.87 24.2672 101.829 24.2672Z"
                    fill="#01C5BA"
                  />
                </svg>
              </Link>
              {menuOpen ? (
                <div
                  className={styles.headerLeft__menu}
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  <svg
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.19092 1.62207L24 24.4312M24 1.62207L1.19092 24.4312"
                      stroke="#01C5BA"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              ) : (
                <div
                  className={styles.headerLeft__menu}
                  onClick={() => {
                    setMenuOpen(true);
                  }}
                >
                  <svg
                    width="33"
                    height="22"
                    viewBox="0 0 33 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.33887H32M1 11.0264H32M1 20.7139H32"
                      stroke="#01C5BA"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
            <div className={styles.headerCenter}>
              <Search />
            </div>
            <div className={styles.headerRight}>
              <div className={styles.headerRight__select}>
                <p className={styles.headerRight__selectText}>Rus</p>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.47363 7.52637L9.88437 11.9371C10.2098 12.2625 10.7374 12.2625 11.0629 11.9371L15.4736 7.52637"
                    stroke="#01C5BA"
                    stroke-width="1.66666"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.headerRight__select}>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.19746 3.73486C7.37341 2.59586 8.78987 2.02637 10.4469 2.02637C12.1039 2.02637 13.5137 2.58939 14.6763 3.71545C15.8389 4.8415 16.4201 6.20699 16.4201 7.81194C16.4201 8.61442 16.213 9.53337 15.7988 10.5688C15.3845 11.6043 14.8834 12.575 14.2954 13.481C13.7074 14.3871 13.1262 15.2348 12.5516 16.0244C11.9769 16.8139 11.4892 17.4416 11.0883 17.9076L10.4469 18.5677C10.2865 18.3865 10.0727 18.147 9.80546 17.8493C9.5382 17.5516 9.05714 16.9563 8.36226 16.0632C7.66738 15.1701 7.05937 14.3029 6.53821 13.4616C6.01705 12.6203 5.54267 11.669 5.11506 10.6077C4.68744 9.54632 4.47363 8.61442 4.47363 7.81194C4.47363 6.20699 5.04824 4.84797 6.19746 3.73486Z"
                    stroke="#01C5BA"
                    stroke-width="1.83792"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.3658 7.99962C11.3658 8.50715 10.9544 8.91858 10.4469 8.91858C9.93936 8.91858 9.52792 8.50715 9.52792 7.99962C9.52792 7.49209 9.93936 7.08066 10.4469 7.08066C10.9544 7.08066 11.3658 7.49209 11.3658 7.99962Z"
                    stroke="#01C5BA"
                    stroke-width="1.83792"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className={styles.headerRight__selectText}>Москва</p>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.47363 7.52637L9.88437 11.9371C10.2098 12.2625 10.7374 12.2625 11.0629 11.9371L15.4736 7.52637"
                    stroke="#01C5BA"
                    stroke-width="1.66666"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              {isAuth ? (
                <div className={styles.headerRight__user}>
                  <Link
                    to="/cart"
                    className={styles.headerRight__userLink}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.46068 8.158H28.851C30.0432 8.158 30.7906 9.44588 30.1991 10.481L26.21 17.4618C25.6572 18.4293 24.6282 19.0264 23.5139 19.0264H12.8949M12.8949 19.0264L10.498 22.8614C9.85169 23.8956 10.5952 25.237 11.8146 25.237H28.4212M12.8949 19.0264L6.76632 6.76928C6.24032 5.71727 5.16508 5.05273 3.98889 5.05273H3.5791M12.8949 31.4475C12.8949 32.305 12.1998 33.0001 11.3423 33.0001C10.4848 33.0001 9.78963 32.305 9.78963 31.4475C9.78963 30.59 10.4848 29.8949 11.3423 29.8949C12.1998 29.8949 12.8949 30.59 12.8949 31.4475ZM28.4212 31.4475C28.4212 32.305 27.7261 33.0001 26.8686 33.0001C26.0111 33.0001 25.316 32.305 25.316 31.4475C25.316 30.59 26.0111 29.8949 26.8686 29.8949C27.7261 29.8949 28.4212 30.59 28.4212 31.4475Z"
                        stroke="#01C5BA"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Link>
                  <Link
                    to="/lk"
                    className={styles.headerRight__userLink}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    <svg
                      width="33"
                      height="34"
                      viewBox="0 0 33 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.2367 19.4619C17.9592 19.4619 19.6111 18.7776 20.8291 17.5596C22.0471 16.3416 22.7314 14.6896 22.7314 12.9671C22.7314 11.2446 22.0471 9.59267 20.8291 8.37467C19.6111 7.15668 17.9592 6.47241 16.2367 6.47241C14.5142 6.47241 12.8622 7.15668 11.6442 8.37467C10.4262 9.59267 9.74194 11.2446 9.74194 12.9671C9.74194 14.6896 10.4262 16.3416 11.6442 17.5596C12.8622 18.7776 14.5142 19.4619 16.2367 19.4619ZM16.2367 17.8382C16.8763 17.8382 17.5098 17.7122 18.1007 17.4674C18.6917 17.2226 19.2287 16.8638 19.681 16.4115C20.1333 15.9592 20.4921 15.4222 20.7369 14.8312C20.9817 14.2402 21.1077 13.6068 21.1077 12.9671C21.1077 12.3275 20.9817 11.6941 20.7369 11.1031C20.4921 10.5121 20.1333 9.97511 19.681 9.52279C19.2287 9.07047 18.6917 8.71167 18.1007 8.46688C17.5098 8.22209 16.8763 8.09609 16.2367 8.09609C14.9448 8.09609 13.7058 8.60929 12.7923 9.52279C11.8788 10.4363 11.3656 11.6753 11.3656 12.9671C11.3656 14.259 11.8788 15.498 12.7923 16.4115C13.7058 17.325 14.9448 17.8382 16.2367 17.8382Z"
                        fill="#01C5BA"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M32.4736 17.0264C32.4736 25.994 25.2044 33.2632 16.2368 33.2632C7.26922 33.2632 0 25.994 0 17.0264C0 8.05877 7.26922 0.789551 16.2368 0.789551C25.2044 0.789551 32.4736 8.05877 32.4736 17.0264ZM24.0548 29.3745C21.7175 30.8582 19.0053 31.644 16.2368 31.6395C13.402 31.6441 10.6276 30.8201 8.2548 29.2689C8.05996 29.0254 7.86268 28.7737 7.66215 28.5139C7.4304 28.2094 7.30542 27.8371 7.30657 27.4545C7.30657 26.5801 7.93493 25.847 8.77519 25.7244C14.3322 24.9126 18.1584 24.9824 23.7228 25.7528C24.1258 25.8113 24.494 26.0135 24.7595 26.3223C25.0249 26.631 25.1697 27.0254 25.1671 27.4325C25.1671 27.8222 25.0331 28.2005 24.7912 28.4961C24.5419 28.7997 24.296 29.0928 24.0548 29.3745ZM26.7786 27.1468C26.6487 25.627 25.495 24.3589 23.9452 24.1446C18.2494 23.3563 14.2681 23.2808 8.54057 24.1178C6.98183 24.3451 5.83308 25.6246 5.69669 27.1484C3.07876 24.4296 1.61852 20.8007 1.62368 17.0264C1.62368 8.95586 8.16631 2.41323 16.2368 2.41323C24.3073 2.41323 30.85 8.95586 30.85 17.0264C30.8551 20.7999 29.3955 24.4281 26.7786 27.1468Z"
                        fill="#01C5BA"
                      />
                    </svg>
                  </Link>
                </div>
              ) : (
                <button
                  className={styles.headerRight__auth}
                  onClick={() => {
                    setLoginOpen(true);
                    setMenuOpen(false);
                  }}
                >
                  Войти
                </button>
              )}
            </div>
          </header>
        </div>
      </div>
      {menuOpen && (
        <Menu
          isAuth={isAuth}
          setMenuOpen={setMenuOpen}
          setLoginOpen={setLoginOpen}
          setAuthClick={setAuthClick}
          setRegisterClick={setRegisterClick}
        />
      )}
      {loginOpen && (
        <Login
          setLoginOpen={setLoginOpen}
          setIsAuth={setIsAuth}
          setRegisterOpen={setRegisterOpen}
          setRecoveryOpen={setRecoveryOpen}
          authClick={authClick}
          registerClick={registerClick}
        />
      )}
      {registerOpen && <Register setRegisterOpen={setRegisterOpen} />}
      {recoveryOpen && <PasswordRecovery setRecoveryOpen={setRecoveryOpen} />}
    </>
  );
};
