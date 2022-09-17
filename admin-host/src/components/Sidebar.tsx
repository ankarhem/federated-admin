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
      <ul className='menu flex flex-col p-0 px-4'>
        <li>
          <NavLink className='uppercase' to='/checkout'>
            Checkout
          </NavLink>
        </li>
        <li>
          <NavLink className='uppercase' to='/products'>
            Products
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
