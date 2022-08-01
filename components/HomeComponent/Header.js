import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Offcanvas } from 'react-bootstrap';
import LogoBlue from '../../public/img/logo_agexis.webp';
import phone from '../../public/img/phone.webp';
import mail from '../../public/img/mail.webp';
import facebook from '../../public/img/facebook.webp';
import twiter from '../../public/img/twiter.webp';
import youtube from '../../public/img/youtube.webp';
import linkid from '../../public/img/linkid.webp';
import search from '../../public/img/search.webp';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsList } from 'react-icons/bs';
import LogoWhite from '../../public/img/logo_agexis_blanc.webp';
import { useRouter } from 'next/router';
import { useRef } from 'react';
const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [hidden, sethidden] = useState(false);
  const [search, setsearch] = useState(false);
  const searchRef = useRef();
  useEffect(() => {
    const element = document.querySelector('.header');
    const nav = document.querySelector('.header-nav');
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        element.classList.add('hide_nav');
        nav.classList.add('nav-opacity');
      } else {
        element.classList.remove('hide_nav');
        nav.classList.remove('nav-opacity');
      }
    });
    const closeSearch = (e) => {
      if (!searchRef.current.contains(e.target)) {
        setsearch(false);
      }
    };
    document.addEventListener('mousedown', closeSearch);
    return () => {
      document.removeEventListener('mousedown', closeSearch);
    };
  }, []);
  const router = useRouter();
  return (
    <div className='header'>
      <div className='fixed'>
        <div className='header-top'>
          {/* <div className='background'></div> */}
          <Link href='/'>
            <a>
              <Image
                className='logo-original'
                src={LogoBlue}
                alt='Logo agexis bureau etude france'
              />
            </a>
          </Link>
          <div className='contact'>
            <div className='contact-icon phone'>
              <Image src={phone} alt='phone' />
              <p>01 84 03 98 29</p>
            </div>
            <div className='contact-icon mail'>
              <Image src={mail} alt='mail' />
              <p>CONTACT@AGEXIS.COM</p>
            </div>
            <div className='contact-icon social'>
              <Image src={facebook} alt='facebook' />
              <Image src={twiter} alt='twiter' />
              <Image src={youtube} alt='youtube' />
              <Image src={linkid} alt='linkid' />
              {/* <Image src={search} alt='search' className='search' /> */}
            </div>
          </div>
        </div>
      </div>
      <>
        <Offcanvas
          style={{ backgroundColor: '#1c2c4e' }}
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title style={{ color: 'white' }}>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className='sidebar-items'>
              {' '}
              <div className='search-boxSideBar'>
                <input type='search' placeholder='search here...' />
              </div>
              <Link href='/'>
                <a
                  className={router.pathname == '/' ? 'active' : ''}
                  onClick={handleClose}
                >
                  Accueil
                </a>
              </Link>
              <Link href='/quiSommesNous'>
                <a
                  onClick={handleClose}
                  className={
                    router.pathname == '/quiSommesNous' ? 'active' : ''
                  }
                >
                  Qui sommes-nous
                </a>
              </Link>
              <Link href='/activite' onClick={handleClose}>
                Activité
              </Link>
              <Link href='/marche' onClick={handleClose}>
                Marché
              </Link>
              <Link href='/acualite' onClick={handleClose}>
                Actualité
              </Link>
              <Link href='/carriere' onClick={handleClose}>
                Carriére
              </Link>
              <Link href='/contact' onClick={handleClose}>
                Démarche
              </Link>
              <Link href='/demarche' onClick={handleClose}>
                Contact
              </Link>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
      <div className='header-nav'>
        <div className='navbar-items'>
          <Link href='/'>
            <a className={router.pathname == '/' ? 'active' : ''}>Accueil</a>
          </Link>
          <Link href='/quiSommesNous'>
            <a className={router.pathname == '/quiSommesNous' ? 'active' : ''}>
              Qui sommes-nous
            </a>
          </Link>
          <Link href='/activite'>Activité</Link>
          <Link href='/marche'>Marché</Link>
          <Link href='/acualite'>Actualité</Link>
          <Link href='/carriere'>Carriére</Link>
          <Link href='/contact'>Démarche</Link>
          <Link href='/demarche'>Contact</Link>{' '}
        </div>{' '}
        <button className='btn__search' onClick={() => setsearch(!search)}>
          <AiOutlineSearch />
        </button>
        <div className={`${search ? 'search-box actives' : 'search-box'}`}>
          <input ref={searchRef} type='search' placeholder='search here...' />
        </div>
        <div className='responsive'>
          <Image
            width={124}
            height={50}
            className='logo'
            src={LogoWhite}
            alt='Logo agexis bureau etude france'
          />
          <BsList onClick={handleShow} />
        </div>
      </div>
    </div>
  );
};

export default Header;
