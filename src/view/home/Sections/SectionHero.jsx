import React from 'react';
import { ButtonPrimaryBtn } from '../../../components/ButtonPrimary';
import { InputWithIcon } from '../../../components/Inputs';
import { CustomSelect } from '../../../components/Selecter';

const SectionHero = () => {
  const people = [
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
  ];

  return (
    <section>
      <div className='container mx-auto px-4 sm:px-12 lg:px-14'>
        <div
          className='h-80 w-full rounded-2xl md:rounded-3xl bg-center bg-cover sm:h-86 md:h-96 lg-h-100'
          style={{ backgroundImage: `url(/assets/images/hero.png)` }}
        >
          <div className='md:w-5/6 mx-auto px-4 pt-6 h-full flex flex-col'>
            <div className='my-auto'>
              <h2 className='mb-7 text-white text-3xl md:text-5xl xl:text-6xl leading-snug xl:leading-tight font-bold'>
                Don’t wait months to <br className='hidden md:block' /> get your
                first Tesla
              </h2>
              <h6 className='text-white md:text-2xl md:leading-9 font-normal'>
                We will alert you via text when we find a car that meets{' '}
                <br className='hidden lg:block' /> your search criteria in your
                area.
              </h6>
            </div>
            <form
              noValidate
              className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 bg-gray-200 p-6 rounded-2xl md:transform mt-10 md:mt-0 md:translate-y-1/2'
            >
              <div>
                <InputWithIcon
                  placeholder='Enter your zip code'
                  type='text'
                  icon='location.svg'
                />
              </div>
              <div>
                <CustomSelect
                  options={people}
                  placeHolder='Select model'
                  icon='date-picker.svg'
                />
              </div>
              <div>
                <CustomSelect
                  options={people}
                  placeHolder='Select motor'
                  icon='compass.svg'
                />
              </div>
              <div>
                <ButtonPrimaryBtn type='submit' name='Let’s Get Started' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
