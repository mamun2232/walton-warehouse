import React from 'react';
import { Accordion } from 'react-bootstrap';
import warehouse from '../../../Picture/warehouse.jpg'

const Review = () => {
      return (
            <div className="review-section my-5">
                  <div className="container">
                        <div className="row">
                              <div className="col-lg-6">
                                    <h3 className='mb-3 primary-text'>WHY BUY FROM US</h3>
                                    <div className="question mb-4">
                                          <Accordion defaultActiveKey="0">
                                                <Accordion.Item eventKey="0">
                                                      <Accordion.Header>Accordion Item #1</Accordion.Header>
                                                      <Accordion.Body>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                                            est laborum.
                                                      </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                      <Accordion.Header>Accordion Item #2</Accordion.Header>
                                                      <Accordion.Body>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                                            est laborum.
                                                      </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                      <Accordion.Header>Accordion Item #2</Accordion.Header>
                                                      <Accordion.Body>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                                            est laborum.
                                                      </Accordion.Body>
                                                </Accordion.Item>
                                          </Accordion>
                                    </div>

                              </div>
                              <div className="col-lg-6">
                              <h3 className='mb-3 primary-text'>OUR WAREHOUSE</h3>
                                    <div className="factory">
                                          
                                          <img className='img-fluid' src={warehouse} alt="" />
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Review;