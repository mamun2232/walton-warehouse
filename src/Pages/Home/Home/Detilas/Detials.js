import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, FormControl, InputGroup } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './Detials.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Detials = () => {
      const { id } = useParams()
      const [product, setProduct] = useState([])
      const quentityRef = useRef(0)
      const navigate = useNavigate()


      useEffect(() => {
            fetch(`http://localhost:5000/product/${id}`)
                  .then(res => res.json())
                  .then(data => setProduct(data))

      }, [product])



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
                        .then((json) => {
                              toast(json.success)
                        });

            }
            else {
                  toast('Sorry No Quentity. Please Add quentity')

            }

      }

      // remove quentity 
      const addQuentiy = event => {
            event.preventDefault()
            const addedQuentity = quentityRef.current.value

            if(addedQuentity > 0){
                  const newQuentity = parseInt(product.quentity) + parseInt(addedQuentity)


            fetch(`http://localhost:5000/products/${id}`, {
                  method: 'PUT',
                  body: JSON.stringify({
                        newQuentity
                  }),
                  headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                  },
            })
                  .then((response) => response.json())
                  .then((json) => {
                        toast(json.success)
                  });

            }
            else{
                  toast('please enter a positive value')
            }
      }

      const manageItemHendeler = () =>{
            navigate('/manageItem')
      }




      return (
            <div className="detils-section my-3 bg-light">
                  <div className="container">
                        <div className="row">
                              <div className="col-lg-8">
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
                                                                 
                                                                  
                                                                  
                                                                  <Card.Text>
                                                                  <p>{product.model}</p>
                                                                  <p>{product.ram}</p>
                                                                  <p>{product.hdd}</p>
                                                                  <p>{product.display}</p>
                                                                        
                                                                        <p>Quentity: {product.quentity}</p>
                                                                        <p> {product.prosesor}</p>
                                                                        <p> {product.description}</p>

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
                              <div className="col-lg-4">
                                    <div className="quentity-add-section">
                                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ullam?</p>

                                          <form onSubmit={addQuentiy}>
                                                <div className="input-grup">
                                                      <input ref={quentityRef} className='form-control quentity-filed' type="number" name="number" id="" />
                                                      <input className='btn btn-primary my-2' type="submit" value="Add Quentity" />
                                                </div>
                                          </form>

                                    </div>
                              </div>
                        </div>
                        <div className='text-end'>
                              <button onClick={manageItemHendeler} className='btn btn-primary '>Go ManageITem</button>
                        </div>
                  </div>

            </div>
      );
};

export default Detials;