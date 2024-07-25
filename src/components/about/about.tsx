import Heading from 'components/core-ui/heading/heading';

import AboutUsImg from 'assets/images/about.jpg';

const data = {
  paragraph:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  Why: ['Lorem ipsum dolor', 'Tempor incididunt', 'Lorem ipsum dolor', 'Incididunt ut labore'],
  Why2: ['Lorem ipsum dolor', 'Tempor incididunt', 'Lorem ipsum dolor', 'Incididunt ut labore'],
};

export const About = () => {
  return (
    <div id='about' className='py-16'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2'>
            <img src={AboutUsImg} className='w-full h-auto' alt='About us' />
          </div>
          <div className='w-full md:w-1/2'>
            <div className='px-6 pb-6 md:pt-0 pt-6'>
              <Heading heading='About Us' />
              <p className='mb-6'>{data?.paragraph}</p>
              <h3 className='text-2xl font-semibold mb-4'>Why Choose Us?</h3>
              <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                  <ul className='list-disc list-inside'>
                    {data ? data.Why.map((d, i) => <li key={`${d}-${i}`}>{d}</li>) : 'loading'}
                  </ul>
                </div>
                <div className='w-full lg:w-1/2'>
                  <ul className='list-disc list-inside'>
                    {data ? data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>) : 'loading'}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
