import bgHomeImg from '../../assets/svg/bg-home.svg'
import appStoreImg from '../../assets/svg/appstore.svg';
import playStoreImg from '../../assets/svg/playstore.svg';
import iconCardImg from '../../assets/svg/icon-card.svg';
import iconMobileImg from '../../assets/svg/icon-mobile.svg';
import iconContaclessImg from '../../assets/svg/icon-contactless.svg';

import './styles.css'
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <>
      <div className="bg-home">
        <img src={bgHomeImg} className="svg-bg-home" alt="" onload="SVGInject(this)" />
      </div>
      <main className="container hero py-5">
        <div className="flex-item-1 py-3">
          <h1>Ser Iguabank é reinventar sua vida financeira.</h1>
          <p className="my-2">Conta com rendimento acima da poupança, cartão
            de crédito sem anuidade e o melhor: resolva tudo pelo App.
          </p>
          <div className="flex-start">
            <Link to="/register" className="btn">Quero ser Iguabank</Link>
            <Link to="/"><img src={appStoreImg} className="ml-1 w-auto" alt="App Store" onload="SVGInject(this)" /></Link>
            <Link to="/"><img src={playStoreImg} className="ml-1 w-auto" alt="Play Store" onload="SVGInject(this)" /></Link>
          </div>
        </div>
        <div className="flex-item-3 div-card flex-center py-4">
          <img src={iconCardImg} className="icon-card-hero dropshadow" alt="Card" onload="SVGInject(this)" />
          <img src={iconMobileImg} className="icon-mobile-hero dropshadow" alt="Mobile" onload="SVGInject(this)" />
          <img src={iconContaclessImg} className="icon-contactless-hero dropshadow" alt="Contactless" onload="SVGInject(this)" />
          <div className="card">
          </div>
        </div>
      </main>
    </>
  )
}