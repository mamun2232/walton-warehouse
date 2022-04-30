import React from 'react';
import useProduct from '../../CustomHok/useProduct';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
      const [products , setProduct] = useProduct()
      console.log(products);
      return (
            <div className="container">
                  <h3 className='text-center my-3'>Our Product</h3>
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