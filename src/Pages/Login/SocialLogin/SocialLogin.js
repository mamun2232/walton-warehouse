import React from 'react';
import './SocialLogin.css'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {
      const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
      const googleLogin = () =>{
            signInWithGoogle()

      }


      return (
            <div className="socail-login mt-3">
                  <div className="login-bottom">
                        <div className='login'></div>
                        <div>
                              <p>or</p>

                        </div>
                        <div className='login'></div>
                  </div>
                  <div className="social-icon mt-3">
                        <div onClick={googleLogin} className='google '>
                        
                        <FcGoogle className='icon'></FcGoogle>
                        <span className='read-text'>Continue With google</span>
                        </div>
                       
                        {/* <FaFacebook className='icon'></FaFacebook>
                        <FaGithub className='icon'></FaGithub> */}

                  </div>
            </div>
      );
};

export default SocialLogin;