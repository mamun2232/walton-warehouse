import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyItem = () => {
      const [user] = useAuthState(auth)
      const [myOrders, setMyorder] = useState([])
      useEffect(() => {
            const email = user.email
            const url = `http://localhost:5000/productOrder?email=${email}`

                  fetch(url)
                  .then(res => res.json())
                  .then(data => setMyorder(data))
      }, [])
      return (
            <div className="manage-itemlist mt-3">
                  <div className="container">
                        <div className="all-item">
                              <h3 className='text-center'>My Added Item</h3>
                              <Table className='bg-light text-center' striped bordered hover responsive>
                                    <thead>
                                          <tr className=''>

                                                <th className='w-25'>Product Name</th>
                                                <th>Email ID</th>
                                                <th className='w-25'>Name</th>
                                                <th>Quentity</th>

                                                <th>Action</th>
                                          </tr>
                                    </thead>
                                    <tbody>


                                          {
                                                myOrders.map(myOrder =>
                                                      <tr>

                                                            <td>{myOrder.name}</td>
                                                            <td>{myOrder.email}</td>
                                                            <td>{myOrder.name}</td>
                                                            <td>{myOrder.price}</td>
                                                            <td>{myOrder.quentity}</td>
                                                            <td>delect</td>
                                                      </tr>
                                                )

                                          }


                                    </tbody>
                              </Table>
                              <div className='text-end'>
                                    {/* <button onClick={newAddItemHundeler} className='btn btn-primary'>Add New Item</button> */}
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default MyItem;