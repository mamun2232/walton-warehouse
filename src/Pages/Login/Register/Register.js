import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { async } from '@firebase/util';
import Loading from '../../Utilitis/Loading/Loading';
import PageTitle from '../../Utilitis/PageTitle/PageTitle';

const Register = () => {
      const navigate = useNavigate()
      const nameRef = useRef('')
      const emailRef = useRef('')
      const passwordRef = useRef('')
      const conframPassRef = useRef('')
      const [errors, setEroor] = useState('')
      const [user] = useAuthState(auth)
      const [agree, setAgree] = useState(false)



      // create user 
      const [
            createUserWithEmailAndPassword,
            users,
            loading,
            error,
      ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

      //     update usre 
      const [updateProfile, updating, error1] = useUpdateProfile(auth);

      // login hundeler 
      const loginHundeler = () => {
            navigate('/login')
      }

      const fromsubmitHendeler = async (event) => {
            event.preventDefault()
            const name = nameRef.current.value
            const email = emailRef.current.value
            const password = passwordRef.current.value
            const conframPass = conframPassRef.current.value
            console.log(name, email, password, conframPass);
            if (password !== conframPass) {
                  setEroor('Your Password Dont Match')
                  return

            }
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName: name })
            setEroor('')


      }
      let erorMassage;
      if (error) {
            erorMassage = <p className='text-danger'>{error?.message}</p>

      }

      if(loading){
            return <Loading></Loading>
      }
      if (user) {
            navigate('/')
            
            console.log(user);
      }
      return (
            <div className="register-section my-4">
                   <PageTitle title='Register'></PageTitle>
                  <div className="container">
                        <div className="row">
                              <div className="col-lg-7">
                                    <div className="login-from bg-white">
                                          <div>
                                                <h3 className='text-center my-5 primary-text'>Create Account</h3>
                                                <form onSubmit={fromsubmitHendeler}>
                                                      <div className="input-grups">
                                                            <input ref={nameRef} className='input-shadow' placeholder='Name' type="text" name="name" id="" required />
                                                            <br />
                                                            <input ref={emailRef} className='input-shadow' placeholder='Email' type="email" name="email" id="" required />
                                                            <br />
                                                            <input ref={passwordRef} className='input-shadow' placeholder='Password' type="password" name="password" id="" required /><br />
                                                            <input ref={conframPassRef} className='input-shadow' placeholder='Confrom Password' type="password" name="confromPassword" id="" required />
                                                            <br />
                                                            {erorMassage || <p className='text-danger'>{errors}</p>}

                                                            <div className='mt-2'>
                                                                  <input onClick={() => setAgree(!agree)} type="checkbox" name="chack" id="" />
                                                                  <label className={`px-2 ${agree ? '' : 'text-danger'}`} htmlFor="">Accept Walton Terms and Conditions</label>
                                                            </div>
                                                            <input disabled={!agree}  className='primary-btn' type="submit" value="Register" />



                                                      </div>
                                                </form>
                                                <SocialLogin></SocialLogin>
                                          </div>


                                    </div>
                              </div>
                              <div className="col-lg-5">
                                    <div className="login-massage h-100 bg-white">
                                          <div className='text-center'>
                                                <h3 className='primary-text'>Welcome Back!</h3>
                                                <p className='read-text'>To keep connected with us Please Login with personal Email</p>
                                                <button onClick={loginHundeler} className='primary-btn'>Login</button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Register;