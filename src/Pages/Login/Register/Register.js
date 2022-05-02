import React from 'react';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
      const navigate = useNavigate()
      const loginHundeler = () =>{
            navigate('/login')
      }
      return (
            <div className="register-section">
                  <div className="container">
                        <div className="row">
                              <div className="col-lg-7">
                              <div className="login-from">
                                          <div>
                                                <h3 className='text-center'>Create Account</h3>
                                                <form>
                                                      <div className="input-grup">
                                                            <input type="text" name="name" id="" />
                                                            <br />
                                                            <input type="email" name="email" id="" />
                                                            <br />
                                                            <input type="password" name="password" id="" /><br />
                                                            <input type="password" name="confromPassword" id="" />
                                                            <br />
                                                            <div>
                                                                  <input type="checkbox" name="chack" id="" />
                                                                  <label htmlFor="">Accept Gym Center Terms and Conditions</label>
                                                            </div>
                                                            <input type="submit" value="Login" />
                                                           


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