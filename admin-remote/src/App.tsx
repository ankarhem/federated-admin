import React, { Suspense } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Orders from '../pages/Orders';
import { NotFound } from './components/CustomError';
import NavLinks from './NavLinks';
// import Layout from './components/Layout';

const Layout = React.lazy(() => import('admin_host/Layout'));

const LocalNav = () => {
  return (
    <nav>
      <ul className='menu menu-compact p-4 rounded-box'>
        {/* Checkout Squad */}
        <NavLinks />
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<Outlet />}>
              <Layout>
                <LocalNav />
              </Layout>
            </Suspense>
          }
        >
          <Route path='*' element={<NotFound />} />
          <Route path='/checkout/orders' element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
