import bgHomeImg from '../../assets/svg/bg-home.svg'

import './styles.css'
export const BackgroundBody = () => {
  return (
    <div className="bg-home">
      <img src={bgHomeImg} className="svg-bg-home" alt="" onload="SVGInject(this)" />
    </div>
  )
}