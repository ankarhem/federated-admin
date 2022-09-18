import {
  createBrowserRouter,
  createRoutesFromElements,
  NavLink,
  Route,
} from 'react-router-dom';
import { NotFound } from './components/CustomError';

// TODO: Add a nprogress loading spinner

// const LazyOrders = React.lazy(() => import('admin_remote/pages/Orders'));
import CheckoutNav from 'admin_remote/NavLinks';
import Orders, { loader as ordersLoader } from 'admin_remote/pages/Orders';
import Dashboard from '../pages/Dashboard';
import Layout from './components/Layout';

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
      <Route
        path='/checkout/orders'
        element={<Orders />}
        loader={ordersLoader}
      />
    </Route>
  )
);
