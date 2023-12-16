import { Route, Routes } from 'react-router-dom';

import './assets/scss/main.scss';

import { MainLayout } from './layouts/MainLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}></Route>
    </Routes>
  );
}

export default App;
