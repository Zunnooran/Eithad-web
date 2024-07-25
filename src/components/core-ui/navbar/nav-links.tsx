// import { Link } from 'react-router-dom';
import { links } from './my-links';

const NavLinks = () => {
  return (
    <>
      {links.map((link) => (
        <div>
          <div className='px-1 text-left md:cursor-pointer group'>
            <li>
              <a
                href={link.link}
                className='md:py-3 py-1 inline-block text-base font-normal leading-6 hover:text-zinc-400'
              >
                {link.name}
              </a>
            </li>
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
