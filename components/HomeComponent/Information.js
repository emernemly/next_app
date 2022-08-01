import React from 'react';
import Image from 'next/image';
import Employer from '../../public/img/employer.webp';
import Parteniare from '../../public/img/partenaire.webp';
import Porjets from '../../public/img/projets réalisé.webp';
const Information = () => {
  return (
    <section className='_CHIFFRES '>
      <div className='container'>
        <div className='chiffres'>
          <div className='chiffre employés'>
            <div className='img'>
              {' '}
              <Image src={Employer} alt='Employer' />
            </div>

            <h3>
              75
              <br />
              Employés
            </h3>
          </div>
          <div className='chiffre Projets'>
            <div className='img'>
              <Image src={Parteniare} alt='Parteniare' />
            </div>
            <h3>
              30
              <br />
              Clients partenaires
            </h3>
          </div>
          <div className='chiffre Clients'>
            <div className='img'>
              {' '}
              <Image src={Porjets} alt='Porjets' />
            </div>
            <h3>
              250
              <br />
              Projets réalisés
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
