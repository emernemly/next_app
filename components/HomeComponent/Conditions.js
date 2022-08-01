import React from 'react';
import GestionProjet from '../assets/logo/gestion_de_projet';

import Ingenierie from '../assets/logo/ingenierie.js';
import Conseils from '../assets/logo/conseils.js';
import Image from 'next/image';

const Conditions = () => {
  return (
    <div className='conditions '>
      <div className='condition gestion_de_projet '>
        <GestionProjet />
        {/* <Image src={GestionProjet} alt='Gestion_Projet' /> */}
        <h5>
          Gestion de <br />
          projet
        </h5>
      </div>
      <div className='condition ingenierie '>
        <Ingenierie />
        {/* <Image src={Ingenierie} alt='Ingenierie' /> */}
        <h5>Ingénierie</h5>
      </div>
      <div className='condition conseils '>
        {' '}
        <Conseils />
        {/* <Image src={Conseils} alt='Conseils' /> */}
        <h5>Conseils</h5>
      </div>
    </div>
  );
};

export default Conditions;
