import React from 'react';
import { Accordion } from 'react-bootstrap';
import warehouse from '../../../Picture/warehouse.jpg'

const Review = () => {
      return (
            <div className="review-section my-5">
                  <div className="container">
                        <div className="row">
                              <div className="col-lg-6">
                                    <h3 className='mb-3 primary-text'>WHAT CUSTOMER SAY</h3>
                                    <div className="question mb-4">
                                          <Accordion defaultActiveKey="0">
                                                <Accordion.Item eventKey="0">
                                                      <Accordion.Header>WHY BUY FROM US</Accordion.Header>
                                                      <Accordion.Body>
                                                          <p className='read-text'>
                                                          Walton is the No: 1 electronic brand in Bangladesh. This company tries its level best to satisfy its customers’ needs. Walton products are known for their durability and effectiveness.
                                                          </p>

                                                      </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                      <Accordion.Header>Our Budget-Friendly</Accordion.Header>
                                                      <Accordion.Body>

                                                            <p className='read-text'>Walton provides you with the best AC at a very reasonable price. Buying from Walton will not only ensure you the finest Ac but also the best facilities. So people from all the classes can buy it easily and enjoy the features</p>
                                                            
                                                      </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                      <Accordion.Header>Smart Technology</Accordion.Header>
                                                      <Accordion.Body>
                                                            <p className='read-text'>Walton air conditioners have the latest 150 smart technology that makes your AC compatible with both Android and iOS devices. So you can control your suit conditioner using just your phone!</p>
                                                            <p className='read-text'>Some of Walton’s air conditioners also come with unique voice control technology, which allows you to control your air conditioner using only your voice.</p>
                                                            <p className='read-text'> However, the most astonishing property of Walton AC is that it had self-diagnosis technology. This means that it flashes certain lights when there is a problem with the air conditioner unit. Using the manual you can easily find out why it is happening and fix the problem right away.</p>
                                                            

                                                            

                                                           
                                                      </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="3">
                                                      <Accordion.Header>Energy Saving</Accordion.Header>
                                                      <Accordion.Body>
                                                            <p className='read-text'> Walton guarantees the longevity of its products. So if you buy an AC from this company then you can be assured that you don’t need to run for fixing or changing the AC time and again. Their AC is much more efficient and convenient than the other regular AC.</p>
                                                            <p className='read-text'> Walton air conditioners have a super-saving eco mode, that allows you to save maximum energy. In ECO mode, it turns itself off and syncs with the fan to turn on periodically and keep the room cooled. With Walton AC, your electricity bills will be as low as 2.88 taka per hour!</p>
                                                           

                                                           
                                                      </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="4">
                                                      <Accordion.Header>Inverter AC</Accordion.Header>
                                                      <Accordion.Body>
                                                            <p className='read-text'> This is an AC that comes with energy-saving technology. It has an intelligent setting by which it controls the temperature of the room. When the room temperature goes above a limit or the set temperature then this AC starts cooling the room and when the room temperature goes below that certain temperature it automatically starts heating the room.</p>
                                                            <p className='read-text'> Inverter AC is expensive yet environment-friendly, smoother in operation, and also very much economical. As this AC is energy efficient, it consumes less electricity. It also doesn’t need any additional stabilizer and also is very quiet. Thus you can be saved from higher expenses and also enjoy its amazing features.</p>
                                                           

                                                           


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