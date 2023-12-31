import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../components/Header';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};
