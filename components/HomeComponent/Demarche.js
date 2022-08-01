import React, { useEffect } from 'react';
import Image from 'next/image';
import demarche from '../../public/img/demarche_new_pic-min.webp';

import LogoBlue from '../../public/img/logo_agexis.webp';

const Demarche = () => {
  return (
    <section className='demarch_container'>
      <div className='demarche container'>
        {' '}
        <div>
          <h2 className='heading-2'>Notre Démarche</h2>
        </div>
        <div className='all-demarche' data-aos='fade-right'>
          <div className='left-demarche'>
            {' '}
            <div className='demarche-contant'>
              <h4>AGEXIS</h4>
              <p>
                a dont le but de développer son offre et répandre a ses
                engagements opérationnels et techniques d'excellence tout en
                ayant une vision en harmonie d'un point de vue sociétal et
                écologique
              </p>
              <ul>
                <li>Mise en place d'un organisation</li>
                <li>Mise en place d'une offre technique certifier</li>
                <li> Mise en place d'une offre technique certifier</li>
                <li>
                  {' '}
                  Promouvoir le RGE auprès des différents acteurs d AGEXIS
                </li>
              </ul>
            </div>
          </div>
          <div className='demarche-image'>
            <div className='img'>
              <Image src={demarche} alt='demarche_pic.png' />
            </div>
            <div className='demarche-description'>
              <div className='date'>2015-2022</div>
              <Image
                className='logo'
                src={LogoBlue}
                alt='Logo agexis bureau etude france'
              />
              <p>
                AGEXIS prend en main les études de l'ensemble des étapes du
                cycle de votre projet, qu'il s'agisse de nouvelle construction,
                de rénovation, d'extension de démolition ou d'aménagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demarche;
