import Actualités from '../components/HomeComponent/Actualités/Actualités';
import Devis from '../components/HomeComponent/Devis';
import Domaine from '../components/HomeComponent/Domaine/Domaine';
import Expertise from '../components/HomeComponent/Expertise';
import Slides from '../components/HomeComponent/Slides';
import Demarche from '../components/HomeComponent/Demarche';
import ImgComarison from '../components/HomeComponent/ImgComarison';
import Partner from '../components/HomeComponent/Partner';
import Information from '../components/HomeComponent/Information';
import Introduction from '../components/HomeComponent/Introduction.js';
import Head from 'next/head';
import Icons from '../components/HomeComponent/Icons';
import Maps from '../components/Footer/Maps';
import ValeurHome from '../components/HomeComponent/ValeurHome';
export default function Home() {
  return (
    <div className='_home'>
      {/* <div className='background'></div> */}
      <Head>
        <title>Agexis</title>
      </Head>
      <Slides />
      {/* <Information /> */}
      {/* <Conditions /> */}
      <Introduction />
      <Icons />
      <Expertise />
      {/* <Demarche /> */}
      <Domaine />
      <ValeurHome />
      <ImgComarison />
      <Actualités />
      <Devis />
      <Partner />
      <Maps />
    </div>
  );
}
