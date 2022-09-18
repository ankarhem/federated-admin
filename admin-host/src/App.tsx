import React, { Suspense } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import { NotFound } from './components/CustomError';
import Layout from './components/Layout';

// TODO: Add a nprogress loading spinner

const LazyOrders = React.lazy(() => import('admin_remote/pages/Orders'));
const CheckoutNav = React.lazy(() => import('admin_remote/NavLinks'));

const Nav = () => {
  return (
    <nav>
      <ul className='menu menu-compact p-4 rounded-box'>
        {/* Checkout Squad */}
        <CheckoutNav />

        {/* Product Squad */}
        <li className='menu-title'>
          <span>Products</span>
        </li>
        <li>
          <NavLink to='/products'>List products</NavLink>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Layout>
                <Nav />
              </Layout>
            }
          >
            <Route path='*' element={<NotFound />} />
            <Route index element={<Dashboard />} />
            <Route
              path='/checkout/orders'
              element={
                <Suspense fallback={'Loading...'}>
                  <LazyOrders />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
