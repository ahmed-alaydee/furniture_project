import React from 'react';
import "./navbar.css";

function Navpar() {
  return (
    <>
      <div className='container_nav-icon'>
        <div className='row align-items-center'>
          <div className='col-4 d-flex justify-content-start'>
            <div className='icon_social'>
              <a href="https://www.facebook.com/profile.php?id=100088076726526&locale=ar_AR" target='blank' rel='noopener noreferrer'>
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://x.com/home?lang=ar" target='blank' rel='noopener noreferrer'>
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&rlz=1C1CHBD_arEG1080EG1080&oq=g&gs_lcrp=EgZjaHJvbWUqDQgDEC4YxwEY0QMYgAQyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyDQgDEC4YxwEY0QMYgAQyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDI5MTZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8" target='blank' rel='noopener noreferrer'>
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
            </div>
          </div>

          <div className='col-4 text-center'>
            <div className='text_head'>
              <h1>Furniture</h1>
            </div>
          </div>

          <div className='col-4 d-flex justify-content-end'>
            <div className='icon_shop'>
              <i className="fa-solid fa-magnifying-glass"></i>
              <i className="fa-regular fa-heart heart_icon"></i>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navpar;

