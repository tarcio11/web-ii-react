import { useState } from 'react'
import { Link } from 'react-router-dom'

import logoImage from '../../../assets/svg/Group 2.svg'
import facebookIcon from '../../../assets/svg/icon-facebook.svg'
import youtubeIcon from '../../../assets/svg/icon-facebook.svg'
import instagramIcon from '../../../assets/svg/icon-instagram.svg'
import twitterIcon from '../../../assets/svg/icon-twitter.svg'

import './styles.css'

export const HeaderMobile = () => {
  const [bx, setBx] = useState(false);

  const showMenu = () => {
    setBx(!bx);
  }
  
  return (
    <header id="header">
      <nav classList={bx && 'active-menu-mobile'} className="navbar-mobile">
        <div onClick={showMenu} className={bx ? 'active-bx bx' : 'bx'} id="bx"></div>
        <div className="logo">
          <Link to="/">
            <img src={logoImage} alt="Iguabank" onload="SVGInject(this)" />
          </Link>
        </div>
        <Link to="/">Login</Link>
      </nav>

      <nav className={bx ? 'active-menu-mobile menu-mobile' : 'menu-mobile'} id="menu-mobile">
        <ul className="nav-list-mobile">
          <li className="mb-1"><Link to="/" className="nav-link-mobile">Iguabank</Link></li>
          <li className="mb-1"><Link to="/" className="nav-link-mobile">Conta Digital</Link></li>
          <li className="mb-1"><Link to="/" className="nav-link-mobile">Pra você</Link></li>
          <li className="mb-1"><Link to="/" className="nav-link-mobile">Quero ser Iguabank</Link></li>
          <li className="mb-1"><Link to="/" className="nav-link-mobile">Redes sociais</Link></li>

          <li className="mt-3 flex-center">
            <Link to="/"><img src={facebookIcon} className="mx-1" alt="Facebook" /></Link>
            <Link to="/"><img src={youtubeIcon} className="mx-1" alt="Youtube" /></Link>
            <Link to="/"><img src={instagramIcon} className="mx-1" alt="Instagram" /></Link>
            <Link to="/"><img src={twitterIcon} className="mx-1" alt="Twitter" /></Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}