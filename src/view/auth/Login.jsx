import React from 'react';
import { XIcon, LockClosedIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { MailIcon } from '@heroicons/react/outline';
import { InputWithLabel } from '../../components/Inputs';
import { ButtonPrimaryBtn } from '../../components/ButtonPrimary';
import { Head } from '../../components/Head';

const Login = () => {
  return (
    <>
      <Head title='Register' />
      <section className='min-h-screen flex justify-center items-center fade-in'>
        <div className='container mx-auto rounded-3xl shadow-2xl'>
          <div className='grid grid-cols-1 xl:grid-cols-2'>
            <div
              className='bg-cover md:h-96 xl:h-auto rounded-l-3xl'
              style={{ backgroundImage: `url(/assets/images/login.png)` }}
            >
              <div className='h-full flex flex-col p-8'>
                <Link className='block mb-3' to='/'>
                  <span className='sr-only'>Logo</span>
                  <img
                    className='block'
                    src='/assets/images/logo-white.png'
                    alt='..'
                  />
                </Link>
                <div className='text-white mt-auto pt-6'>
                  <h3 className='text-2xl font-medium mb-1'>Node:</h3>
                  <p className='font-light'>
                    We don’t share your info with anyone, you’re privicy is most
                    important to us
                  </p>
                </div>
              </div>
            </div>
            <div>
              <form action='/dashboard'>
                <div className='text-right p-8'>
                  <Link className='inline-block' to='/'>
                    <span className='block w-8'>
                      <XIcon />
                    </span>
                  </Link>
                </div>
                <div className='xl:px-24 lg:px-16 md:px-10 px-5 pb-6'>
                  {/* Header Start */}
                  <div>
                    <h2 className='mb-3 text-3xl md:text-3xl xl:text-4xl font-bold'>
                      Welcome Back
                    </h2>
                    <p className='text-gray-500 mb-6'>
                      {' '}
                      New to Tesla Finder?{' '}
                      <Link
                        to='/register'
                        className='inline-block font-bold underline text-black'
                      >
                        Register
                      </Link>
                    </p>
                  </div>
                  {/* Header End */}

                  {/* Main Start */}
                  <div>
                    <InputWithLabel
                      label='Email address'
                      icon={<MailIcon />}
                      type='email'
                      placeholder='code.abr@gmail.com'
                    />
                    <InputWithLabel
                      label='Password'
                      icon={<LockClosedIcon />}
                      type='password'
                      placeholder='Enter your password'
                    />
                  </div>
                  <div class='flex mt-6'>
                    <span class='ml-2 text-sm text-gray-500'>
                      Forget Password?{' '}
                      <Link to='/login' className='font-bold text-black'>
                        Recover Passowrd
                      </Link>{' '}
                      or{' '}
                      <Link to='/login' className='font-bold text-black'>
                        Contact Support
                      </Link>
                    </span>
                  </div>
                  <div className='mt-8'>
                    <ButtonPrimaryBtn type='submit' name='Login' />
                  </div>
                  {/* Main End */}
                  <div className='flex items-center text-gray-400 py-6'>
                    <span className='flex-1 h-px h-1 bg-current' />
                    <span className='mx-3'>or</span>
                    <span className='flex-1 h-px h-1 bg-current' />
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-14'>
                    <div>
                      <button
                        type='button'
                        className='bg-white active:bg-gray-100 border border-black p-4 w-full rounded-xl text-gray-500 transform transition hover:scale-95'
                      >
                        <div className='flex justify-center'>
                          <span className='mr-3 h-6 w-6'>
                            <img
                              className='block h-full w-full'
                              src='/assets/icons/google.png'
                              alt='...'
                            />
                          </span>
                          <span>Login with Google</span>
                        </div>
                      </button>
                    </div>
                    <div>
                      <button
                        type='button'
                        className='bg-blue-500 active:bg-blue-600 border border-blue p-4 w-full rounded-xl text-white transform transition hover:scale-95'
                      >
                        <div className='flex justify-center'>
                          <span className='mr-3 h-6 w-6'>
                            <img
                              className='block h-full w-full'
                              src='/assets/icons/facebook.png'
                              alt='...'
                            />
                          </span>
                          <span>Login with Facebook</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
