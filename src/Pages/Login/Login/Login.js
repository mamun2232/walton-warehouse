import { wait } from '@testing-library/user-event/dist/utils';
import React, { useRef } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate, useRoutes } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import logo from '../../../Picture/logo.png'
import './Login.css'
import Loading from '../../Utilitis/Loading/Loading';
import PageTitle from '../../Utilitis/PageTitle/PageTitle';
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
            const email = emailRef?.current?.value
            console.log(email);
            fetch('https://secret-hamlet-95232.herokuapp.com/login', {
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
      if(loading){
            return <Loading></Loading>
     
           }
      
      return (
            <div className="login-section my-4">
                   <PageTitle title='Login'></PageTitle>
                  <div className="container">
                        <div className="row">
                              <div className="col-lg-5">
                                    <div className="login-massage h-100 bg-white">
                                  
                                          <div className='text-center'>
                                          
                                                <h2 className='primary-text'>Hello, Friend</h2>
                                                <p className='read-text'>Enter parsinal Details and start Jurny with us</p>
                                                <button onClick={registerHundeler} className='primary-btn'>Register</button>
                                          </div>
                                    </div>
                              </div>
                              <div className="col-lg-7">
                                    <div className="login-from bg-white">
                                          <div>
                                                <h3 className='text-center my-5 primary-text'>Login to walton</h3>
                                                
                                                <form onSubmit={loginFromHundeler}>
                                                      <div className="input-grups">
                                                            <input placeholder='Email' ref={emailRef} className='input-shadow' type="email" name="email" id="" required />
                                                            <br />
                                                            <input placeholder='Password' ref={passwordRef} className='input-shadow' type="password" name="" id="" required />
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