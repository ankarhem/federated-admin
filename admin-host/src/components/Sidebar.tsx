import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import NorceLogo from './Icons/norce.svg';

const Sidebar = ({ className }: { className?: string }) => {
  return (
    <aside className={clsx(className)}>
      <NavLink to='/'>
        <NorceLogo className='h-[76px] pl-2 pr-24 py-2.5' />
      </NavLink>
      <div className='h-4' />

      <ul className='menu menu-compact p-2 rounded-box'>
        {/* Checkout Squad */}
        <li className='menu-title'>
          <span>Checkout</span>
        </li>
        <li>
          <NavLink to='/checkout/orders'>Orders</NavLink>
        </li>

        {/* Product Squad */}
        <li className='menu-title'>
          <span>Products</span>
        </li>
        <li>
          <NavLink to='/products'>List products</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
