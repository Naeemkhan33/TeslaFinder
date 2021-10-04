import { Fragment, useState } from 'react';
import { Dialog, RadioGroup, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ItemCard({ product }) {
  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <>
      <div key={product.id} className='group relative shadow rounded-md'>
        <div className='w-full flex items-center justify-center bg-gray-100 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 h-60 lg:aspect-none'>
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className='object-center object-contain'
            style={{ height: '75%', width: '75%' }}
          />
        </div>
        <div className='flex flex-col'>
          <div className='p-4'>
            <div>
              <h3 className='font-bold text-xl text-black mb-1'>
                {product.name}
              </h3>
              <h4 className='font-medium text-sm text-gray-500 mb-1'>
                {product.modalName}
              </h4>
              <h4 className='text-xs text-gray-500'>{product.modalText}</h4>
            </div>
          </div>
          <div className='border-t p-4 flex'>
            <div className='mr-auto'>
              <h3 className='text-xl font-bold text-gray-900'>
                {product.price}
              </h3>
              <p className='text-xs text-gray-500'>{product.estimated}</p>
            </div>
            <div>
              <button
                className='bg-primary-1000 hover:bg-primary-800 active:bg-primary-600 text-gray-200 py-2 px-5 rounded-md capitalize h-full'
                onClick={() => setOpen(!open)}
              >
                view details
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='fixed z-40 inset-0 overflow-y-auto'
          onClose={setOpen}
        >
          <div
            className='flex min-h-screen text-center md:block md:px-2 lg:px-4'
            style={{ fontSize: 0 }}
          >
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='hidden md:inline-block md:align-middle md:h-screen'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'
              enterTo='opacity-100 translate-y-0 md:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 md:scale-100'
              leaveTo='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'
            >
              <div className='flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl'>
                <div className='w-full relative flex items-center md:rounded-2xl bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8'>
                  <button
                    type='button'
                    className='absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8'
                    onClick={() => setOpen(false)}
                  >
                    <span className='sr-only'>Close</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </button>

                  <div className='w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8'>
                    <div className='sm:col-span-4 lg:col-span-5'>
                      <div className='aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden'>
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className='object-center object-cover mx-auto'
                        />
                      </div>
                      <p className='mt-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore saepe earum, minus rem ea aut blanditiis ad
                        itaque alias, nihil deserunt impedit voluptatum eveniet.
                        Est modi tempore nostrum odit atque?
                      </p>
                    </div>
                    <div className='sm:col-span-8 lg:col-span-7'>
                      <h2 className='text-2xl font-extrabold text-gray-900 sm:pr-12'>
                        {product.name}
                      </h2>

                      <h4 className='font-medium text-lg text-gray-500 mt-1'>
                        {product.modalName}
                      </h4>
                      <h4 className='text-md text-gray-500'>
                        {product.modalText}
                      </h4>

                      <section
                        aria-labelledby='information-heading'
                        className='mt-2'
                      >
                        <h3 id='information-heading' className='sr-only'>
                          Product information
                        </h3>

                        <p className='text-2xl text-gray-900 font-bold'>
                          {product.price}
                        </p>

                        <p className='text-xs text-gray-500'>
                          {product.estimated}
                        </p>

                        {/* Reviews */}
                        <div className='mt-6'>
                          <h4 className='sr-only'>Reviews</h4>
                          <div className='flex items-center'>
                            <div className='flex items-center'>
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    product.rating > rating
                                      ? 'text-yellow-400'
                                      : 'text-gray-200',
                                    'h-5 w-5 flex-shrink-0'
                                  )}
                                  aria-hidden='true'
                                />
                              ))}
                            </div>
                            <p className='sr-only'>
                              {product.rating} out of 5 stars
                            </p>
                            <div className='ml-3 text-sm font-medium text-primary'>
                              {product.reviewCount} reviews
                            </div>
                          </div>
                        </div>
                      </section>

                      <section
                        aria-labelledby='options-heading'
                        className='mt-10'
                      >
                        <h3 id='options-heading' className='sr-only'>
                          Product options
                        </h3>

                        <form>
                          {/* Colors */}
                          <div>
                            <h4 className='text-sm text-gray-900 font-medium'>
                              Color
                            </h4>

                            <RadioGroup
                              value={selectedColor}
                              onChange={setSelectedColor}
                              className='mt-4'
                            >
                              <RadioGroup.Label className='sr-only'>
                                Choose a color
                              </RadioGroup.Label>
                              <div className='flex items-center space-x-3'>
                                {product.colors.map((color) => (
                                  <RadioGroup.Option
                                    key={color.name}
                                    value={color}
                                    className={({ active, checked }) =>
                                      classNames(
                                        color.selectedClass,
                                        active && checked
                                          ? 'ring ring-offset-1'
                                          : '',
                                        !active && checked ? 'ring-2' : '',
                                        '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                      )
                                    }
                                  >
                                    <RadioGroup.Label
                                      as='p'
                                      className='sr-only'
                                    >
                                      {color.name}
                                    </RadioGroup.Label>
                                    <span
                                      aria-hidden='true'
                                      className={classNames(
                                        color.class,
                                        'h-8 w-8 border border-black border-opacity-10 rounded-full'
                                      )}
                                    />
                                  </RadioGroup.Option>
                                ))}
                              </div>
                            </RadioGroup>
                          </div>

                          <button
                            type='submit'
                            className='mt-6 w-full bg-primary-900 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-primary-1000 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-1000'
                          >
                            Add to bag
                          </button>
                        </form>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
