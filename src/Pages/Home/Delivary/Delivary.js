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
                                    <div className="col-lg-4">
                                          <div className="item border p-3">
                                                <span ><FaBeer></FaBeer></span>
                                                <h5 className='my-2'>WORLDWIDE DELIVERY</h5>
                                                <p>We work with the biggest delivery networks. It doesn't matter where in the world you are.
                                                </p>
                                          </div>
                                    </div>
                                    <div className="col-lg-4">
                                          <div className="item border p-3">
                                                <span><FaBus></FaBus></span>
                                                <h5 className='my-2'>FREE SHIPPING</h5>
                                                <p >Stop wondering about shipping costs, what you see is what you pay.
                                                </p>
                                          </div>
                                    </div>
                                    <div className="col-lg-4">
                                          <div className="item border p-3">
                                          <span><BsWallet2></BsWallet2></span>
                                          <h5 className='my-2'>MONEY BACK GUARANTEE</h5>
                                          <p>Got a problem with the product? Don't worry, we have a 30 day money back guarantee.</p>

                                          </div>
                                         
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Delivary;