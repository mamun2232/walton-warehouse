import React from 'react';
import { Card } from 'react-bootstrap';
import './Product.css'

const Product = ({ product }) => {
      const { name, img, price, quentity, description } = product
      return (
            <div className="card p-3 bg-light">
                  <div className="product-section text-center">
                        <div className="product-img bg-white">
                              <img src={img} alt="" />
                        </div>
                        <div className="product-info my-2">
                              <h3>{name}</h3>
                              <h4 className='text-danger'>BDT {price}</h4>
                              <p>{description}</p>
                        </div>
                        <button className='btn btn-primary'>Update</button>
                        
                              {/* <Card className=''>
                                    <div className='text-center'>
                                    <Card.Img variant="top" src={img} />
                                    </div>
                                    <Card.Body className='text-center'>
                                          <h3>{name}</h3>
                                        
                                          <Card.Text>
                                                {description}
                                          </Card.Text>
                                          <h4>BDT {price}</h4>
                                    </Card.Body>
                                    {/* <Card.Footer>
                                          <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer> */}
                              {/* </Card> */}
                              
                            
                     

                  </div>
            </div>
      );
};

export default Product;