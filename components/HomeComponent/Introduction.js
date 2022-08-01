import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import work from '../../public/imgQsn/construction-engineer.webp';
import Image from 'next/image';
import Module from '../Module';
const Introduction = () => {
  return (
    <section className='_container pt-0'>
      <div className='container'>
        <div className='introduction'>
          <Row>
            <Col xs={12} md={6}>
              <div className='intro_text' data-aos='fade-right'>
                <h2 className='heading-2'>Présentation</h2>
                <p>
                  <span style={{ fontWeight: 'bold', color: 'black' }}>
                    AGEXIS
                  </span>{' '}
                  est un bureau d’études techniques spécialiste du bâtiment qui
                  réunit une équipe polyvalente capable de piloter tous projets
                  de construction simples ou d’envergure. Nos ingénieurs et
                  techniciens vous assistent, sur chaque nouveau projet, en
                  alliant responsabilité, réactivité et professionnalisme propre
                  à une entreprise à taille humaine.
                </p>{' '}
                <p>
                  On met à disposition de ses Maîtres d’Ouvrage des solutions
                  techniques performantes de conception et de réalisation
                  globale de leurs projets tant sur la partie technique,
                  économique que fonctionnelle.
                </p>
              </div>{' '}
            </Col>
            <Col xs={12} md={6}>
              {' '}
              <div className='intro_video' data-aos='zoom-in'>
                <div className='imge'>
                  {' '}
                  <Image src={work} alt='video' /> <Module />
                </div>
              </div>
            </Col>
          </Row>{' '}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
