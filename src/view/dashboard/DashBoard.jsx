import React from 'react';
import HeadingComponent from '../../components/HeadingComponent';
import MainContent from '../../components/MainContent';
import NavbarPrimary from '../../components/navbars/NavbarPrimary';
import { CustomSelectWithIcon } from '../../components/Selecter';
import SidebarPrimary from '../../components/sidebars/SidebarPrimary';
import { DotsVerticalIcon } from '@heroicons/react/outline';
import SectionSearch from './sections/SectionSearch';
import { Head } from '../../components/Head';

const DashBoard = () => {
  const [sidebar, setSidebar] = React.useState(false);

  const statistics = [
    {
      title: 'total offer',
      icon: 'accounts-icon-0',
      rate: '100',
      comedown: '(2 Offers/Day)',
      offer: '+5 Offers',
      offerCheck: 'Last Week',
    },
    {
      title: 'Current Package',
      icon: 'accounts-icon-1',
      rate: '$48',
      comedown: '(Per Month)',
      offer: '+2 Offers',
      offerCheck: 'Per Day',
    },
    {
      title: 'Current Package',
      icon: 'accounts-icon-1',
      rate: '$48',
      comedown: '(Per Month)',
      offer: '+2 Offers',
      offerCheck: 'Per Day',
    },
  ];

  const lastDate = [
    { name: 'Last 7 days' },
    { name: 'Last 15 days' },
    { name: 'Last 30 days' },
  ];

  const people = [
    {
      iconClassName: 'bg-gray-600',
      title: 'Package Purchase',
      pack: 'Pro Package',
      payedBy: 'Paypal',
      date: '8 Sep, 5:28 PM',
      discount: '-$50',
    },
    {
      iconClassName: 'bg-gray-900',
      title: 'Package Purchase',
      pack: 'Pro Package',
      payedBy: 'Paypal',
      date: '5 Sep, 5:28 PM',
      discount: '-$80',
    },
    {
      iconClassName: 'bg-gray-400',
      title: 'Package Purchase',
      pack: 'Pro Package',
      payedBy: 'Paypal',
      date: '4 Sep, 5:28 PM',
      discount: '-$20',
    },
  ];

  return (
    <>
      <Head title='Dashboard' />
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
              <div className='mb-10'>
                <SectionSearch />
              </div>
              <div className='mb-10'>
                <HeadingComponent
                  title='Account Statistics'
                  type='Statistics:'
                  typeItem='Calefornia'
                />
                <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8'>
                  {statistics.map((items) => (
                    <div
                      className='bg-cover bg-center rounded-2xl'
                      style={{
                        backgroundImage: `url(/assets/images/hero-2.png)`,
                      }}
                    >
                      <div className='px-8 py-10 flex items-center flex-wrap'>
                        <div className='bg-gray-600 p-2 rounded-xl mr-6 mb-2'>
                          <img
                            className='w-full h-full block object-contain'
                            src={`assets/icons/${items.icon}.png`}
                            alt='...'
                          />
                        </div>
                        <div className='capitalize text-gray-300 mb-2'>
                          <p>{items.title}</p>
                          <div className='my-3 flex items-baseline'>
                            <div className='text-3xl text-white mr-1 font-bold'>
                              {items.rate}
                            </div>
                            <div className='text-sm'>{items.comedown}</div>
                          </div>
                          <p>
                            {items.offer}{' '}
                            <span className='text-gray-100 font-medium'>
                              {items.offerCheck}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='mb-6'>
                <div className='flex flex-wrap'>
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
                <div className='mt-8'>
                  <div className='text-gray-400 mb-6'>
                    Month:{' '}
                    <span className='text-gray-600 font-medium'>September</span>
                  </div>

                  <div>
                    <table class='w-full md:table flex flex-row flex-no-wrap rounded-lg overflow-hidden my-5'>
                      {/* <thead class='text-white'>
                      <tr class='bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0'>
                        <th class='p-3 text-left'>Name</th>
                        <th class='p-3 text-left'>Email</th>
                        <th class='p-3 text-left' width='110px'>
                          Actions
                        </th>
                      </tr>
                      <tr class='bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0'>
                        <th class='p-3 text-left'>Name</th>
                        <th class='p-3 text-left'>Email</th>
                        <th class='p-3 text-left' width='110px'>
                          Actions
                        </th>
                      </tr>
                      <tr class='bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0'>
                        <th class='p-3 text-left'>Name</th>
                        <th class='p-3 text-left'>Email</th>
                        <th class='p-3 text-left' width='110px'>
                          Actions
                        </th>
                      </tr>
                      <tr class='bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0'>
                        <th class='p-3 text-left'>Name</th>
                        <th class='p-3 text-left'>Email</th>
                        <th class='p-3 text-left' width='110px'>
                          Actions
                        </th>
                      </tr>
                    </thead> */}
                      <tbody class='flex-1 sm:flex-none'>
                        {people.map((items) => (
                          <tr
                            key={items.title}
                            className='flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 border-b border sm:border-none '
                          >
                            <td className='px-5 sm:px-0 py-4 whitespace-nowrap'>
                              <div className='flex items-center'>
                                <div
                                  className={`p-2 rounded-xl h-12 w-12 ${items.iconClassName}`}
                                >
                                  <img
                                    class='w-full h-full block object-contain'
                                    src='assets/icons/accounts-icon-1.png'
                                    alt='...'
                                  />
                                </div>
                                <div className='ml-4'>
                                  <div className='text-xl font-medium text-gray-900'>
                                    {items.title}
                                  </div>
                                  <div className='text-sm text-gray-500'>
                                    {items.pack}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap'>
                              <div className='text-sm text-gray-900'>
                                {items.date}
                              </div>
                              <div className='text-sm text-gray-500'>
                                {items.department}
                              </div>
                            </td>

                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium'>
                              Paid through{' '}
                              <span className='text-black font-bold'>
                                {items.payedBy}
                              </span>
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-2xl font-bold'>
                              {items.discount}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap sm:text-right text-sm font-medium'>
                              <button
                                type='button'
                                className='text-gray-600 hover:text-gray-900 w-6'
                              >
                                <DotsVerticalIcon />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </MainContent>
          </main>
        </div>
      </section>
    </>
  );
};

export default DashBoard;
