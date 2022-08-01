import React from 'react';
import Coordonnées from './Coordonnées';

const Footer = () => {
  return (
    
      <footer>
        <div className='footer-1'>
          <div>
            <img src='img/logo_agexis_blanc.webp' alt='AGEXIS' />
            <p>
              Vous étes à la recherche d'un bureau de confiance pour réaliser
              des études techniques ou spécifiques pour concevoir votre projet
              de construction
              <br />
              AGEXIS répond à vos tous vos besoins, memes les plus complexes
              pour vous fournir des études fiables et précises répondant aux
              normes en vigueur. Contactez-nous dès maintenant !
            </p>
          </div>
        </div>
        <div className='links'>
          <h4>Accés rapide</h4>
          <div className='link'>
            <a href='/batiment'>{'>> '}BATIMENT</a>
            <a href='/nos-metiers'>{'>> '}NOS METIERS</a>
            <a href='/déposez-CV'>{'>> '} Déposez CV</a>
            <a href='nos-offres'>{'>> '} Nos offres</a>
          </div>
        </div>
        <div className='contact'>
          <h4>Contact rapide</h4>
          <div className='contact_1'>
            <input placeholder='Adresse mail' type='text' />
            <button className='second-btn'>Envoyer</button>
          </div>
          {/* <div className='icons'>
            <div className='facebook'>
              <img src='/img/facebook_icone_b.webp' alt='Facebook' />
            </div>
            <img src='/img/twiter_icone_b.webp' alt='Twiter' />
            <img src='/img/youtube_icone_b.webp' alt='Youtube' />
            <img src='/img/linkidin_icone_b.webp' alt='Linkidin' />
          </div> */}
        </div>
      </footer>

  );
};

export default Footer;
