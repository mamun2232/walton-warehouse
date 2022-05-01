import React, { useEffect, useState } from 'react';
import { Button, Card, FormControl, InputGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Detials.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Detials = () => {
      const { id } = useParams()
      const [product, setProduct] = useState([])


      useEffect(() => {
            fetch(`http://localhost:5000/product/${id}`)
                  .then(res => res.json())
                  .then(data => setProduct(data))

      }, [product])

      // remove quentity 

      const delivetProduct = (id) => {
            const newQuentity = product.quentity - 1

            if (newQuentity > -1) {
                  fetch(`http://localhost:5000/product/${id}`, {
                        method: 'PUT',
                        body: JSON.stringify({
                              newQuentity
                        }),
                        headers: {
                              'Content-type': 'application/json; charset=UTF-8',
                        },
                  })
                        .then((response) => response.json())
                        .then((json) => console.log(json));

            }
            else {
                  toast('Sorry No Quentity. Please Add quentity')

            }

      }






      return (
            <div className="detils-section my-3 bg-light">
                  <div className="container">
                        <div className="row">
                              <div className="col-lg-7">
                                    <div className="product-detilas">

                                          <Card className=' bg-light'>
                                                <Card.Header as="h5">Our {product.name} Featured</Card.Header>
                                                <Card.Body className=''>
                                                      <div className='d-flex'>
                                                            <div className="details-img">
                                                                  <img src={product.img} alt="" />
                                                            </div>
                                                            <div className='ms-3 mt-5'>
                                                                  <Card.Title>{product.name}</Card.Title>
                                                                  <p>{product.description}</p>
                                                                  <Card.Text>
                                                                        <p>Price: BDT{product.price}</p>
                                                                        <p>Quentity: {product.quentity}</p>

                                                                        <p>Sypler Name: {product.suplerName}</p>

                                                                  </Card.Text>
                                                                  <div className=' mt-5'>
                                                                        <Button onClick={() => delivetProduct(id)} ovariant="primary">Delived</Button>
                                                                  </div>
                                                            </div>



                                                      </div>
                                                      {/* <div className='text-center my-2'>
                                                            <Button variant="primary">Delived</Button>
                                                      </div> */}



                                                </Card.Body>
                                          </Card>
                                    </div>



                              </div>
                              <div className="col-lg-5">
                                    <div className="quentity-add-section">
                                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ullam?</p>

                                          <form onSubmit={addQuentiy}>
                                                <div className="input-grup">
                                                <input className='form-control quentity-filed' type="number" name="number" id="" />
                                                <input className='btn btn-primary my-2' type="submit" value="Add Quentity" />
                                                </div>
                                          </form>

                                    </div>
                              </div>
                        </div>
                        <div className='text-end'>
                              <button className='btn btn-primary '>Go All Item</button>
                        </div>
                  </div>

            </div>
      );
};

export default Detials;