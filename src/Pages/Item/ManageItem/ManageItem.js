import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProduct from '../../CustomHok/useProduct';

const ManageItem = () => {
      const navigate = useNavigate()

      const newAddItemHundeler = () =>{
            navigate('/addItem')
      }

      const [products, setProduct] = useProduct()
      console.log(products);
      return (
            <div className="manage-itemlist mt-3">
                  <div className="container">
                        <div className="all-item">
                              <h3 className='text-center'>All Manage Item</h3>
                              <Table className='bg-light' striped bordered hover responsive>
                                    <thead>
                                          <tr className=''>

                                                <th className='w-25'>Product Name</th>
                                                <th className=''>Email ID</th>
                                                <th>Price</th>
                                                <th>Quentity</th>

                                                <th>Action</th>
                                          </tr>
                                    </thead>
                                    <tbody>


                                          {
                                                products.map(product =>
                                                      <tr>

                                                            <td>{product.name}</td>
                                                            <td>{product.email}</td>
                                                            <td>{product.price}</td>
                                                            <td>{product.quentity}</td>
                                                            <td>delect</td>
                                                      </tr>
                                                )

                                          }


                                    </tbody>
                              </Table>
                              <div className='text-end'>
                                    <button onClick={newAddItemHundeler} className='btn btn-primary'>Add New Item</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ManageItem;