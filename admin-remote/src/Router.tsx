import React, { Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  NavLink,
  Outlet,
  Route,
} from 'react-router-dom';
import Orders, { loader as orderLoader } from '../pages/Orders';
import { NotFound } from './components/CustomError';

const Layout = React.lazy(() => import('admin_host/Layout'));

interface Link {
  path: string;
  title: string;
}

export const exposedNavigation: Link[] = [
  {
    title: 'Orders',
    path: '/checkout/orders',
  },
];

const localNavigation: Link[] = [
  {
    title: 'Hidden page',
    path: '/checkout/hidden',
  },
];

const navigation = [...exposedNavigation, ...localNavigation];

const LocalNav = () => {
  return (
    <nav>
      <ul className='menu menu-compact p-4 rounded-box'>
        <li className='menu-title'>
          <span>Checkout</span>
        </li>
        {navigation.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const exposedRoutes: React.ComponentProps<typeof Route>[] = [
  {
    path: '/checkout/orders',
    element: <Orders />,
    loader: orderLoader,
  },
];

const localRoutes: React.ComponentProps<typeof Route>[] = [
  {
    path: '/checkout/hidden',
    element: <div>Hidden page</div>,
  },
];

const routes = [...exposedRoutes, ...localRoutes];

export const localRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
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
        {routes.map((route, i) => (
          <Route key={`${route.id}-${i}`} {...route} />
        ))}
      </Route>
    </>
  )
);
