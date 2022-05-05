import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import './AddItem.css'

const AddItem = () => {
      const suplerNameRef = useRef('')
      const nameRef = useRef('')
      const priceRef = useRef('')
      const quentityRef = useRef('')
      const urlRef = useRef('')
      const descriptionRef = useRef('')
      const emailRef = useRef('')
      const [user] = useAuthState(auth)

      const addItemHundeler = (event) => {
            event.preventDefault()
            const suplerName = suplerNameRef.current.value
            const name = nameRef.current.value
            const price = priceRef.current.value
            const quentity = quentityRef.current.value
            const img = urlRef.current.value
            const email = emailRef.current.value
            const description = descriptionRef.current.value

            console.log(suplerName, name, price, quentity, img, description);

            fetch('http://localhost:5000/productOrder', {
                  method: 'POST',
                  body: JSON.stringify({
                   name , img , price , quentity , description , suplerName , email
                  }),
                  headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  },
                })
                  .then((response) => response.json())
                  .then((json) => {
                        toast(json.success)
                        event.target.reset();
                  });
      }


      return (
            <div className="add-item-section">
                  <div className="container">
                        <div className="add-item text-center">
                              <h3>Please Add a new Item</h3>
                              <form onSubmit={addItemHundeler} >
                                    <div className="addItem-grup">
                                          <input value={user.displayName} readOnly ref={suplerNameRef} className='input-shadow' placeholder='Supler Name' type="Text" name="" id="" required/>
                                          <br />
                                          <input ref={emailRef} className='input-shadow' placeholder='' value={user.email} readOnly type="email" name="" id="" required/>
                                          <br />
                                          <input ref={nameRef} className='input-shadow' placeholder='product Name' type="text" name="name" id=""  required />
                                          <br />
                                          <input ref={priceRef} className='input-shadow' placeholder='Price' type="number" name="number" id=""  required />
                                          <br />
                                          <input ref={quentityRef} className='input-shadow' placeholder='Quentity' type="number" name="" id=""  required /><br />
                                          <input ref={urlRef} className='input-shadow' placeholder='Picture Url' type="text" name="" id=""  required />
                                          <br />
                                          <textarea ref={descriptionRef} className='input-shadow' placeholder='Description' type="" name="" id=""  required />
                                          <br />

                                          {/* {erorMassage || <p className='text-danger'>{errors}</p>} */}


                                          <input className='submit-btn' type="submit" value="submit" />



                                    </div>
                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default AddItem;