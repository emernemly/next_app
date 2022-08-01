import React, { useEffect, useState } from 'react';
import CardDomaine from './CardDomaine';
import Carousel from 'react-elastic-carousel';
import batiment_habitation from '../../../public/img/Batiment-habitation.jpg';
import batiment_fonctionelle from '../../../public/img/Batiments-fonctionnel.jpg';
import batiment_industruelle from '../../../public/img/industriel.jpg';
import VRD from '../../../public/img/VRD.jpg';

function Domaine() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 800, itemsToShow: 3 },
  ];
  const domaines = [
    {
      image: batiment_habitation,
      title: "Batiments d'habitation",
      description: [
        'Conception, construction ou réhabilitation de bâtiments d’habitation, maisons individuelles neuves, logements collectifs et sociaux.',
      ],
    },
    {
      image: batiment_fonctionelle,
      title: 'Batiments fonctionelle',
      description: [
        'Construction et réhabilitation d’ouvrages fonctionnels : scolaires, culturels, sportifs et  établissements hospitaliers et hôteliers.',
      ],
    },
    {
      image: batiment_industruelle,
      title: 'Batiments industruelle',
      description: [
        'Construction simple ou complexe d’unités de production, de commerces et de bâtiments industriels alliant technicité et performance.',
      ],
    },
    {
      image: VRD,
      title: 'Infrastructures, ouvrages d’art, et VRD',
      description: [
        'Projets à grande envergure de construction et de restructuration des infrastructures, ouvrages d’Art, voiries et réseaux divers.',
      ],
    },
  ];

  const [width, SetWidth] = useState('');

  const UpdateDimensions = () => {
    SetWidth(window.innerWidth);
  };
  useEffect(() => {
    SetWidth(window.innerWidth);
    window.addEventListener('resize', UpdateDimensions);
    return () => {
      window.removeEventListener('resize', UpdateDimensions);
    };
  }, []);
  return (
    <section className='domaines grey'>
      <img
        className='back_icon'
        src='/img/architectural_background_new.webp'
        alt=''
      />
      <div className='all_carousel container' data-aos='fade-up'>
        <h2 className='heading-2'>Domaines D'interventions</h2>
        <br />
        <Carousel
          showArrows={width <= 523 ? false : true}
          pagination={width <= 523 ? true : false}
          itemsToShow={3}
          breakPoints={breakPoints}
          itemPadding={[10, 10]}
        >
          {domaines.map((domaine, index) => (
            <CardDomaine key={index} domaine={domaine} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Domaine;
