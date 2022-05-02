import React from 'react';
import './SocialLogin.css'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const SocialLogin = () => {
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
                        <FcGoogle className='icon'></FcGoogle>
                        <FaFacebook className='icon'></FaFacebook>
                        <FaGithub className='icon'></FaGithub>

                  </div>
            </div>
      );
};

export default SocialLogin;