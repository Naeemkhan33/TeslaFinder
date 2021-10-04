import { Fragment, useState } from 'react';
import { Tab } from '@headlessui/react';
import HeadingComponent from '../../components/HeadingComponent';
import MainContent from '../../components/MainContent';
import NavbarPrimary from '../../components/navbars/NavbarPrimary';
import SidebarPrimary from '../../components/sidebars/SidebarPrimary';
import { CustomSelectWithIcon } from '../../components/Selecter';
import { ReactComponent as BrandTeslaIcon } from '../../assets/brand-tesla.svg';
import ItemCard from '../../components/Cards/ItemCard';
import { Head } from '../../components/Head';

const PastInventory = () => {
  const [sidebar, setSidebar] = useState(false);

  const lastDate = [
    { name: 'Last 7 days' },
    { name: 'Last 15 days' },
    { name: 'Last 30 days' },
  ];

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
    <>
      <Head title='Past Inventory' />
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
              <div>
                <div className='flex flex-wrap mb-6'>
                  <HeadingComponent
                    containerClassName='mr-auto mb-4'
                    title='Latest Transactions'
                    type='Statistics:'
                    typeItem='Calefornia'
                  />
                  <div className='self-end w-44 mb-4'>
                    <CustomSelectWithIcon
                      icon='date.png'
                      options={lastDate}
                      placeHolder='Last 7 days'
                    />
                  </div>
                </div>
              </div>
              <div>
                <Tab.Group>
                  <Tab.List className='flex flex-col md:flex-row flex-wrap gap-4 md:gap-2 xl:gap-10 md:w-full overflow-x-auto whitespace-nowrap'>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={
                            selected
                              ? 'bg-primary-1000 text-white py-3 px-4 rounded-lg'
                              : 'bg-white text-black py-3 px-4 rounded-lg'
                          }
                        >
                          <div className='flex items-center'>
                            <span className='font-bold'>All</span>
                          </div>
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={
                            selected
                              ? 'bg-primary-1000 text-white py-3 px-4 rounded-lg'
                              : 'bg-white text-black py-3 px-4 rounded-lg'
                          }
                        >
                          <div className='flex items-center'>
                            <span className='mr-2 h-6 w-6'>
                              <BrandTeslaIcon />
                            </span>
                            <span className='font-bold'>Tesla Model S</span>
                          </div>
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={
                            selected
                              ? 'bg-primary-1000 text-white py-3 px-4 rounded-lg'
                              : 'bg-white text-black py-3 px-4 rounded-lg'
                          }
                        >
                          <div className='flex items-center'>
                            <span className='mr-2 h-6 w-6'>
                              <BrandTeslaIcon />
                            </span>
                            <span className='font-bold'>Tesla Model 3</span>
                          </div>
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={
                            selected
                              ? 'bg-primary-1000 text-white py-3 px-4 rounded-lg'
                              : 'bg-white text-black py-3 px-4 rounded-lg'
                          }
                        >
                          <div className='flex items-center'>
                            <span className='mr-2 h-6 w-6'>
                              <BrandTeslaIcon />
                            </span>
                            <span className='font-bold'>Tesla Model X</span>
                          </div>
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={
                            selected
                              ? 'bg-primary-1000 text-white py-3 px-4 rounded-lg'
                              : 'bg-white text-black py-3 px-4 rounded-lg'
                          }
                        >
                          <div className='flex items-center'>
                            <span className='mr-2 h-6 w-6'>
                              <BrandTeslaIcon />
                            </span>
                            <span className='font-bold'>Tesla Model Y</span>
                          </div>
                        </button>
                      )}
                    </Tab>
                    {/* ...  */}
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className='py-8 slide-in-right'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8'>
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className='py-8 slide-in-right'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8'>
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className='py-8 slide-in-right'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8'>
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className='py-8 slide-in-right'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8'>
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className='py-8 slide-in-right'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8'>
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className='py-8 slide-in-right'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8'>
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                          <ItemCard product={product} />
                        </div>
                      </div>
                    </Tab.Panel>
                    {/* ... */}
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </MainContent>
          </main>
        </div>
      </section>
    </>
  );
};

export default PastInventory;
