import React from 'react';

const Devis = () => {
  return (
    <section className='Devis'>
      <div className=' container'>
        <div className='discription' data-aos='fade-right'>
          <h3>
            Demandez votre <br />
            devis maintenant
          </h3>
          <p>
            réalisez gratuitement votre demande de devis en ligne de bureau
            d'études et choisissez un professionnel pour vos travaux
          </p>
        </div>
        <div className='form' data-aos='fade-up'>
          <div className='Np'>
            <input type='text' className='nom' placeholder='Nom' />
            <input type='text' className='prenom' placeholder='Prénom' />
          </div>
          <input type='text' placeholder='Email' />
          <textarea type='text' placeholder='Sujet' />
          <button className='second-btn'>Envoyer le Message</button>
        </div>
      </div>
    </section>
  );
};

export default Devis;
