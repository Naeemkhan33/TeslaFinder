import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// icons
import { ReactComponent as DashBoardIcon } from '../../assets/dashboard.svg';
import { ReactComponent as CartIcon } from '../../assets/cart.svg';
import { ReactComponent as UserIcon } from '../../assets/user.svg';
import { ReactComponent as PackIcon } from '../../assets/pack.svg';
import { ReactComponent as TimeIcon } from '../../assets/time.svg';
import UserDropdown from '../UserDropdown';

const SidebarPrimary = ({
  containerClassName,
  sidebarClassName,
  onOverlay,
}) => {
  const links = [
    { link: '/dashboard', icon: <DashBoardIcon />, name: 'Dashboard' },
    {
      link: '/past-inventory',
      icon: <CartIcon />,
      name: 'Past Inventory',
    },
    { link: '/profile', icon: <UserIcon />, name: 'Profile' },
    { link: '/packages', icon: <PackIcon />, name: 'Packages' },
    { link: '/billings', icon: <TimeIcon />, name: 'Billings' },
  ];

  return (
    <section className={`z-30 ${containerClassName}`}>
      <aside
        className={`sidebar overflow-auto sticky top-0 w-64 transform lg:translate-x-0 transition-transform duration-250 ease-in bg-white ${sidebarClassName}`}
      >
        <div className='sidebar-header px-10 py-4'>
          <div className='inline-flex'>
            <Link className='inline-flex flex-row items-center' to='/'>
              <span className='sr-only'>Logo</span>
              <img
                className='lg:h-20 w-auto sm:h-20'
                src='/assets/images/logo.png'
                alt='..'
              />
            </Link>
          </div>
        </div>
        <div className='sidebar-content px-6 py-6'>
          <li className='mb-10 flex lg:hidden'>
            <UserDropdown />
          </li>
          <ul className='flex flex-col w-full'>
            {links.map((items) => (
              <li className='my-px'>
                <NavLink
                  exact
                  to={items.link}
                  activeClassName='bg-primary-1000 text-white-1'
                  className='flex flex-row items-center p-4 rounded-xl text-gray-500 hover:bg-primary-1000 hover:text-white'
                >
                  <span className='flex items-center justify-center h-8 w-8'>
                    {items.icon}
                  </span>
                  <span className='ml-3 capitalize'>{items.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <div
        onClick={onOverlay}
        className={`flex-1 bg-primary-400  transform lg:translate-x-0 transition-transform duration-250 ease-in ${sidebarClassName}`}
      />
    </section>
  );
};

export default SidebarPrimary;
