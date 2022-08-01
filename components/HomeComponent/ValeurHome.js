import React from 'react';
import { FaHandshake } from 'react-icons/fa';
import { FaRegLightbulb } from 'react-icons/fa';
import { FaRegHourglass } from 'react-icons/fa';
import demarche_pic from '../../public/imgQsn/demarche_pic_a_1.webp';
import { FaEnvira } from 'react-icons/fa';
import Image from 'next/image';
const ValeurHome = () => {
  return (
    <section className=' valeur_home'>
      <div className='container_expertise container'>
        <div className='row'>
          <div className='expertise col-xs-12 col-md-6' data-aos='fade-right'>
            <h2 className='heading-2' data-aos='fade-right'>
              Nos Valeurs
            </h2>
            <div className='discreption'>
              <p>
                AGEXIS fait de ses projets et référence signification met en
                avant la synergie de son organisation et de son processus
                qualité, de ses talent projets contracté dans le cadre de ses
                engagements éthique et opérationnelles
              </p>
            </div>
          </div>
          <div className=' col-xs-12 col-md-6' data-aos='zoom-in'>
            <div className='image-value'>
              <Image src={demarche_pic} alt='nos valeur' />
            </div>
          </div>
        </div>
        <br />
        <div className='type-expetise row' data-aos='fade-up'>
          <div className='type col-xs-12 col-md-6'>
            <div className='icons_value colorHand'>
              {' '}
              <FaHandshake />
            </div>

            <div className='définitions'>
              <h3>Partenariat Et Transparence</h3>

              <p>Nous cherchons des partenariats stratégiques à long terme.</p>
            </div>
          </div>
          <div className='type col-xs-12 col-md-6'>
            <div className='icons_value colorlight '>
              <FaRegLightbulb />
            </div>

            <div className='définitions'>
              <h3>Innovation</h3>
              <p>
                Nous sommes à l'écoute de nouvelles idées issues de nos
                collaborateurs ou de nos partenaires et nous nous engageant à
                les mettre en place
              </p>
            </div>
          </div>
          <div className='type col-xs-12 col-md-6'>
            <div className='icons_value colorreg'>
              {' '}
              <FaRegHourglass />
            </div>

            <div className='définitions'>
              <h3>Réactivité</h3>
              <p>
                {' '}
                Nous avons mis en place un système basé sur des processus
                optimisés afin de garantir la meilleure réactivité
              </p>
            </div>
          </div>
          <div className='type col-xs-12 col-md-6'>
            <div className='icons_value coloren'>
              {' '}
              <FaEnvira />
            </div>

            <div className='définitions'>
              <h3>Environnement</h3>
              <p>
                {' '}
                Nous avons intégré une démarche environnementale dans tous nos
                processus internes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValeurHome;
