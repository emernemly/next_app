import React from 'react';
import Carousel from 'react-elastic-carousel';
import Paris from '../../public/img/logo_pari-min.webp';
import Parc from '../../public/img/logo_parc-min.webp';
import ISG from '../../public/img/logo_svg-min.webp';
import Opera from '../../public/img/logo_opera-min.webp';
import dvd from '../../public/img/dvd.webp';
import bnf from '../../public/img/bnf.webp';
import RitzParis from '../../public/img/Ritz-paris.webp';
import Image from 'next/image';
const Partner = () => {
  const breakPoints = [
    { width: 603, itemsToShow: 1 },
    { width: 900, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className='slider_partner'>
      <div className='slide-track'>
        <div className='slide'>
          <Image src={Paris} alt='Paris' />
        </div>
        <div className='slide'>
          <Image src={Parc} alt='Parc' />
        </div>
        <div className='slide igs'>
          <Image src={ISG} alt='ISG' />
        </div>
        <div className='slide '>
          <Image src={Opera} alt='Opera' />
        </div>
        <div className='slide'>
          <Image src={dvd} alt='dvd' />
        </div>
        <div className='slide'>
          <Image src={bnf} alt='bnf' />
        </div>
        <div className='slide '>
          <Image src={RitzParis} alt='RitzParis' />
        </div>
        <div className='slide'>
          <Image src={Paris} alt='Paris' />
        </div>
        <div className='slide'>
          <Image src={Parc} alt='Parc' />
        </div>
        <div className='slide igs'>
          <Image src={ISG} alt='ISG' />
        </div>
        <div className='slide '>
          <Image src={Opera} alt='Opera' />
        </div>
        <div className='slide'>
          <Image src={dvd} alt='dvd' />
        </div>
        <div className='slide'>
          <Image src={bnf} alt='bnf' />
        </div>
        <div className='slide '>
          <Image src={RitzParis} alt='RitzParis' />
        </div>
      </div>
    </div>
  );
};

export default Partner;
