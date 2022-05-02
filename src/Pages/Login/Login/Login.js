import React from 'react';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
const Login = () => {
      const navigate = useNavigate()
      const registerHundeler = () =>{
            navigate('/register')
      }
      return (
            <div className="login-section">
                  <div className="container">
                        <div className="row">
                              <div className="col-lg-5">
                                    <div className="login-massage h-100 bg-light">
                                          <div className='text-center'>
                                          <h3>Hello , Friend</h3>
                                          <p>Enter parsinal Details and start Jurny with us</p>
                                          <button onClick={registerHundeler} className='btn btn-primary'>Signup</button>
                                          </div>
                                    </div>
                              </div>
                              <div className="col-lg-7">
                                    <div className="login-from">
                                          <div>
                                                <h3 className='text-center'>Login to walton</h3>
                                                <form>
                                                      <div className="input-grup">
                                                            <input type="email" name="email" id="" />
                                                            <br />
                                                            <input type="password" name="" id="" />
                                                            <br />
                                                            <input type="submit" value="Login" />
                                                            <p className='text-end'>forgate Password</p>


                                                      </div>
                                                </form>
                                                <SocialLogin></SocialLogin>
                                          </div>
                                          

                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Login;