import '../styles/globals.css';
import '../styles/index.scss';
import '../styles/Header.scss';
import '../styles/slide.scss';
import '../styles/Expertise.scss';
import '../styles/Demarche.scss';
import '../styles/Domaine.scss';
import '../styles/CardDomaine.scss';
import '../styles/ImgComarison.scss';
import '../styles/Actualités.scss';
import '../styles/ScrollUp.scss';
import '../styles/Devis.scss';
import '../styles/Partner.scss';
import '../styles/Coordonnées.scss';
import '../styles/Footer.scss';
import '../styles/Information.scss';
import '../styles/Introduction.scss';
import '../styles/ValeurHome.scss';
import '../styles/qsmStyle/Présentation.scss';
import '../styles/qsmStyle/NosValeurs.scss';
import '../styles/qsmStyle/NotreDémarche.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/HomeComponent/Header';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ScrollUp from '../components/HomeComponent/ScrollUp';
import Footer from '../components/Footer/Footer';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      disable: function () {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
      },
    });
  }, []);

  return (
    <>
      <ScrollUp />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
