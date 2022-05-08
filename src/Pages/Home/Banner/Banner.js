import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css'


const Banner = () => {
      const navigate = useNavigate()
      return (
            <div className="banner-section">
                  <div className="container">
                        <div className="banner-title">
                              <div className="row">
                                    <div data-aos="fade-right" className="col-lg-6 ">
                                          <h1 className='title'>WALTON MY BRAND</h1>
                                          <p className='my-3 title-text'>Walton air conditioners can help to make your body cool and mind fresh. It can cool down the temperature of your home by drawing out. 
                                          </p>
                                          <button onClick={() => navigate('/blog')} className='primary-btn '>Read More</button>
                                    </div>
                              </div>

                        </div>
                  </div>
            </div>
      );
};

export default Banner;