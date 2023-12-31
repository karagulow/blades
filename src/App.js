import { Route, Routes } from 'react-router-dom';

import './assets/scss/main.scss';

import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { Settings } from './pages/Settings';
import { ProductCard } from './pages/ProductCard';
import { PersonalAccount } from './pages/PersonalAccount';
import { Support } from './pages/Support';
import { ActiveSlots } from './pages/ActiveSlots';
import { IndividualOrder } from './pages/IndividualOrder';
import { Favorites } from './pages/Favorites';
import { AddProduct } from './pages/AddProduct';
import { Cart } from './pages/Cart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="settings" element={<Settings />} />
        <Route path="support" element={<Support />} />
        <Route path="products/id" element={<ProductCard />} />
        <Route path="lk" element={<PersonalAccount />} />
        <Route path="slots" element={<ActiveSlots />} />
        <Route path="individual_order" element={<IndividualOrder />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="add_product" element={<AddProduct />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
