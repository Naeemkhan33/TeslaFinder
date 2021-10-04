import React from 'react';
import { ReactComponent as IconQuote } from '../../../assets/right-quote.svg';
import { StarIcon } from '@heroicons/react/solid';
import { ReactComponent as StarOutline } from '../../../assets/star-outline.svg';

const SectionWhyChoose = () => {
  const cards = [{}, { className: 'active' }, {}];

  return (
    <section className='mt-24'>
      <div className='container mx-auto px-4 sm:px-12 lg:px-14'>
        <div className='xl:w-5/6 mx-auto px-4 h-full flex flex-col'>
          <div className='text-center mb-12'>
            <p className='mb-3'>Testimonials</p>
            <h2 class='mb-0 text-black text-2xl md:text-3xl xl:text-4xl leading-snug xl:leading-tight font-bold'>
              Why choose Tesla Finder?
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8'>
            {cards.map((items) => (
              <div
                className={`relative flex flex-col card-primary p-4 rounded-2xl border ${items.className}`}
              >
                <div className='flex flex-wrap items-center mb-3'>
                  <div className='flex mr-3'>
                    <span className='flex w-7 text-yellow-300'>
                      <StarIcon />
                    </span>
                    <span className='flex w-7 text-yellow-300'>
                      <StarIcon />
                    </span>
                    <span className='flex w-7 text-yellow-300'>
                      <StarIcon />
                    </span>
                    <span className='flex w-7 text-yellow-300'>
                      <StarIcon />
                    </span>
                    <span className='flex w-7 text-gray-300'>
                      <StarOutline />
                    </span>
                  </div>
                  <div className='text-gray-300'>(450 Reviews)</div>
                </div>
                <div className='text-left mb-8'>
                  <h2 class='mb-1 text-xl leading-snug xl:leading-tight'>
                    Michel Kelvin
                  </h2>
                  <h4 className='mb-0 opacity-75'>09-04-2021</h4>
                </div>
                <p className='relative z-10'>
                  Wanted to Get notified whenever a new Tesla arrives at stores
                  near your home town or your provided address.
                </p>
                <div className='icon-1 absolute bottom-0 right-4'>
                  <IconQuote />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWhyChoose;
