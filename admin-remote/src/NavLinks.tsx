import { NavLink } from 'react-router-dom';

function NavLinks() {
  return (
    <>
      <li className='menu-title'>
        <span>Checkout</span>
      </li>
      <li>
        <NavLink to='/checkout/orders'>Orders</NavLink>
      </li>
    </>
  );
}

export default NavLinks;
