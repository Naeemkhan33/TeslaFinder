import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const FooterPrimary = () => {
  const location = useLocation();

  const hideFooter =
    location.pathname === '/login' ||
    location.pathname === '/dashboard' ||
    location.pathname === '/past-inventory' ||
    location.pathname === '/billings' ||
    location.pathname === '/packages' ||
    location.pathname === '/profile' ||
    location.pathname === '/register';

  if (hideFooter) {
    return null;
  }

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/about' },
    { name: 'Packages', href: '/packages' },
    { name: 'Contact us', href: '/contact' },
  ];

  const social = [
    { icon: 's-icon-0.png' },
    { icon: 's-icon-1.png' },
    { icon: 's-icon-2.png' },
    { icon: 's-icon-3.png' },
    { icon: 's-icon-4.png' },
  ];

  return (
    <section
      className='bg-cover'
      style={{ backgroundImage: `url(/assets/images/footer.png)` }}
    >
      <div className='container mx-auto px-4 sm:px-12 lg:px-14'>
        <div className='xl:w-5/6 mx-auto px-4 h-full flex flex-col'>
          <div className='py-8 text-white'>
            <div className='flex flex-wrap gap-4'>
              <div className='md:w-1/2 lg:w-1/3'>
                <Link className='block mb-3' to='/'>
                  <span className='sr-only'>Logo</span>
                  <img
                    className='d-block'
                    src='/assets/images/footer-logo.png'
                    alt='..'
                  />
                </Link>
                <p className='text-gray-300 text-sm'>
                  Tesla Finder is a market-leading provider of digital marketing
                  services, using proprietary tools and methodologies to
                  generate high-value engagement for our customers.
                </p>
              </div>
              <div className='flex-1'>
                <div className='flex flex-col md:flex-row'>
                  <div className='md:ml-auto flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-10 xl:gap-12'>
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        exact
                        activeClassName='text-white-1 active font-medium'
                        className='text-gray-300 hover:text-gray-100 line-hover'
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                  <div className='md:ml-auto flex flex-col md:flex-row md:items-center items-start'>
                    <Link
                      to='/register'
                      className='text-gray-300 hover:text-gray-100 my-5 md:my-0 md:mr-5'
                    >
                      Register
                    </Link>
                    <Link
                      to='/login'
                      className='py-3 px-8 rounded-lg font-medium bg-white hover:bg-primary-1000 text-primary-800 hover:text-white'
                    >
                      Login
                    </Link>
                  </div>
                </div>
                <div className='flex gap-8 md:justify-end mt-10'>
                  {social.map((items) => (
                    <a
                      className='transform transition-all hover:scale-110 inline-block'
                      href='https://www.google.com'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img
                        className='block'
                        src={`/assets/icons/${items.icon}`}
                        alt='...'
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterPrimary;
