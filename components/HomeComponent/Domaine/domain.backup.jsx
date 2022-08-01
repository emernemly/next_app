import React, { useEffect, useState } from 'react';
import CardDomaine from './CardDomaine';
import Carousel from 'react-elastic-carousel';
import batiment_habitation from '../assets/img/batiment_habitation.png';
import batiment_fonctionelle from '../assets/img/batiment_fonctionelle.png';
import batiment_industruelle from '../assets/img/batiment_industruelle.png';
import CadreUp from '../assets/logo/cadre_up';
const domaines = [
  {
    image: batiment_habitation,
    title: "Batiments d'habitation",
    description: (
      <div className='choix'>
        <ul>
          <li> Maisons individuelles</li>
          <li>Appartements Bâtiments</li>
          <li> d’habitation collectifs</li>
          <li> Logements sociaux</li>
        </ul>
      </div>
    ),
  },
  {
    image: batiment_fonctionelle,
    title: 'Batiments fonctionelle',
    description: (
      <div className='choix'>
        <ul>
          <li> Immeubles Grande Hauteur (IGH) et immeubles de Très</li>
          <li> Grande Hauteur (ITGHI)</li>
          <li> Bâtiments administratifs</li>
          <li>Bâtiments d’enseignement...</li>
        </ul>
      </div>
    ),
  },
  {
    image: batiment_industruelle,
    title: 'Batiments industruelle',
    description: (
      <div className='choix'>
        <ul>
          <li> Unités de stockage</li>
          <li>
            {' '}
            Bâtiments industriels / Locaux techniques usines, stations
            <br />
            d’épuration, entrepôts et hangars
          </li>
          <li> Centres d’exploitation routière</li>
          <li>
            {' '}
            Centres de secours, déchetterie…
            <br /> Bureaux Restauration / Hôtellerie / Centres de vacances
          </li>
        </ul>
      </div>
    ),
  },
  {
    image: batiment_industruelle,
    title: 'Infrastructures, ouvrages d’art, et VRD',
    description: (
      <div className='choix'>
        <ul>
          <li> Unités de stockage</li>
          <li>
            Bâtiments industriels / Locaux techniques usines, stations
            d’épuration, entrepôts et hangars
          </li>
          <li> Centres d’exploitation routière</li>
          <li>
            {' '}
            Centres de secours, déchetterie… Bureaux Restauration / Hôtellerie /
            Centres de vacances
          </li>
        </ul>
      </div>
    ),
  },
];
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 600, itemsToShow: 2 },
  { width: 1000, itemsToShow: 3 },
];

const Domaine = () => {
  // function useWindowSize() {
  //   // Initialize state with undefined width/height so server and client renders match
  //   // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  //   const [windowSize, setWindowSize] = useState({
  //     width: undefined,
  //     height: undefined,
  //   });

  //   useEffect(() => {
  //     // only execute all the code below in client side

  //     // Handler to call on window resize
  //     function handleResize() {
  //       // Set window width/height to state
  //       setWindowSize({
  //         width: window.innerWidth,
  //         height: window.innerHeight,
  //       });

  //       // Add event listener
  //       window.addEventListener('resize', handleResize);

  //       // Call handler right away so state gets updated with initial window size
  //       handleResize();

  //       // Remove event listener on cleanup
  //       return () => window.removeEventListener('resize', handleResize);
  //     }
  //   }, []); // Empty array ensures that effect is only run on mount
  //   return windowSize;
  // }
  // const size = useWindowSize();
  return (
    <div className='_container'>
      <div className='all_carousel container'>
        <h2>Domaines D'interventions</h2>

        <Carousel
          showArrows={true}
          pagination={false}
          itemsToShow={3}
          breakPoints={breakPoints}
        >
          {domaines.map((domaine, index) => (
            <CardDomaine key={index} domaine={domaine} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Domaine;
