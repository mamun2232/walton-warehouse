import React from 'react';
import { Table } from 'react-bootstrap';
import useProduct from '../../CustomHok/useProduct';

const ManageItem = () => {

      const [products, setProduct] = useProduct()
      return (
            <div className="manage-itemlist">
                  <div className="container">
                        <div className="all-item">
                              <h3>All Manage Item</h3>
                              <Table striped bordered hover>
                                    <thead>
                                          <tr className=''>

                                                <th className='w-25'>Product Name</th>
                                                <th>Email Id</th>
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
                                                            <td>{ }</td>
                                                            <td>{product.price}</td>
                                                            <td>{product.quentity}</td>
                                                            <td>delect</td>
                                                      </tr>
                                                )

                                          }


                                    </tbody>
                              </Table>
                              <div className='text-end'>
                                    <button className='btn btn-primary'>Add New Item</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ManageItem;