import React from 'react';
import presentation_pic_a from '../../public/imgQsn/presentation_pic_a.webp';
import presentation_pic_b from '../../public/imgQsn/presentation_pic_b_1.webp';
import Image from 'next/image';
const Présentation = () => {
  return (
    <section className='presentation'>
      <div className='all-presentation container'>
        <div className='presentation-contant'>
          <div>
            {' '}
            <h2 className='heading-2'>Présentation</h2>
            <h4>Entreprise a taille humaine</h4>
          </div>
          <div className='paragraphe'>
            <p className='paragraphe-1'>
              <b style={{ fontWeight: 'bold', color: 'black' }}>AGEXIS</b> est
              une société d'ingénierie et de gestion des projets de la
              construction aillant de projet de construction d'un ouvrage clé en
              main a des projets en ingénierie complexe uni disciplinaire
            </p>
            <p className='paragraphe-2'>
              <span style={{ fontWeight: 'bold', color: 'black' }}>AGEXIS</span>{' '}
              intégre dans son approche et dans sa gestion de projet les
              transition actuelles énergétique et numériques en mettant en
              avant:
            </p>
          </div>
          <ul className='ul'>
            <li>Le RGE pour transition énergétique</li>
            <li> Le BIM pour la transition numérique.</li>
          </ul>
        </div>
        <div className='images'>
          <div className='b'>
            <Image src={presentation_pic_b} alt='presentation' />{' '}
            <div className='a'>
              {' '}
              <Image src={presentation_pic_a} alt='presentation' />
            </div>{' '}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Présentation;
