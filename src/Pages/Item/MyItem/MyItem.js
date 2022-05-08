import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import { AiFillDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const MyItem = () => {
      const [user] = useAuthState(auth)
      const [myOrders, setMyorder] = useState([])
      const navigate = useNavigate()
      useEffect(() => {
            const email = user.email
            const url = `https://secret-hamlet-95232.herokuapp.com/productOrder?email=${email}`

                  fetch(url)
                  .then(res => res.json())
                  .then(data => setMyorder(data))
      }, [])


      const deteleItem = (id) => {
           
            const delet = window.confirm('are you sure delete?')
            if(delet){
                  fetch(`https://secret-hamlet-95232.herokuapp.com/product/${id}`, {
                        method: 'DELETE',
                  })
                  .then(res => res.json())
                  .then(data => {
                        if(data.deletedCount > 0){
                              const remaing = myOrders.filter(product => product._id !== id)
                              setMyorder(remaing)
                              toast('Delete SuccessFul')
                        }
                  })

            }
           

      }
      return (
            <div className="manage-itemlist h-100 mt-3">
                  <div className="container">
                        <div className="all-item">
                              <h3 className='text-center'>My Added Item</h3>
                              <Table className='bg-light text-center' striped bordered hover responsive>
                                    <thead>
                                          <tr className=''>

                                                <th className='w-25'>Product Name</th>
                                                <th>Email ID</th>
                                                <th className='w-25'>Name</th>
                                                <th>Price</th>
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
                                                            <td>{myOrder.suplerName}</td>
                                                            <td>{myOrder.price}</td>
                                                            <td>{myOrder.quentity}</td>
                                                          
                                                            
                                                            <td><span onClick={() => deteleItem(myOrder._id)} className='deletbtn'><AiFillDelete></AiFillDelete></span></td>
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