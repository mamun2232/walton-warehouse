import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Product.css'

import { FiArrowRightCircle } from 'react-icons/fi';

const Product = ({ product }) => {
      const navigate = useNavigate()
      const {_id , name, img, price, quentity, description } = product


      const productDetils = (id) =>{
            navigate(`/manageItem/${id}`)
           
      } 
      return (
            <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" className=" ">
                  <div>
                  {/* <div className="product-section text-center">
                        <div className="product-img bg-white">
                              <img src={img} alt="" />
                        </div>
                        <div className="product-info my-2 h-100">
                              <h3>{name}</h3>
                              <h4 className='text-danger'>BDT {price}</h4>
                              <p>{description}</p>
                        </div> */}
                       
                        
                              <Card className='h-100'>
                                    <div className='text-center picture'>
                                    <Card.Img variant="top" src={img} />
                                    </div>
                                    <Card.Body className='text-center info'>
                                          <h4 className='primary-text'>{name}</h4>
                                        
                                          <Card.Text>
                                          <h4 className='price'>BDT ${price}</h4>
                                                {description}
                                          </Card.Text>
                                          
                                    </Card.Body>
                                 
                                     <button onClick={() => productDetils(_id)} className='primary-btn'>Update <FiArrowRightCircle className='mx-2'></FiArrowRightCircle></button> 
                                  
                                  
                               </Card>
                              
                               
                     

                  </div>
                  
            </div>
      );
};

export default Product;