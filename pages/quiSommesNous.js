import React from 'react';
import NosValeurs from '../components/QsmComponets/NosValeurs';
import NotreDémarche from '../components/QsmComponets/NotreDémarche';
import Présentation from '../components/QsmComponets/Présentation';
import Head from 'next/head';
const nous = () => {
  return (
    <div>
      <Head>
        <title>qui_Sommes_Nous</title>
      </Head>
      <Présentation />
      <NosValeurs />
      <NotreDémarche />
    </div>
  );
};

export default nous;
