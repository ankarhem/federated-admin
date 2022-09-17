import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import { NotFound } from './components/CustomError';
import Layout from './components/Layout';

const LazyDashboard = React.lazy(() => import('admin_remote/pages/Dashboard'));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='*' element={<NotFound />} />
            <Route index element={<Dashboard />} />
            <Route
              path='/checkout'
              element={
                <Suspense fallback={'Loading ...'}>
                  <LazyDashboard />
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
