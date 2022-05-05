import React from 'react';
import useProduct from '../../CustomHok/useProduct';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
      const [products , setProduct] = useProduct()
     
      return (
            <div className="container">
                  <h3 className='text-center my-3'>Our Inventory Items</h3>
                  <div className="products-section">
                        {
                              products.map(product => <Product
                              key={product._id}
                              product={product}
                              
                              >



                              </Product>)
                        }
                  </div>
            </div>
      );
};

export default Products;