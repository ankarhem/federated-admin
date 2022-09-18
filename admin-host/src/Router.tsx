import {
  createBrowserRouter,
  createRoutesFromElements,
  NavLink,
  Route,
} from 'react-router-dom';
import { NotFound } from './components/CustomError';

// TODO: Add a nprogress loading spinner

// const LazyOrders = React.lazy(() => import('admin_remote/pages/Orders'));
import {
  exposedNavigation as checkoutNavigation,
  exposedRoutes as checkoutRoutes,
} from 'admin_remote/Router';
import Dashboard from '../pages/Dashboard';
import Layout from './components/Layout';

interface Link {
  path: string;
  title: string;
}

const Nav = () => {
  return (
    <nav>
      <ul className='menu menu-compact p-4 rounded-box'>
        {/* Checkout Squad */}
        <li className='menu-title'>
          <span>Checkout</span>
        </li>
        {checkoutNavigation.map((link: Link) => (
          <li key={link.path}>
            <NavLink to={link.path}>{link.title}</NavLink>
          </li>
        ))}

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

const routes: React.ComponentProps<typeof Route>[] = [...checkoutRoutes];

export const router = createBrowserRouter(
  createRoutesFromElements(
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
      {routes.map((route, i) => (
        <Route key={`${route.id}-${i}`} {...route} />
      ))}
    </Route>
  )
);
