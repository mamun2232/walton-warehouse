import React from 'react';
import { Card } from 'react-bootstrap';
import './Product.css'

const Product = ({ product }) => {
      const { name, img, price, quentity, description } = product
      return (
            <div className="">
                  <div className="product-section ">
                        {/* <div className="product-img">
                              <img src={img} alt="" />
                        </div>
                        <div className="product-info">
                              <h3>{name}</h3>
                              <h2>{price}</h2>
                              <p>{price}</p>
                        </div> */}
                        
                              <Card className=''>
                                    <div className='text-center'>
                                    <Card.Img variant="top" src={img} />
                                    </div>
                                    <Card.Body className='text-center'>
                                          <Card.Title>{name}</Card.Title>
                                          <h3>BDT {price}</h3>
                                          <Card.Text>
                                                {description}
                                          </Card.Text>
                                    </Card.Body>
                                    {/* <Card.Footer>
                                          <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer> */}
                              </Card>
                             
                            
                     

                  </div>
            </div>
      );
};

export default Product;