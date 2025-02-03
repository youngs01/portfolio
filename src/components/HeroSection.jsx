import React  from 'react'
import Typed  from 'typed.js'

import HeroImage  from '../assets/svg/hero-img.svg';

const HeroSection = () => {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Full Stack java developer.'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    
    <section className='row  py-5 gap-3 gap-md-0' aria-label='who is shamroz khan'>
      <div className="col-12 col-md-7 d-flex align-items-start justify-content-center flex-column ">
        <h1 className='fw-bold text-h-white fs-60 '> I Am <span className='text-blue'>Shamroz Khan</span></h1>
        <h2 className='fw-bold  text-h-white fs-60 '>A  <span className='text-blue' ref={el}></span> </h2>
      </div>
      <div className="col-12 col-md-5 banner-img d-flex justify-content-end">
        <img src={HeroImage} alt="Vector - a developer sits and have an background of different languages" />
      </div>
    </section>
  )
}

export default HeroSection