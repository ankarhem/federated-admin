import React, { Suspense } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { NotFound } from './components/CustomError';
// import Layout from './components/Layout';

const Layout = React.lazy(() => import('admin_host/Layout'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<Outlet />}>
              <Layout />
            </Suspense>
          }
        >
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
