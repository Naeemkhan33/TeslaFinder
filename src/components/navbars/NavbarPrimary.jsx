import { BellIcon, MenuIcon, SearchIcon } from '@heroicons/react/outline';
import React from 'react';
import UserDropdown from '../UserDropdown';

const NavbarPrimary = ({ onClick }) => {
  return (
    <header className='header bg-white shadow py-4 px-6 border-b shadow-sm sticky top-0 z-20'>
      <div className='header-content flex items-center'>
        <div className='flex w-full'>
          <div>
            <h5 className='font-medium text-gray-600'>Hi Abrar,</h5>
            <h2 className='text-2xl font-bold'>Welcome Back</h2>
          </div>
          <ul className='flex lg:hidden items-center gap-2 ml-auto'>
            <li>
              <button
                type='button'
                className='relative w-7 h-7 text-gray-600 transform transition hover:scale-110'
              >
                <span>
                  <SearchIcon />
                </span>
              </button>
            </li>
            <li>
              <button
                type='button'
                className='relative w-7 h-7 text-gray-600 transform transition hover:scale-110'
              >
                <span>
                  <BellIcon />
                </span>
                <span class='absolute top-0 right-0 inline-block w-2 h-2 bg-red-400 rounded-full'></span>
              </button>
            </li>
            <li>
              <button
                onClick={onClick}
                type='button'
                className='relative w-7 h-7 text-gray-600 transform transition hover:scale-110'
              >
                <span>
                  <MenuIcon />
                </span>
              </button>
            </li>
          </ul>
        </div>
        <div className='ml-auto hidden lg:block'>
          <ul className='flex items-center gap-1 md:gap-5'>
            <li>
              <button
                type='button'
                className='relative w-7 h-7 text-gray-600 transform transition hover:scale-110'
              >
                <span>
                  <SearchIcon />
                </span>
              </button>
            </li>
            <li>
              <button
                type='button'
                className='relative w-7 h-7 text-gray-600 transform transition hover:scale-110'
              >
                <span>
                  <BellIcon />
                </span>
                <span class='absolute top-0 right-0 inline-block w-2 h-2 bg-red-400 rounded-full'></span>
              </button>
            </li>
            <li>
              <UserDropdown />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavbarPrimary;
