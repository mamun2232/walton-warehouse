import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProduct from '../../CustomHok/useProduct';
import { AiFillDelete } from 'react-icons/ai';
import './ManageItem.css'
import { toast } from 'react-toastify';

const ManageItem = () => {
      const navigate = useNavigate()

      const newAddItemHundeler = () => {
            navigate('/addItem')
      }



      const [products, setProduct] = useProduct()
      // const [deletes , setDelete] = useState('')
      const deteleItem = (id) => {
           
            const delet = window.confirm('are you sure delete?')
            if(delet){
                  fetch(`http://localhost:5000/product/${id}`, {
                        method: 'DELETE',
                  })
                  .then(res => res.json())
                  .then(data => {
                        if(data.deletedCount > 0){
                              const remaing = products.filter(product => product._id !== id)
                              setProduct(remaing)
                              toast('Delete SuccessFul')
                        }
                  })

            }
           

      }
      console.log(products);
      return (
            <div className="manage-itemlist mt-3">
                  <div className="container">
                        <div className="all-item text-center">
                              <h3 className='text-center my-3'>All Manage Items</h3>
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
                                                            <td><span onClick={() => deteleItem(product._id)} className='deletbtn'><AiFillDelete></AiFillDelete></span></td>
                                                      </tr>
                                                )

                                          }


                                    </tbody>
                              </Table>
                              <div className='text-end'>
                                    <button onClick={newAddItemHundeler} className='primary-btn'>Add New Item</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ManageItem;