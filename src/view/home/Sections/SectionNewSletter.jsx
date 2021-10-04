import React from 'react';
import { InputNoBg } from '../../../components/Inputs';

const SectionNewSletter = () => {
  return (
    <section className='mt-28'>
      <div className='container mx-auto px-4 sm:px-12 lg:px-14'>
        <div
          className='w-full rounded-2xl md:rounded-3xl bg-center bg-cover md:py-6'
          style={{ backgroundImage: `url(/assets/images/hero-1.png)` }}
        >
          <div className='md:w-5/6 mx-auto px-4 h-full flex flex-col justify-center text-center'>
            <div className='py-10'>
              <h2 class='mb-6 text-white text-2xl md:text-3xl xl:text-4xl leading-snug xl:leading-tight font-medium'>
                Subscribe to our Newsletter
              </h2>
              <p className='text-gray-300 lg:w-3/5 mx-auto mb-10'>
                Get updates as we add new features to the site and add new
                regions. Your priciy is important to us and will not share ANY
                of your information with ANY 3rd party!
              </p>
              <form
                noValidate
                className='flex flex-col lg:flex-row lg:w-1/2 mx-auto mb-10'
              >
                <div className='lg:w-4/6 lg:mr-6'>
                  <InputNoBg
                    icon='email.png'
                    type='email'
                    placeholder='Enter your email address...'
                  />
                </div>
                <div className='flex-1 mt-4 lg:mt-0'>
                  <button type='submit' className='btn-white w-full p-5'>
                    Subscribe
                  </button>
                </div>
              </form>
              <p className='text-gray-300 lg:w-3/5 mx-auto mb-0'>
                WARNING: once you join{' '}
                <span className='text-white font-medium'>My Tesla Radar</span>{' '}
                you <br className='hidden md:block' /> will lose the need for
                any other provider.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionNewSletter;
