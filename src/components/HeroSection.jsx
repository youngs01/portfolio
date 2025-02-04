import React from 'react'
import Typed from 'typed.js'

import HeroImage from '../assets/svg/hero-img.svg';
import '../assets/components-style/HeroSection.css'

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
      
      <div className="col-12 col-md-7 d-flex align-items-start justify-content-center flex-column gap-4 ">
        
        <div className="">
          <h1 className='fw-bold text-h-white fs-60 '> I Am <span className='text-blue'>Shamroz Khan</span></h1>
          <h2 className='fw-bold  text-h-white fs-60 '>A  <span className='text-blue' ref={el}></span> </h2>
        </div>
        <div className="d-flex flex-column gap-2">
          <a target='_black'
           href='https://www.linkedin.com/in/shamrozkhan-developer/'
            className='fs-18 text-white text-decoration-none font-code'>
            
             <span className='text-variable'>const</span>
              <span className='text-variable-name'> linkedin </span> 
              = <span className='text-string'> "linkedin/shamrozkhan-developer/"</span>;
              
          </a>
          {/* <button></button> */}
        </div>

      </div>
      
      <div className="col-12 col-md-5 banner-img d-flex justify-content-end">
        <img src={HeroImage} alt="Vector - a developer sits and have an background of different languages" />
      </div>
   
    </section>
  )
}

export default HeroSection