import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
      const navigate = useNavigate()
      const nameRef = useRef('')
      const emailRef = useRef('')
      const passwordRef = useRef('')
      const conframPassRef = useRef('')

      // login hundeler 
      const loginHundeler = () => {
            navigate('/login')
      }

      const fromsubmitHendeler =(event) =>{
            event.preventDefault()
            const name = nameRef.current.value
            const email = emailRef.current.value
            const password = passwordRef.current.value
            const conframPass = conframPassRef.current.value
            console.log(name , email , password , conframPass);

      }
      return (
            <div className="register-section my-4">
                  <div className="container">
                        <div className="row">
                              <div className="col-lg-7">
                                    <div className="login-from">
                                          <div>
                                                <h3 className='text-center my-5'>Create Account</h3>
                                                <form onSubmit={fromsubmitHendeler}>
                                                      <div className="input-grups">
                                                            <input ref={nameRef} className='input-shadow' placeholder='Name' type="text" name="name" id="" />
                                                            <br />
                                                            <input ref={emailRef} className='input-shadow' placeholder='Email' type="email" name="email" id="" />
                                                            <br />
                                                            <input ref={passwordRef} className='input-shadow' placeholder='Password' type="password" name="password" id="" /><br />
                                                            <input ref={conframPassRef} className='input-shadow' placeholder='Confrom Password' type="password" name="confromPassword" id="" />
                                                            <br />
                                                            <div className='mt-2'>
                                                                  <input type="checkbox" name="chack" id="" />
                                                                  <label htmlFor="">Accept Gym Center Terms and Conditions</label>
                                                            </div>
                                                            <input className='submit-btn' type="submit" value="Login" />



                                                      </div>
                                                </form>
                                                <SocialLogin></SocialLogin>
                                          </div>


                                    </div>
                              </div>
                              <div className="col-lg-5">
                                    <div className="login-massage h-100 bg-light">
                                          <div className='text-center'>
                                                <h3>Welcome Back!</h3>
                                                <p>To keep connected with us Please Login with personal Email</p>
                                                <button onClick={loginHundeler} className='btn btn-primary'>Login</button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Register;