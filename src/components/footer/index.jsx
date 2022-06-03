import { Link } from 'react-router-dom';
import appStoreImg from '../../assets/svg/app-store.svg';
import googlePlayImg from '../../assets/svg/google-play.svg';
import logoMenuImg from '../../assets/svg/Group 2.svg';
import iconFacebookImg from '../../assets/svg/icon-facebook.svg';
import iconInstagramImg from '../../assets/svg/icon-instagram.svg';
import iconTwitterImg from '../../assets/svg/icon-twitter.svg';
import iconYoutubeImg from '../../assets/svg/icon-youtube.svg';

import './styles.css';

export const Footer = () => {
  return (
    <footer>
      <section className="container flex-top">
        <div className="ml-4">
          <h4 className="weight-light color-white">Iguabank</h4>
          <ul className="list mt-2 pt-2">
            <li><Link to="/">Sobre nós</Link></li>
            <li><Link to="/">Carreiras</Link></li>
            <li><Link to="/">Perguntas frequentes</Link></li>
            <li><Link to="/">contato</Link></li>
          </ul>
        </div>
        <div className="ml-4">
          <h4 className="weight-light color-white">Produtos</h4>
          <ul className="list mt-2 pt-2">
            <li><Link to="/">Conta digital</Link></li>
            <li><Link to="/">Cartão de crédito</Link></li>
            <li><Link to="/">Rewards</Link></li>
            <li><Link to="/">Empréstimo</Link></li>
            <li><Link to="/">Conta PJ</Link></li>
          </ul>
        </div>
        <div className="ml-4">
          <h4 className="weight-light color-white">Fale conosco</h4>
          <ul className="list mt-2 pt-2">
            <li><Link to="/">0800 608 6293</Link></li>
            <li><Link to="/">meajuda@iguabank.com.br</Link></li>
            <li><Link to="/">Atendimento 24h</Link></li>
          </ul>
        </div>
        <div className="ml-4">
          <h4 className="weight-light color-white">Explore Mais</h4>
          <ul className="list mt-2 pt-2">
            <li><Link to="/">Comunidade</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/">Newslatter</Link></li>
          </ul>
        </div>
        <div className="ml-4">
          <h4 className="weight-light color-white">Baixe o App</h4>
          <div className="mt-2 pt-2 flex-start">
            <Link to="/" className="button-app">
              <img src={appStoreImg} alt="" className="w-auto" onload="SVGInject(this)" />
            </Link>
            <Link to="/" className="button-app">
              <img src={googlePlayImg} alt="" className="w-auto ml-3" onload="SVGInject(this)" />
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-3 flex-space-between bt-purple">
        <div className="flex-start">
          <img src={logoMenuImg} style={{ maxWidth: "100px" }} alt="" onload="SVGInject(this)" />
          <p className="color-white ml-2">Igua Pagamentos S.A. 18.236.120/0001-58<br />
            Rua Capote Valente, 39 - São Paulo, SP - 05409-000
          </p>
        </div>
        <div className="flex-start">
          <Link to="/"> <img src={iconFacebookImg} className="icon-networks mx-1" alt="" onload="SVGInject(this)" /></Link>
          <Link to="/"><img src={iconYoutubeImg} className="icon-networks mx-1" alt="" onload="SVGInject(this)" /></Link>
          <Link to="/"><img src={iconInstagramImg} className="icon-networks mx-1" alt="" onload="SVGInject(this)" /></Link>
          <Link to="/"> <img src={iconTwitterImg} className="icon-networks mx-1" alt="" onload="SVGInject(this)" /></Link>
        </div>
      </section>
    </footer>
  )
}