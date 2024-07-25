import { useState } from 'react';

import { CloseOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import Container from '../container/container';
import NavLinks from './nav-links';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav id='home' className='bg-white border-b border-gray-300 z-50 p-3'>
      <Container>
        <div className='flex justify-between'>
          <div className='flex justify-start items-center font-medium w-full '>
            <div className='z-50 md:mb-0 md:w-auto w-full flex justify-between items-center'>
              <h1 className='font-extrabold text-2xl leading-6 text-black md:cursor-pointer h-9 font-primary flex items-center'>
                Etihad
              </h1>
              {/* <img src={} alt='logo' className='md:cursor-pointer h-9' /> */}
              <div className='text-3xl md:hidden cursor-pointer' onClick={() => setOpen(!open)}>
                {open ? <CloseOutlined /> : <MenuUnfoldOutlined />}
              </div>
            </div>

            {/* Mobile nav */}
            <ul
              className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-10 pl-7 md:mt-0 mt-8
        duration-500 z-10 ${open ? 'left-0' : 'left-[-100%]'}
        `}
            >
              <NavLinks />
            </ul>
          </div>
          <div className='md:block hidden'>
            <div className='flex gap-5 items-center'>
              <ul className='md:flex hidden uppercase items-center gap-2 font-[Poppins] '>
                <NavLinks />
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
