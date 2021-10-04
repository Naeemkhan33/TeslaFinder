import React from 'react';
import HeadingComponent from '../../components/HeadingComponent';
import MainContent from '../../components/MainContent';
import NavbarPrimary from '../../components/navbars/NavbarPrimary';
import SidebarPrimary from '../../components/sidebars/SidebarPrimary';
import { PackCard } from '../../components/Packs/PackCards';
import { Head } from '../../components/Head';

const Packages = () => {
  const [sidebar, setSidebar] = React.useState(false);

  const freeItems = [
    { name: '03 notification a week' },
    { name: 'Notified within 6 Hours of new vehicle arrival in your area' },
    { name: '1 Simultaneous Notification Searches' },
    { name: 'Search Nearby' },
    { name: 'Email Alerts' },
    { name: 'Text Alerts' },
    {
      name: 'View recently sold Inventory in your area',
      itemClassName: 'text-gray-300',
    },
  ];

  const premiumItems = [
    { name: 'Unlimited notification a week' },
    { name: 'Notified within 1 minute of new vehicle arrival in your area' },
    { name: '4 Simultaneous Notification Searches' },
    { name: 'View recently sold Inventory in your area' },
    { name: 'Search Nearby' },
    { name: 'Email Alerts' },
    { name: 'Text Alerts' },
  ];

  return (
    <>
      <Head title='Packages' />
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
                    title='Latest Transactions'
                    type='Statistics:'
                    typeItem='Calefornia'
                  />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8'>
                  <PackCard
                    title='$100'
                    timeTitle='/month'
                    subTitle='The best offer you can get!'
                    list={premiumItems}
                    link='/packages'
                    btnTitle='Premium Selected'
                    className='active'
                  />
                  <PackCard
                    title='$75'
                    timeTitle='/month'
                    subTitle='Try it as long as you like'
                    list={freeItems}
                    link='/packages'
                    btnTitle='Select Free'
                  />
                  <PackCard
                    title='$50'
                    timeTitle='/month'
                    subTitle='Try it as long as you like'
                    list={freeItems}
                    link='/packages'
                    btnTitle='Select Free'
                  />
                  <PackCard
                    title='$25'
                    timeTitle='/month'
                    subTitle='Try it as long as you like'
                    list={freeItems}
                    link='/packages'
                    btnTitle='Select Free'
                  />
                  <PackCard
                    title='Free'
                    subTitle='Try it as long as you like'
                    list={freeItems}
                    link='/packages'
                    btnTitle='Select Free'
                  />
                </div>
              </div>
            </MainContent>
          </main>
        </div>
      </section>
    </>
  );
};

export default Packages;
