import React, { useEffect } from 'react';
import expertise_pic_up from '../../public/img/expertise_pic_up-min.webp';
import expertise_pic_down from '../../public/img/expertise_pic_down-min.webp';
import roue_expertise from '../../public/img/roue_expertise-min.webp';

import Fonctionelle from '../../public/img/fonctionelle.webp';
import Technique from '../../public/img/technique.webp';
import Travers from '../../public/img/travers.webp';

import Image from 'next/image';
const Expertise = () => {
  return (
    <section className='expertise_container my-4'>
      <div className='container_expertise container row' data-aos='fade-right'>
        <div className='expertise col-xs-12 col-md-6'>
          {' '}
          <h2 className='heading-2'>Nos Expertises</h2>
          <div className='discreption'>
            <p>
              De la définition du process jusqu'a la livraison des
              batiments.nous mettons nos connaissances et nos compétences a
              votre disposition pour produire des études fiables, précises et
              pertinentes conformément aux besoins de vos projets.
            </p>
          </div>
          <div className='type-expetise'>
            <div className='type fonctionnel'>
              <div className='svg-content svg-fonc'>
                {' '}
                <Image src={Fonctionelle} alt='Fonctionelle' />
              </div>

              <div className='définition'>
                <h3>Expertise fonctionnnel</h3>

                <p>
                  De la définition du process jusqu'a la livraison des batiments
                  nous mettons.
                </p>
              </div>
            </div>
            <div className='type technique'>
              <div className='svg-content'>
                <Image src={Technique} alt='Technique' />
              </div>

              <div className='définition'>
                <h3>Expertise technique</h3>
                <p>
                  De la définition du process jusqu'a la livraison des
                  batiments,nous mettons nos connaissances
                </p>
              </div>
            </div>
            <div className='type transverses'>
              <div className='svg-content'>
                {' '}
                <Image src={Travers} alt='Travers' />
              </div>

              <div className='définition'>
                <h3>Expertise transverses</h3>
                <p>
                  {' '}
                  De la définition du process jusqu'a a la livraision ds
                  batiments,nous mettons nos connaissances
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='images col-xs-12 col-md-6'>
          <img
            className='img-roue'
            src='img/roue_expertise-min.webp'
            alt='roue_expertise'
          />

          <div className='up'>
            {' '}
            <div className='img'>
              <Image src={expertise_pic_up} alt='expertise_pic_up' />
            </div>
            <div className='Num projects'>
              <h4>250</h4> <p>Porjets réalisés</p>
            </div>
          </div>
          <div className='down'>
            {' '}
            <div className='Num employes'>
              <h4>75</h4> <p>Employés</p>
            </div>{' '}
            <div className='img'>
              <Image
                src={expertise_pic_down}
                alt='expertise_pic_down'
                layout='responsive'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
