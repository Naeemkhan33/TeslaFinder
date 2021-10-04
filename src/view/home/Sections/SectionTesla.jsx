import React from 'react';
import {
  ArrowRightIcon,
  ArrowNarrowRightIcon,
  ArrowNarrowLeftIcon,
} from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

// icons
import { ReactComponent as IconOne } from '../../../assets/t-icon-0.svg';
import { ReactComponent as IconTwo } from '../../../assets/t-icon-1.svg';
import { ReactComponent as IconThree } from '../../../assets/t-icon-2.svg';

const SectionTesla = () => {
  const [carousel, setCarousel] = React.useState(true);

  const cards = [
    {
      link: '/',
      icon: <IconOne />,
      title: 'Premium Service',
      text: ' Some networks believe that by only offering.',
    },
    {
      link: '/',
      icon: <IconTwo />,
      title: 'Best Rates',
      text: ' Some networks believe that by only offering.',
      className: 'active',
    },
    {
      link: '/',
      icon: <IconThree />,
      title: 'Get Notified',
      text: ' Some networks believe that by only offering.',
    },
  ];

  return (
    <section className='mt-28 pt-32 md:pt-8'>
      <div className='container mx-auto px-4 sm:px-12 lg:px-14'>
        <div className='xl:w-5/6 mx-auto px-4 h-full flex flex-col'>
          <div className='text-center mb-16'>
            <h2 class='mb-7 text-black text-2xl md:text-3xl xl:text-4xl leading-snug xl:leading-tight font-bold'>
              We’ll help you finding your next Tesla!!
            </h2>
            <p>
              Some networks believe that by only offering a basic tracking
              system their affiliates can reach a high level of creativity. We
              like to set the bar a lot higher by offering you cutting-edge tech
              solutions together with a team of creative experts.
            </p>
          </div>
          <div className='mb-16'>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
              {cards.map((items) => (
                <div>
                  <Link
                    to={items.link}
                    className={`block card-primary p-6 md:px-10 md:py-16 rounded-2xl ${items.className}`}
                  >
                    <div className='h-16 w-16 mb-6'>{items.icon}</div>
                    <div className='mb-6 text-2xl md:text-2xl xl:text-3xl font-bold'>
                      {items.title}
                    </div>
                    <p className='text-gray-500 mb-6'>{items.text}</p>
                    <div className='h-6 w-6'>
                      <ArrowRightIcon />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* carousel start */}
          <div className='w-full relative overflow-hidden'>
            <div
              className={`w-full carousel-item ${
                carousel
                  ? 'relative transform translate-x-px transition-all duration-500 show-item'
                  : 'absolute transform translate-x-full transition-all duration-500 hide-item'
              }`}
            >
              <div className='flex flex-wrap '>
                <div className='w-full lg:w-1/3 lg:h-auto'>
                  <img
                    src='/assets/images/cars.png'
                    className='w-full h-full'
                    alt='...'
                  />
                </div>
                <div className='flex-1 text-right p-4 lg:p-10'>
                  <div className='mb-8'>
                    <span className='sr-only'>Logo</span>
                    <img
                      className='lg:h-20 w-auto sm:h-10 ml-auto'
                      src='/assets/images/logo.png'
                      alt='..'
                    />
                  </div>
                  <h2 class='mb-7 text-black text-2xl md:text-3xl xl:text-4xl leading-snug xl:leading-tight font-bold'>
                    is a leading provider of Tesla{' '}
                    <br className='hidden md:block' /> Cars & services
                  </h2>
                  <p className='mb-7'>
                    Fortunately in the US, the Supercharger network is much more
                    advanced than other countries, which Senior Marketing and
                    Communication Manager at Tesla Heath Walker says is due to a
                    few key factors.
                  </p>
                  <div className='flex justify-end items-center text-gray-300'>
                    <div
                      onClick={() => setCarousel(!carousel)}
                      className='h-8 w-8 cursor-pointer hover:text-gray-600'
                    >
                      <ArrowNarrowLeftIcon />
                    </div>
                    <div className='mx-2'>1/2</div>
                    <div
                      onClick={() => setCarousel(!carousel)}
                      className='h-8 w-8 cursor-pointer hover:text-gray-600'
                    >
                      <ArrowNarrowRightIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`relative w-full carousel-item ${
                carousel
                  ? 'absolute transform translate-x-full transition-all duration-500 hide-item'
                  : 'relative transform translate-x-px transition-all duration-500 show-item'
              }`}
            >
              <div className='flex flex-wrap '>
                <div className='w-full lg:w-1/3 lg:h-auto'>
                  <img
                    src='/assets/images/cars.png'
                    className='w-full h-full'
                    alt='...'
                  />
                </div>
                <div className='flex-1 text-right p-4 lg:p-10'>
                  <div className='mb-8'>
                    <span className='sr-only'>Logo</span>
                    <img
                      className='lg:h-20 w-auto sm:h-10 ml-auto'
                      src='/assets/images/logo.png'
                      alt='..'
                    />
                  </div>
                  <h2 class='mb-7 text-black text-2xl md:text-3xl xl:text-4xl leading-snug xl:leading-tight font-bold'>
                    is a leading provider of Tesla{' '}
                    <br className='hidden md:block' /> Cars & services
                  </h2>
                  <p className='mb-7'>
                    Fortunately in the US, the Supercharger network is much more
                    advanced than other countries, which Senior Marketing and
                    Communication Manager at Tesla Heath Walker says is due to a
                    few key factors.
                  </p>
                  <div className='flex justify-end items-center text-gray-300'>
                    <div
                      onClick={() => setCarousel(!carousel)}
                      className='h-8 w-8 cursor-pointer hover:text-gray-600'
                    >
                      <ArrowNarrowLeftIcon />
                    </div>
                    <div
                      className={`mx-2 ${
                        carousel ? '' : 'text-gray-600 font-bold'
                      }`}
                    >
                      2/2
                    </div>
                    <div
                      onClick={() => setCarousel(!carousel)}
                      className='h-8 w-8 cursor-pointer hover:text-gray-600'
                    >
                      <ArrowNarrowRightIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* carousel end */}
        </div>
      </div>
    </section>
  );
};

export default SectionTesla;
