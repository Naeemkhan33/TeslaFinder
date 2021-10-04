import React, { useState } from 'react';
import HeadingComponent from '../../components/HeadingComponent';
import MainContent from '../../components/MainContent';
import NavbarPrimary from '../../components/navbars/NavbarPrimary';
import SidebarPrimary from '../../components/sidebars/SidebarPrimary';
import { Head } from '../../components/Head';
import { PencilIcon } from '@heroicons/react/outline';
import { InputEdit } from '../../components/Inputs';
import { Link } from 'react-router-dom';
import { ButtonPrimaryBtn } from '../../components/ButtonPrimary';

const Profile = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <Head title='Profile' />
      <section className='container mx-auto shadow-xl'>
        <div className='flex flex-row min-h-screen bg-gray-100 text-gray-800'>
          <SidebarPrimary
            containerClassName={`${
              sidebar
                ? 'flex w-full h-screen fixed z-30'
                : 'relative lg:w-64 md:shadow transform -translate-x-full lg:translate-x-0 transition-transform duration-250 ease-in bg-white'
            }`}
            sidebarClassName={` ${sidebar ? '' : '-translate-x-full'}`}
            onOverlay={() => setSidebar(false)}
          />
          <main className='main flex flex-col flex-grow -ml-64 lg:ml-0 transition-all duration-150 ease-in'>
            <NavbarPrimary onClick={() => setSidebar(!sidebar)} />
            <MainContent>
              <div className='mb-6'>
                <div className='flex flex-wrap'>
                  <HeadingComponent
                    containerClassName='mr-auto mb-4'
                    title='My Account'
                    type='Status:'
                    typeItem='Active'
                  />
                </div>

                <form noValidate className='mt-6'>
                  <div className='flex flex-wrap gap-4 xl:gap-6'>
                    <div className='w-full xl:w-64'>
                      <div className='flex items-center'>
                        <div className='relative w-20 h-20 mr-5 bg-gray-300 rounded-full'>
                          <img
                            className='rounded-full border border-gray-100 shadow-sm w-full h-full'
                            src='https://source.unsplash.com/random'
                            alt='....'
                          />
                          <button
                            type='button'
                            className='absolute top-0 right-0 h-6 w-6 my-1 border-2 p-1 bg-primary-1000 text-white border-white rounded-full z-2'
                          >
                            <PencilIcon />
                          </button>
                        </div>
                        <div>
                          <h1 className='text-xl sm:text-2xl font-bold mb-2 truncate'>
                            Abrar Ahmed
                          </h1>
                          <span class='inline-flex items-center justify-center text-xs leading-none py-2 px-4 text-white bg-purple-600 rounded capitalize  truncate'>
                            Premium User
                          </span>
                        </div>
                      </div>
                      <div className='mt-9'>
                        <h6 className='text-xs text-gray-500 mb-2'>
                          Member Since:
                        </h6>
                        <h3 className='text-xl text-black font-medium capitalize'>
                          2021-10-01
                        </h3>
                      </div>
                      <div className='mt-9'>
                        <h6 className='text-xs text-gray-500 mb-2'>
                          Location:
                        </h6>
                        <h3 className='text-xl text-black font-medium capitalize'>
                          481 Perry Street, Flint, Michigan, US
                        </h3>
                      </div>
                      <div className='mt-9'>
                        <h6 className='text-xs text-gray-500 mb-2'>
                          Zip Code:
                        </h6>
                        <h3 className='text-xl text-black font-medium capitalize'>
                          98402
                        </h3>
                      </div>
                      <div className='mt-9'>
                        <button
                          type='button'
                          className='bg-primary-1000 hover:bg-primary-900 active:bg-primary-800 text-white p-4 rounded capitalize'
                        >
                          Diable Account
                        </button>
                      </div>
                    </div>
                    <div className='flex-1'>
                      <div className='border rounded-2xl px-6'>
                        <InputEdit
                          label='Display Name:'
                          value='Abrar Ahmed'
                          btnName='Edit'
                          type='text'
                        />
                        <InputEdit
                          label='email:'
                          value='code.abr@gmail.com'
                          btnName='Edit'
                          type='email'
                          valueTextClassName=''
                        />
                        <InputEdit
                          label='Location:'
                          value='481 Perry Street, Flint, Michigan, US'
                          btnName='Edit'
                          type='text'
                        />
                        <InputEdit
                          label='Zip Code:'
                          value='98402'
                          btnName='Edit'
                          type='number'
                          valueTextClassName='uppercase'
                        />
                        <InputEdit
                          label='Password'
                          value='**********'
                          btnName='Edit'
                          type='password'
                          valueTextClassName=''
                        />
                      </div>
                      <div className='border rounded-2xl mt-8'>
                        <div>
                          <div className='flex flex-col sm:flex-row p-6'>
                            <div className='mr-auto pr-5 flex-1'>
                              <h6 className='text-sm text-gray-500 mb-1 capitalize'>
                                Membership
                              </h6>

                              <h3
                                className={`text-xl sm:text-2xl text-black font-medium truncate capitalize`}
                              >
                                Premium Subscription
                              </h3>
                            </div>
                            <div className='self-end order-first sm:order-last'>
                              <Link
                                to='/packages'
                                className='bg-primary-1000 hover:bg-primary-900 active:bg-primary-800 text-white py-3 px-5 rounded capitalize'
                              >
                                Upgrade
                              </Link>
                            </div>
                          </div>
                          <Link
                            to='/packages'
                            className='bg-gray-200 text-gray-800 font-medium text-xl w-full block text-center p-4 rounded-b-3xl mt-5'
                          >
                            See the Pro Benefits
                          </Link>
                        </div>
                      </div>
                      <div className='mt-8'>
                        <ButtonPrimaryBtn
                          type='submit'
                          name='Request Changes'
                        />
                      </div>
                      <div className='mt-8 text-center'>
                        <span className='text-gray-600 font-medium'>
                          Changes will be saved once verified by our{' '}
                          <b className='text-gray-800'>Experts</b>
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </MainContent>
          </main>
        </div>
      </section>
    </>
  );
};

export default Profile;
