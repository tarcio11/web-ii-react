import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import logoImage from '../../../assets/svg/Group 2.svg'

import './styles.css'

export const HeaderDesktop = () => {
  const [goingUp, setGoingUp] = useState(false);
  const [menuItem1, setMenuItem1] = useState(false);
  const [menuItem2, setMenuItem2] = useState(false);
  const [menuItem3, setMenuItem3] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY >= 50) {
        setGoingUp(true);
      }
      else {
        setGoingUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  const showDropdown1 = (event) => {
    event.preventDefault();
    setMenuItem1(!menuItem1);
    setMenuItem2(false);
    setMenuItem3(false);
  }

  const showDropdown2 = (event) => {
    event.preventDefault();
    setMenuItem2(!menuItem2);
    setMenuItem1(false);
    setMenuItem3(false);
  }

  const showDropdown3 = (event) => {
    event.preventDefault();
    setMenuItem3(!menuItem3);
    setMenuItem1(false);
    setMenuItem2(false);
  }

  return (
    <header className={goingUp && "active-header"} id="header">
      <nav className="navbar-desktop">
        <div className="navbar-desktop-item-1">
          <div className="logo">
            <Link to="/">
              <img src={logoImage} alt="Iguabank" onload="SVGInject(this)" />
            </Link>
          </div>
          <ul className="menu-desktop">
            <li onClick={showDropdown1} className="menu-item" id="menu-item-1">
              <Link to="/" className="nav-link-desktop">Iguabank</Link>
              <ul className={menuItem1 ? "active-dropdown-menu dropdown-menu" : "dropdown-menu"} id="dropdown-item-1">
                <li className="dropdown-item"><Link to="/" className="nav-link-dropdown">O Iguabank</Link></li>
                <li className="dropdown-item"><Link to="/" className="nav-link-dropdown">Carreira</Link></li>
                <li className="dropdown-item"><Link to="/" className="nav-link-dropdown">Imprensa</Link></li>
              </ul>
            </li>
            <li onClick={showDropdown2} className="menu-item" id="menu-item-2">
              <Link to="/" className="nav-link-desktop">Conta Digital</Link>
              <ul className={menuItem2 ? "active-dropdown-menu dropdown-menu" : "dropdown-menu"} id="dropdown-item-2">
                <li className="dropdown-item"><Link to="/" className="nav-link-dropdown">Crie sua conta</Link></li>
                <li className="dropdown-item"><Link to="/" className="nav-link-dropdown">Transferência</Link></li>
                <li className="dropdown-item"><Link to="/" className="nav-link-dropdown">Rendimento</Link></li>
              </ul>
            </li>
            <li onClick={showDropdown3} className="menu-item" id="menu-item-3">
              <Link to="/" className="nav-link-desktop">Pra você</Link>
              <ul className={menuItem3 ? "active-dropdown-menu dropdown-menu" : "dropdown-menu"} id="dropdown-item-3">
                <li className="dropdown-item"><Link to="/" className="nav-link-dropdown">Comunidade</Link></li>
                <li className="dropdown-item"><Link to="/" className="nav-link-dropdown">Rewards</Link></li>
                <li className="dropdown-item"><Link to="/" className="nav-link-dropdown">Novidades</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="navbar-desktop-item-2">
          <Link to="/register" className="btn mr-2">Quero ser Iguabank</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </header>
  )
}