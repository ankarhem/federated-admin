import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import { NotFound } from './components/CustomError';
import Layout from './components/Layout';

// TODO: Add a nprogress loading spinner

const LazyOrders = React.lazy(() => import('admin_remote/pages/Orders'));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
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
