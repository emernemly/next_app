import React from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';
import Link from 'next/link';
const ImgComarison = () => {
  return (
    <section className='allcomparision grey'>
      <div className='container'>
        {' '}
        <h2 className='heading-2'>Réferences</h2>
        <br />
        <div className='allimg'>
          <div className='comparision' data-aos='zoom-in'>
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src='/img/references/Complexe-sportif-Clamart.jpg'
                  alt='Image one'
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src='/img/references/complexe-after.jpg'
                  alt='Image two'
                />
              }
            />
            <p className='title-ref'>Complexe sportif – Clamart</p>
          </div>
          <div className='comparision' data-aos='zoom-in'>
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src='/img/references/Vigneux-Sur-Seine-avant.jpg'
                  alt='Image one'
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src='/img/references/Vigneux-Sur-Seine-apres.jpg'
                  alt='Image two'
                />
              }
            />
            <p className='title-ref'>68 logements et 20 foyers</p>
          </div>
        </div>
        <br />
      </div>{' '}
      <Link href='/'>
        <div>
          <button className='primary-btn '>Voir plus</button>{' '}
        </div>
      </Link>
    </section>
  );
};

export default ImgComarison;
