import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProduct from '../../CustomHok/useProduct';
import Product from '../Product/Product';
import './Products.css'

import { FiArrowRightCircle } from 'react-icons/fi';
const Products = () => {
      const [products , setProduct] = useProduct()
      const navigate = useNavigate()

      const items = products.slice(0 , 6)
     
      return (
            <div className="container">
                  <h3 className='text-center my-5 primary-text'>OUR INVENTORY ITEMS</h3>
                  <div className="products-section ">
                        {
                              items.map(product => <Product
                              key={product._id}
                              product={product}
                              
                              >



                              </Product>)
                        }
                  </div>
                  <div className='text-end my-3'>
                  <button onClick={() => navigate('/manageItem')} className='primary-btn'>All Manage Item <FiArrowRightCircle className='mx-1'></FiArrowRightCircle></button>
                  </div>
            </div>
      );
};

export default Products;