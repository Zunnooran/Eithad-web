import Heading from 'components/core-ui/heading/heading';

import FbIcon from 'assets/icons/facebook.svg?react';
import InstagramIcon from 'assets/icons/instagram.svg?react';
import TeamDotIcon from 'assets/icons/team-dot.svg?react';
import TwitterIcon from 'assets/icons/twitter.svg?react';
import PapuImg from 'assets/images/papu.jpg';
import RanaImg from 'assets/images/rana.jpg';
import TanoliImg from 'assets/images/tanoli.jpg';
import ZainImg from 'assets/images/za9i.jpg';
import ZunoImg from 'assets/images/zuno.jpg';

const teamData = [
  {
    id: 1,
    name: 'Usman Sadiq',
    image: PapuImg,
    position: 'Manager',
  },
  {
    id: 2,
    name: 'M.Zain',
    image: ZainImg,
    position: 'Manager',
  },
  {
    id: 3,
    name: 'Zunnooran Alvi',
    image: ZunoImg,
    position: 'Manager',
  },
  {
    id: 4,
    name: 'Husnain Khurshid',
    image: TanoliImg,
    position: 'Manager',
  },
  {
    id: 5,
    name: 'Rana Nabeel',
    image: RanaImg,
    position: 'Manager',
  },
];

export const Team = () => {
  return (
    <div
      id='team'
      className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'
    >
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <div>
          <Heading className='inline-block px-3 py-px mb-4' heading='Team' />
        </div>
        <h2 className='max-w-lg mb-6 md:text-2xl text-lg font-bold leading-none tracking-tight md:mx-auto'>
          <span className='relative inline-block'>
            <TeamDotIcon />
            <span className='relative'>Welcome</span>
          </span>{' '}
          our talented team of professionals
        </h2>
        {/* <p className='text-base text-gray-700 md:text-lg'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa
          quae.
        </p> */}
      </div>
      <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-4'>
        {teamData?.map((team) => (
          <div key={team.id}>
            <div className='relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl'>
              <img className='object-cover w-full h-56 md:h-64 xl:h-80' src={team.image} alt='Person' />
              <div className='absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
                <p className='mb-1 text-lg font-bold text-gray-100'>{team.name}</p>
                <p className='mb-4 text-xs text-gray-100'>{team.position}</p>
                {/* <p className='mb-4 text-xs tracking-wide text-gray-400'>
                  Vincent Van Gogh’s most popular painting, The Starry Night.
                </p> */}
                <div className='flex items-center justify-center space-x-3'>
                  <a
                    href='https://facebook.com'
                    target='_blank'
                    className='text-white transition-colors duration-300 hover:text-teal-accent-400'
                  >
                    <FbIcon />
                  </a>
                  <a
                    href='https://instagram.com'
                    target='_blank'
                    className='text-white transition-colors duration-300 hover:text-teal-accent-400'
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href='https://twitter.com'
                    target='_blank'
                    className='text-white transition-colors duration-300 hover:text-teal-accent-400'
                  >
                    <TwitterIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
