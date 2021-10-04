import React from 'react';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ButtonPrimary } from '../ButtonPrimary';

const NavbarLogin = () => {
  const location = useLocation();

  const hideNavbarLogin =
    location.pathname === '/login' ||
    location.pathname === '/dashboard' ||
    location.pathname === '/past-inventory' ||
    location.pathname === '/billings' ||
    location.pathname === '/packages' ||
    location.pathname === '/profile' ||
    location.pathname === '/register';

  if (hideNavbarLogin) {
    return null;
  }

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/about' },
    { name: 'Alert Packages', href: '/packages' },
  ];

  return (
    <div className='bg-white'>
      <div className='container mx-auto px-4 sm:px-12 lg:px-14'>
        <Popover>
          <div className='relative py-3 lg:py-7'>
            <nav
              className='relative flex items-center justify-between sm:h-10 lg:justify-start'
              aria-label='Global'
            >
              <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
                <div className='flex items-center justify-between w-full lg:w-auto'>
                  <Link to='/'>
                    <span className='sr-only'>Logo</span>
                    <img
                      className='lg:h-20 w-auto sm:h-10'
                      src='/assets/images/logo.png'
                      alt='..'
                    />
                  </Link>
                  <div className='-mr-2 flex items-center lg:hidden'>
                    <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Open main menu</span>
                      <MenuIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className='hidden lg:flex items-center w-full md:ml-10 md:space-x-8'>
                <div className='ml-auto flex items-center gap-10'>
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      exact
                      activeClassName='text-gray-900 active font-medium'
                      className='text-gray-500 hover:text-gray-900 line-hover'
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <div className='ml-auto flex items-center'>
                  <Link
                    to='/register'
                    className='font-medium text-primary-800 hover:text-primary-1000 mr-5'
                  >
                    Register
                  </Link>
                  <ButtonPrimary link='/login' name='Login' />
                </div>
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter='duration-150 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-100 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Popover.Panel
              focus
              className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden'
            >
              <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
                <div className='px-5 pt-4 flex items-center justify-between'>
                  <div>
                    <img
                      className='h-13 w-auto'
                      src='/assets/images/logo.png'
                      alt=''
                    />
                  </div>
                  <div className='-mr-2'>
                    <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Close main menu</span>
                      <XIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='px-2 pt-2 pb-3 space-y-1 inline-flex items-baseline flex-col'>
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      exact
                      activeClassName='text-gray-900 active font-medium'
                      className='inline-block px-3 py-2 rounded-md text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 line-hover'
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <div>
                  <Link
                    to='/register'
                    className='block w-full px-5 py-3 text-center font-medium text-primary-800 bg-gray-200 hover:bg-gray-400'
                  >
                    Register
                  </Link>
                  <Link
                    to='/login'
                    className='block w-full px-5 py-3 text-center font-medium text-white bg-primary-800 hover:bg-primary-1000'
                  >
                    Login
                  </Link>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
};

export default NavbarLogin;
