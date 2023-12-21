import { Route, Routes } from 'react-router-dom';

import './assets/scss/main.scss';

import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { Settings } from './pages/Settings';
import { ProductCard } from './pages/ProductCard';
import { PersonalAccount } from './pages/PersonalAccount';
import { Support } from './pages/Support';
import { ActiveSlots } from './pages/ActiveSlots';

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
      </Route>
    </Routes>
  );
}

export default App;
