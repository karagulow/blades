import { CategoryItem } from '../../components/CategoryItem';
import { ProductItem } from '../../components/ProductItem';
import styles from './Home.module.scss';

import image1 from '../../assets/img/product-1.png';
import image2 from '../../assets/img/product-2.png';
import image3 from '../../assets/img/product-3.png';
import image4 from '../../assets/img/product-4.png';
import image5 from '../../assets/img/product-5.png';
import image6 from '../../assets/img/product-6.png';

export const Home = () => {
  return (
    <div className={styles.home}>
      <h3 className={styles.homeTitle}>Категории товаров</h3>
      <ul className={styles.homeCategories_list}>
        <CategoryItem
          image={image1}
          text="Пластиковая оснастка для литья"
          description="Используется для производства различных пластиковых деталей, таких как автомобильные компоненты, детали бытовой техники."
        />
        <CategoryItem
          image={image4}
          text="Пластиковая оснастка для 3D-печати"
          description="Используется для создания трехмерных объектов из пластика."
        />
        <CategoryItem
          image={image3}
          text="Пластиковая оснастка для вакуумного формования"
          description="Используется для изготовления пластиковых изделий методом вакуумного формования."
        />
        <CategoryItem
          image={image2}
          text="Пластиковая оснастка для выдувного формования"
          description="Применяется для производства полых пластиковых изделий, таких как бутылки и контейнеры."
        />
        <CategoryItem
          image={image5}
          text="Пластиковая оснастка для ротационного формования"
          description="Предназначена для изготовления крупногабаритных изделий из пластика методом ротационного формования."
        />
        <CategoryItem image={image6} text="Оснастка под заказ" btn={true} />
      </ul>
      <h3 className={styles.homeTitle}>Каталог апробированных решений</h3>
      <ul className={styles.homeProduct_list}>
        <ProductItem image={image1} price="2100" url="/products/id" />
        <ProductItem image={image2} price="2400" url="/products/id" />
        <ProductItem image={image3} price="1600" url="/products/id" />
        <ProductItem image={image4} price="1900" url="/products/id" />
        <ProductItem image={image5} price="1700" url="/products/id" />
        <ProductItem image={image2} price="1200" url="/products/id" />
        <ProductItem image={image2} price="1200" url="/products/id" />
        <ProductItem image={image5} price="3200" url="/products/id" />
        <ProductItem image={image6} price="1500" url="/products/id" />
        <ProductItem image={image3} price="1700" url="/products/id" />
        <ProductItem image={image4} price="1800" url="/products/id" />
        <ProductItem image={image3} price="1100" url="/products/id" />
      </ul>
    </div>
  );
};
