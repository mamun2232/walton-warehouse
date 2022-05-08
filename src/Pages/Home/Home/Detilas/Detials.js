import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, FormControl, InputGroup, Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './Detials.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdAdd } from 'react-icons/md';
import { FiArrowRightCircle } from 'react-icons/fi';
import {FiArrowLeftCircle } from 'react-icons/fi';
import PageTitle from '../../../Utilitis/PageTitle/PageTitle';

const Detials = () => {
      const { id } = useParams()
      const [product, setProduct] = useState([])
      const quentityRef = useRef(0)
      const navigate = useNavigate()


      useEffect(() => {
            fetch(`https://secret-hamlet-95232.herokuapp.com/product/${id}`)
                  .then(res => res.json())
                  .then(data => setProduct(data))

      }, [product])



      const delivetProduct = (id) => {
            const newQuentity = product.quentity - 1

            if (newQuentity > -1) {
                  fetch(`https://secret-hamlet-95232.herokuapp.com/product/${id}`, {
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

            if (addedQuentity > 0) {
                  const newQuentity = parseInt(product.quentity) + parseInt(addedQuentity)


                  fetch(`https://secret-hamlet-95232.herokuapp.com/products/${id}`, {
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
                  toast('please enter a positive value')
            }
      }

      const manageItemHendeler = () => {
            navigate('/manageItem')
      }

      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);




      return (
            <div className="detils-section my-3">
                   <PageTitle title='Details'></PageTitle>
                  <div className="container">
                        <div className="row">
                              <div className="col-lg-12">
                                    <div className="product-detilas">

                                          <Card className=' bg-white'>
                                                {/* <Card.Header as="h5">Our {product.name} Featured</Card.Header> */}
                                                <Card.Body className=''>
                                                      <div className='description'>
                                                            <div data-aos="fade-up"
     data-aos-duration="3000" className="details-img">
                                                                  <img className='img-fluid' src={product.img} alt="" />
                                                            </div>
                                                            <div  data-aos="zoom-in-left" className='detail-info'>
                                                                  <h4 className='primary-text'>{product.name}</h4>



                                                                  <div className='mt-4'>
                                                                        <h5 className='primary-text'>Product Future:</h5>
                                                                        <Card.Text>
                                                                              <p className='read-text'>{product.model}</p>
                                                                              <p className='read-text'>{product.ram}</p>
                                                                              <p className='read-text'>{product.hdd}</p>
                                                                              <p className='read-text'>{product.display}</p>

                                                                              <p className='read-text'>Quentity: {product.quentity}</p>
                                                                              <p className='read-text'> {product.prosesor}</p>
                                                                              <p className='read-text'> {product.description}</p>

                                                                              <p className='read-text'>Sypler Name: {product.suplerName}</p>


                                                                        </Card.Text>
                                                                  </div>
                                                                  <div className=' mt-5'>
                                                                        <button onClick={() => delivetProduct(id)} className='primary-btn '>Delived <AiOutlineShoppingCart className='ms-1'></AiOutlineShoppingCart></button>

                                                                        <Button className='primary-btn mx-3 mb-1' onClick={handleShow}>
                                                                              Add Quentity <MdAdd className='mx-1'></MdAdd>
                                                                        </Button>


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
                              <div className="col-lg-4 my-4">


                                    <Modal show={show} onHide={handleClose}>
                                          <Modal.Header closeButton>
                                                <Modal.Title>Please Add Quentity</Modal.Title>
                                          </Modal.Header>
                                          <Modal.Body> <form onSubmit={addQuentiy}>
                                                <div className="input-grup">
                                                      <input placeholder='Enter quentity' ref={quentityRef} className='form-control quentity-filed' type="number" name="number" id="" />
                                                      <input className='primary-btn my-2' type="submit" value="Add Quentity" />
                                                </div>
                                          </form></Modal.Body>

                                    </Modal>


                              </div>
                        </div>
                  </div>
                  <div className="container">
                        <div className='d-flex justify-content-between details-btn'>
                              <span className=''>
                              <button onClick={()=> navigate('/')} className='primary-btn text-start'><FiArrowLeftCircle className='mx-1'></FiArrowLeftCircle> Back </button>
                              </span>

                              <span className=''>
                              <button onClick={manageItemHendeler} className='primary-btn '>Go ManageITem <FiArrowRightCircle className='mx-1'></FiArrowRightCircle></button>
                              </span>
                              
                              
                        </div>
                        <div className='text-start'>

                        </div>


                  </div>

            </div>


      );
};

export default Detials;