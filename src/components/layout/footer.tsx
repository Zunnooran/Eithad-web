import Facebook from 'assets/icons/facebook.svg?react';
import Instagram from 'assets/icons/instagram.svg?react';
import Linkedin from 'assets/icons/linkedin.svg?react';
import Twitter from 'assets/icons/twitter.svg?react';
import Youtube from 'assets/icons/youtube.svg?react';

export default function Footer() {
  return (
    <div className='bg-[#050038] pt-12 pb-12 px-4 md:px-8'>
      <div className='border-t-2 border-[#9B99AF]' />
      <div className='flex flex-col gap-5 flex-centered mt-6'>
        <div className='flex gap-4 md:gap-8 flex-centered'>
          <Twitter />
          <Facebook />
          <Linkedin />
          <Instagram />
          <Youtube />
        </div>
        <div className='flex flex-col md:flex-row gap-4 md:gap-10 flex-centered text-white'>
          <p>© 2022</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Manage Cookies</p>
        </div>
      </div>
    </div>
  );
}
