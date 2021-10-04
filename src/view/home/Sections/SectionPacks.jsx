import { CheckCircleIcon } from '@heroicons/react/outline';
import React from 'react';
import { PackCard } from '../../../components/Packs/PackCards';

const SectionPacks = () => {
  const freeItems = [
    { name: '03 notification a week' },
    { name: 'Notified within 6 Hours of new vehicle arrival in your area' },
    { name: '1 Simultaneous Notification Searches' },
    { name: 'Search Nearby' },
    { name: 'Email Alerts' },
  ];

  const premiumItems = [
    { name: 'Unlimited notification a week' },
    { name: 'Notified within 1 minute of new vehicle arrival in your area' },
    { name: '4 Simultaneous Notification Searches' },
    { name: 'View recently sold Inventory in your area' },
  ];

  const premiumItemsTwo = [
    { name: 'Search Nearby' },
    { name: 'Email Alerts' },
    { name: 'Text Alerts' },
  ];

  return (
    <section className='mt-24'>
      <div className='container mx-auto px-4 sm:px-12 lg:px-14'>
        <div className='xl:w-5/6 mx-auto px-4 h-full flex flex-col'>
          <div className='text-center mb-12'>
            <p className='mb-3'>Pricing</p>
            <h2 class='mb-0 text-black text-2xl md:text-3xl xl:text-4xl leading-snug xl:leading-tight font-bold'>
              Minimal Chrages for Unlimited Benefits!!
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8'>
            <PackCard
              title='Free'
              subTitle='Try it as long as you like'
              list={freeItems}
              link='/'
              className='xl:order-1'
              btnTitle='Select Free'
            />
            <PackCard
              title='$100'
              timeTitle='/month'
              subTitle='The best offer you can get!'
              list={premiumItems}
              link='/'
              btnTitle='Premium Selected'
              className='active md:col-span-2 order-first xl:order-2'
              boxClassName='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 xl:gap-16'
            >
              <ul className='mb-10'>
                {premiumItemsTwo.map((item) => (
                  <li className='flex items-center mb-4'>
                    <span className='block w-5 mr-2'>
                      <CheckCircleIcon />
                    </span>
                    <span className='text-sm'>{item.name}</span>
                  </li>
                ))}
              </ul>
            </PackCard>
            <PackCard
              title='$25'
              timeTitle='/month'
              subTitle='Try it as long as you like'
              list={freeItems}
              link='/'
              className='xl:order-3'
              btnTitle='Select Free'
            />
            <PackCard
              title='$50'
              timeTitle='/month'
              subTitle='Try it as long as you like'
              list={freeItems}
              link='/'
              className='xl:order-4'
              btnTitle='Select Free'
            />
            <PackCard
              title='$75'
              timeTitle='/month'
              subTitle='Try it as long as you like'
              list={freeItems}
              link='/'
              className='xl:order-5'
              btnTitle='Select Free'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPacks;
