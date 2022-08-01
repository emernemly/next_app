import React from 'react';
import Image from 'next/image';
import ingenieur from '../../public/img/icons/ingenieur.svg';
import energie_eco from '../../public/img/icons/energie_eco.svg';
import fluid from '../../public/img/icons/fluide_a (1).svg';
import thermique from '../../public/img/icons/thermique (1).svg';
import route from '../../public/img/icons/route.svg';
import transport from '../../public/img/icons/transpor.svg';

import { Col, Row } from 'react-bootstrap';
function Icons() {
  return (
    <section className='_icons grey'>
      <img
        className='back_icon'
        src='/img/architectural_background_new.webp'
        alt=''
      />
      <div className='container'>
        <Row className='justify-content-center' data-aos='zoom-in'>
          {/* <Col className='icon' xs={12} sm={6} md={2}>
            <div className='icons-expertise gestion'>
              <Image src={ingenieur} />
            </div>
            <h3>Gestion de Projet</h3>
          </Col> */}
          <Col className='icon' xs={12} sm={4} md={2}>
            <div className='icons-expertise str'>
              <Image src={transport} alt='transport' />
            </div>
            <h3>Structure</h3>
          </Col>
          <Col className='icon' xs={12} sm={4} md={2}>
            <div className='icons-expertise elec'>
              <Image src={energie_eco} alt='energie eco' />
            </div>

            <h3>Électricité</h3>
          </Col>

          <Col className='icon' xs={12} sm={4} md={2}>
            {/* <div className='icons-expertise'>
              <Image src={chouf_froid_a} />
            </div>
            <h3>Thermique et Fluide</h3> */}
            <div className='icons-expertise fluide'>
              <Image src={fluid} alt='fluid' />
            </div>
            <h3> Fluide</h3>
          </Col>
          <Col className='icon' xs={12} sm={4} md={2}>
            <div className='icons-expertise therm'>
              <Image src={thermique} alt='thermique' />
            </div>
            <h3>Thermique</h3>
          </Col>
          <Col className='icon' xs={12} sm={4} md={2}>
            <div className='icons-expertise vrd'>
              <Image src={route} alt='route' />
            </div>
            <h3>VRD</h3>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Icons;
