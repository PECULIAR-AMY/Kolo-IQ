import { useState } from 'react';
import Image1 from '../assets/Simple Minimalist Creative Studio Logo.png';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className='fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-500 bg-black/70 px-4 py-6 text-white backdrop-blur-md sm:px-8 md:px-16 lg:justify-evenly'>
      {/* Logo */}
      <a href='#home' className='bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100'>
        <img src={Image1} alt='Logo' className='h-10 w-auto' />
      </a>

      {/* Desktop Menu */}
      <ul className='hidden lg:flex gap-10'>
        {['Home', 'Syncing', 'Budgeting', 'Planning'].map((item, idx) => (
          <li key={idx}>
            <a
              href={`#${item.toLowerCase()}`}
              className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className='lg:hidden text-white focus:outline-none'
        onClick={toggleMenu}
        aria-label='Toggle menu'
      >
        {isOpen ? '✖' : '☰'}
      </button>

      {/* Mobile Sidebar Menu */}
      {isOpen && (
        <div className='fixed right-0 top-[84px] h-screen w-2/3 flex flex-col items-start gap-10 border-l border-gray-600 bg-black/90 p-12 lg:hidden'>
          <ul className='flex flex-col gap-8'>
            {['Home', 'Syncing', 'Budgeting', 'Planning'].map((item, idx) => (
              <li key={idx}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
