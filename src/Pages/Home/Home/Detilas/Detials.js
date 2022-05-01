import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Detials.css'

const Detials = () => {
      const { id } = useParams()
      const [product, setProduct] = useState([])

      useEffect(() => {
            fetch(`http://localhost:5000/product/${id}`)
                  .then(res => res.json())
                  .then(data => setProduct(data))

      }, [])
      console.log(product);


      return (
            <div className="detils-section my-3">
                  <div className="container">
                        <div className="row">
                              <div className="col-lg-7">
                                    <div className="product-detilas">

                                          <Card className=''>
                                                <Card.Header as="h5">Our {product.name} Featured</Card.Header>
                                                <Card.Body className=''>
                                                      <div className='d-flex'>
                                                            <div className="details-img">
                                                                  <img src={product.img} alt="" />
                                                            </div>
                                                            <div>
                                                                  <Card.Title>{product.name}</Card.Title>
                                                                  <p>{product.description}</p>
                                                                  <Card.Text>
                                                                        <p>Price: BDT{product.price}</p>
                                                                        <p>Quentity: {product.quentity}</p>

                                                                  </Card.Text>
                                                            </div>

                                                      </div>


                                                      <Button variant="primary">Go somewhere</Button>
                                                </Card.Body>
                                          </Card>
                                    </div>



                              </div>
                              <div className="col-lg-5"></div>
                        </div>
                  </div>
            </div>
      );
};

export default Detials;