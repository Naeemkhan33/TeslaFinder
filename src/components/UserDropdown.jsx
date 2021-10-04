import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { CashIcon, LogoutIcon, UserCircleIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';

export default function UserDropdown() {
  return (
    <div className='text-right'>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className='inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium transform transition hover:scale-105'>
            <div className='flex flex-row items-center'>
              <div className='h-10 w-10 relative'>
                <img
                  src='https://source.unsplash.com/random'
                  alt='...'
                  className='block h-full w-full bg-gray-200 border rounded-full object-cover'
                />
                <span class='absolute top-1 right-0 inline-block w-2 h-2 bg-blue-300 rounded-full'></span>
              </div>
              <span className='flex flex-col ml-2 text-left'>
                <span className='truncate w-20 font-semibold tracking-wide leading-none'>
                  John Doe
                </span>
                <span className='truncate w-20 text-gray-500 text-xs leading-none mt-1 font-light'>
                  Manager
                </span>
              </span>
            </div>
            <ChevronDownIcon
              className='w-5 h-5 -mr-1 text-violet-200 hover:text-violet-100'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 w-36 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='px-1 py-1'>
              <Menu.Item>
                {({ active }) => (
                  <NavLink
                    exact
                    to='/profile'
                    activeClassName='bg-primary-900 text-white-1'
                    className={`${
                      active ? 'bg-primary-900 text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm my-px`}
                  >
                    {active ? (
                      <span>
                        <UserCircleIcon className='w-5 h-5 mr-2' />
                      </span>
                    ) : (
                      <span>
                        <UserCircleIcon className='w-5 h-5 mr-2' />
                      </span>
                    )}
                    Profile
                  </NavLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <NavLink
                    exact
                    to='/billings'
                    activeClassName='bg-primary-900 text-white-1'
                    className={`${
                      active ? 'bg-primary-900 text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm my-px`}
                  >
                    {active ? (
                      <span>
                        <CashIcon className='w-5 h-5 mr-2' />
                      </span>
                    ) : (
                      <span>
                        <CashIcon className='w-5 h-5 mr-2' />
                      </span>
                    )}
                    Billings
                  </NavLink>
                )}
              </Menu.Item>
            </div>

            <div className='px-1 py-1'>
              <Menu.Item>
                {({ active }) => (
                  <NavLink
                    exact
                    to='/'
                    activeClassName='bg-primary-900 text-white-1'
                    className={`${
                      active ? 'bg-primary-900 text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm my-px`}
                  >
                    {active ? (
                      <span>
                        <LogoutIcon className='w-5 h-5 mr-2' />
                      </span>
                    ) : (
                      <span>
                        <LogoutIcon className='w-5 h-5 mr-2' />
                      </span>
                    )}
                    Logout
                  </NavLink>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
