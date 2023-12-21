import { Route, Routes } from 'react-router-dom';

import './assets/scss/main.scss';

import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { Settings } from './pages/Settings';
import { ProductCard } from './pages/ProductCard';
import { PersonalAccount } from './pages/PersonalAccount';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="settings" element={<Settings />} />
        <Route path="products/id" element={<ProductCard />} />
        <Route path="lk" element={<PersonalAccount />} />
      </Route>
    </Routes>
  );
}

export default App;
