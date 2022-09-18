import { NavLink, Outlet } from 'react-router-dom';
import Header from './Header';
import NorceLogo from './Icons/norce.svg';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='drawer drawer-mobile'>
      <input id='drawer' className='drawer-toggle' type='checkbox' />
      <div className='drawer-content flex flex-col'>
        <Header className='sticky top-0 w-full flex gap-2 py-4 px-2 justify-end items-center' />
        <main className='bg-base-100 bg- p-6 pb-16 flex-1'>
          <Outlet />
        </main>
      </div>
      <div className='drawer-side bg-base-200'>
        <label className='drawer-overlay' htmlFor='drawer'></label>

        <aside>
          <NavLink to='/'>
            <NorceLogo className='h-[76px] pl-2 pr-24 py-2.5' />
          </NavLink>
          <div className='h-4' />

          {children}
        </aside>
      </div>
    </div>
  );
};

export default Layout;
