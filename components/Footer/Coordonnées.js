import React from 'react';

import Image from 'next/image';
const Coordonnées = () => {
  return (
    <div className='coordonnées'>
      <div className='coordonnée emplacement'>
        <img src='/img/position_icone_N.png' alt='Position' />
        <div className='donnée'>
          {' '}
          <h4>Adresse</h4>
          <p>77 RUE DANTON.93310 LE PRE SAINT GERVAIS</p>
        </div>
      </div>
      <div className='coordonnée telephoner'>
        <img src='/img/phone_icone_N.png' alt='phone' />
        <div className='donnée'>
          <h4>Téléphone</h4>
          <p>01 84 03 98 29</p>
        </div>
      </div>
      <div className='coordonnée ecrivez-nous'>
        <img src='/img/mail_icone_N_1.png' alt='Mail' />
        <div className='donnée'>
          <h4>Ecrivez-nous</h4>
          <p>contact@agexis.com</p>
        </div>
      </div>
    </div>
  );
};

export default Coordonnées;
