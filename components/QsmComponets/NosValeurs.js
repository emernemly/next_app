import React from 'react';
import demarche_pic_a from '../../public/imgQsn/demarche_pic_a_1.webp';
import valeur from '../../public/imgQsn/valeur_pic_1.webp';
import Image from 'next/image';
const NosValeurs = () => {
  return (
    <section className='NosValeurs'>
      <div className='NosValeurs-contant container'>
        <div className='image'>
          <Image src={valeur} alt='valeur' />
        </div>
        <div className='valeur-description'>
          <div className='description'>
            <h2 className='heading-2'>Nos Valeurs</h2>
            <p>
              {' '}
              <span style={{ fontWeight: 'bold', color: 'black' }}>
                AGEXIS
              </span>{' '}
              fait de ses projets et référence signification met en avant la
              synergie de son organisation et de son processus qualité, de ses
              talent projets contracté dans le cadre de ses engagements éthique
              et opérationnelles
            </p>
          </div>
          <Image src={demarche_pic_a} alt='demarche_pic_a' />
        </div>
      </div>
    </section>
  );
};

export default NosValeurs;
