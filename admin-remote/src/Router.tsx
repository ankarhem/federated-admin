import React, { Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';
import Orders, { loader } from '../pages/Orders';
import { NotFound } from './components/CustomError';
import NavLinks from './NavLinks';

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

export const router = createBrowserRouter(
  createRoutesFromElements(
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
      <Route path='/checkout/orders' element={<Orders />} loader={loader} />
    </Route>
  )
);
