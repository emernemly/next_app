import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';

import CardActualites from './CardActualites';

const Actualités = () => {
  const data = [
    {
      img: '/img/actualité_pic_c.webp',
      title: "La maison de demain : comment l'imaginer ?",
      description: `La maison de demain se profile peu. Certains
              la présentent comme hyper-connectée, ultra-sécurisée,
              écologique,et intelligent.`,
      date: '5 janivier 2022',
    },
    {
      img: '/img/actualité_pic_b.webp',
      title: 'Les technologies qui transorment le secteur du BTP?',
      description: `Malgré les prouesses technologiques de ces trois derniéres
          décennies.ldes travaux publics prend encore du retarden termes d'adoption des nouvelles technologies`,
      date: '21 Mars 2022',
    },
    {
      img: '/img/actualité_pic_a.webp',
      title: 'Tout ce dont il faut savoir sur le béton cellulaire',
      description: `Le béton cellulaire est commercialisé pour la premiére fois en 1929 sous la marque Ytong.
          Le matériau connait alors une expansion rapide dans tout l'europe`,
      date: '15 Mai 2022',
    },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 1000, itemsToShow: 3 },
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
    <section>
      {' '}
      <div className='actualites container' data-aos='fade-up'>
        {' '}
        <h2 className='heading-2'>Actualités</h2>
        <br />
        <Carousel
          breakPoints={breakPoints}
          showArrows={width <= 523 ? false : true}
          pagination={width <= 523 ? true : false}
          itemsToShow={3}
        >
          {data.map((el, i) => (
            <CardActualites key={i} el={el} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Actualités;
