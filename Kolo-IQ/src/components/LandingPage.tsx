import React, { FC } from 'react';
import BackgroundImage from '../assets/Background 2.jpg';
import Logo from '../assets/Simple Minimalist Creative Studio Logo.png'

const LandingPage: FC = () => {
  return (
    <div className='flex  gap-50'>
         <img src={Logo} alt='logo'/>
      <img src={BackgroundImage} alt='image'/>
    </div>
  );
};

export default LandingPage;