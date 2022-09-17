import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className='drawer drawer-mobile'>
      <input id='drawer' className='drawer-toggle' type='checkbox' />
      <div className='drawer-content flex flex-col'>
        <Header className='sticky top-0 w-full flex gap-2 py-4 px-2 justify-end items-center bg-base-100' />
        <main className='bg-base-100 bg- p-6 pb-16 flex-1'>
          <Outlet />
        </main>
      </div>
      <div className='drawer-side bg-base-200'>
        <label className='drawer-overlay' htmlFor='drawer'></label>
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;
