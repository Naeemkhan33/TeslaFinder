import React, { useState } from 'react';
import ItemCard from '../../../components/Cards/ItemCard';
import HeadingComponent from '../../../components/HeadingComponent';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

const SectionSearch = () => {
  const [show, setShow] = useState(true);
  const product = {
    name: 'Standard',
    modalName: 'Tesla Model S',
    modalText: 'Tursti Car Stores, California',
    price: '$50,000',
    estimated: 'Estimated Price',
    rating: 3.9,
    reviewCount: 117,
    href: '#',
    imageSrc: 'assets/images/item-0.png',
    imageAlt: '...',
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
  };

  return (
    <div>
      <HeadingComponent
        title='Notification Searches'
        type='Location:'
        typeItem='Calefornia'
      />
      {show ? (
        <div className='flex flex-wrap items-center mt-6'>
          <span className='text-xl text-gray-600 md:mr-6 my-1'>
            No active notifications searches, Please create one to get started
          </span>
          <button
            type='button'
            onClick={() => setShow(false)}
            class='active:bg-primary-700 flex items-center justify-center px-6 py-2.5 shadow-primary border border-transparent 
                rounded text-white text-sm bg-primary-1000 hover:bg-primary-900 cursor-pointer my-1'
          >
            Create a Search
          </button>
        </div>
      ) : (
        <div className='mt-6'>
          <Disclosure>
            {({ open }) => (
              <div>
                <Disclosure.Button className='flex items-center justify-between w-full py-4 px-4 text-lg font-medium text-left text-black bg-white rounded-lg shadow-sm hover:shadow-md  border focus:outline-none focus-visible:ring focus-visible:ring-gray-200 focus-visible:ring-opacity-75'>
                  <div className='flex items-center'>
                    <span className='mr-2 w-6'>
                      <img src='assets/images/brand 0.png' alt='...' />
                    </span>
                    <span>Tesla Model 3</span>
                  </div>
                  <ChevronUpIcon
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-5 h-5 text-black transform rotate-90`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className='pt-6'>
                  <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8'>
                      <ItemCard product={product} />
                      <ItemCard product={product} />
                      <ItemCard product={product} />
                    </div>
                  </div>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <div className='mt-6'>
                <Disclosure.Button className='flex items-center justify-between w-full py-4 px-4 text-lg font-medium text-left text-black bg-white rounded-lg shadow-sm hover:shadow-md  border focus:outline-none focus-visible:ring focus-visible:ring-gray-200 focus-visible:ring-opacity-75'>
                  <div className='flex items-center'>
                    <span className='mr-2 w-6'>
                      <img src='assets/images/brand 0.png' alt='...' />
                    </span>
                    <span>Tesla Model X</span>
                  </div>
                  <ChevronUpIcon
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-5 h-5 text-black transform rotate-90`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className='pt-6'>
                  <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8'>
                      <div className='px-6'>
                        <h5 className='text-lg text-gray-500'>
                          No cars are available at this time
                        </h5>
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <div className='mt-6'>
                <Disclosure.Button className='flex items-center justify-between w-full py-4 px-4 text-lg font-medium text-left text-black bg-white rounded-lg shadow-sm hover:shadow-md  border focus:outline-none focus-visible:ring focus-visible:ring-gray-200 focus-visible:ring-opacity-75'>
                  <div className='flex items-center'>
                    <span className='mr-2 w-6'>
                      <img src='assets/images/brand 0.png' alt='...' />
                    </span>
                    <span>Tesla Model S</span>
                  </div>
                  <ChevronUpIcon
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-5 h-5 text-black transform rotate-90`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className='pt-6'>
                  <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8'>
                      <ItemCard product={product} />
                      <ItemCard product={product} />
                      <ItemCard product={product} />
                      <ItemCard product={product} />
                      <ItemCard product={product} />
                      <ItemCard product={product} />
                    </div>
                  </div>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        </div>
      )}
    </div>
  );
};

export default SectionSearch;
