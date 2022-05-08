import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { FaBus } from 'react-icons/fa';
import { BsWallet2 } from 'react-icons/bs';
import './Delivary.css'

const Delivary = () => {
      return (
            <div className="delivary-section my-5">
                  <div className="container">
                        <div className="delevari text-center">
                              <div className="row">
                                    <div className="col-lg-4 col-sm-6">
                                          <div data-aos="flip-left"
                                                data-aos-easing="ease-out-cubic"
                                                data-aos-duration="2000" className="item h-100 border p-3 bg-white">
                                                <span ><FaBeer></FaBeer></span>
                                                <h5 className='my-2 primary-text'>WORLDWIDE DELIVERY</h5>
                                                <p className='read-text'>We work with the biggest delivery networks. It doesn't matter where in the world you are.
                                                </p>
                                          </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                          <div data-aos="flip-left"
                                                data-aos-easing="ease-out-cubic"
                                                data-aos-duration="2000" className="item border h-100 p-3 bg-white">
                                                <span><FaBus></FaBus></span>
                                                <h5 className='my-2 primary-text'>FREE SHIPPING</h5>
                                                <p className='read-text'>Stop wondering about shipping costs, what you see is what you pay.
                                                </p>
                                          </div>
                                    </div>
                                    <div className="col-lg-4">
                                          <div data-aos="flip-left"
                                                data-aos-easing="ease-out-cubic"
                                                data-aos-duration="2000" className="item border bg-white p-3">
                                                <span><BsWallet2></BsWallet2></span>
                                                <h5 className='my-2 primary-text'>MONEY BACK GUARANTEE</h5>
                                                <p className='read-text'>Got a problem with the product? Don't worry, we have a 30 day money back guarantee.</p>

                                          </div>

                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Delivary;