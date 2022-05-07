import { wait } from '@testing-library/user-event/dist/utils';
import React, { useRef } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate, useRoutes } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import logo from '../../../Picture/logo.png'
import './Login.css'
const Login = () => {
      const navigate = useNavigate()
      const emailRef = useRef('')
      const passwordRef = useRef('')
      const [user] = useAuthState(auth)
      let location = useLocation();

      let from = location.state?.from?.pathname || "/";
      const [
            signInWithEmailAndPassword,
            uses,
            loading,
            error,
      ] = useSignInWithEmailAndPassword(auth);
      const registerHundeler = () => {
            navigate('/register')
      }
      const loginFromHundeler = async (event) => {
            event.preventDefault()
            const email = emailRef.current.value
            const password = passwordRef.current.value
            await signInWithEmailAndPassword(email, password)
           




      }

      const [sendPasswordResetEmail, sending, errors] = useSendPasswordResetEmail(
            auth
      );

      //      porgate password 
      const forgatePassword = () => {
            const email = emailRef.current.value
            if (email) {
                  sendPasswordResetEmail(email)
                  toast('Send Email')


            }
            else {
                  toast('Please Provite Email')
            }

      }

      let erorMassage;
      if (error) {
            erorMassage = <p className='text-danger'>{error?.message}</p>

      }

      if (user) {
            const email = emailRef.current.value
            fetch('http://localhost:5000/login', {
                  method: 'POST',
                  body: JSON.stringify({
                        email: user.email

                  }),
                  headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                  },
            })
                  .then((response) => response.json())
                  .then((json) => {
                        localStorage.setItem('accessToken', json.accessToken)
                        console.log(json);
                        navigate(from, { replace: true });


                  });


      }
      return (
            <div className="login-section my-4">
                  <div className="container">
                        <div className="row">
                              <div className="col-lg-5">
                                    <div className="login-massage h-100 bg-light">
                                  
                                          <div className='text-center'>
                                          
                                                <h2>Hello, Friend</h2>
                                                <p>Enter parsinal Details and start Jurny with us</p>
                                                <button onClick={registerHundeler} className='primary-btn'>Signup</button>
                                          </div>
                                    </div>
                              </div>
                              <div className="col-lg-7">
                                    <div className="login-from">
                                          <div>
                                                <h3 className='text-center my-5'>Login to walton</h3>
                                                
                                                <form onSubmit={loginFromHundeler}>
                                                      <div className="input-grups">
                                                            <input ref={emailRef} className='input-shadow' type="email" name="email" id="" />
                                                            <br />
                                                            <input ref={passwordRef} className='input-shadow' type="password" name="" id="" />
                                                            <br />
                                                            <input className='submit-btn' type="submit" value="Login" />
                                                            {erorMassage}
                                                            <p onClick={forgatePassword} className='text-end mt-2 forgate'>forgate Password</p>


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