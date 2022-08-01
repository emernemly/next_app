import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import { Card, CardImg } from 'react-bootstrap';

import Link from 'next/link';
const CardActualites = ({ el }) => {
  return (
    <div>
      <Card className='Actualites-contant'>
        <CardImg src={el.img} alt={el.title} />
        <Card.Body className='body'>
          <Card.Title>
            <h4>{el.title}</h4>
          </Card.Title>
          <Card.Text>{el.description}</Card.Text>
          <div className='info'>
            <div className='date'>
              {' '}
              <BiCalendar /> {el.date}
            </div>
            <Link href='/'>
              <div>
                <a>Lire la suite</a>{' '}
              </div>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardActualites;
