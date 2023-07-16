import React, { useContext } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { AuthContext } from "../../providers/AuthProvider";

const SocialLogIn = () => {
    const {googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then( result => {
            console.log(result.user)
        })
        .catch(error => console.log(error))
    }
    return (
      <div className="mb-4">
        <div className="divider">OR</div>
        <div className="flex place-items-center justify-center gap-4">
          <button>
            {' '}
            <FaFacebook size={'3em'}></FaFacebook>
          </button>
          <button onClick={handleGoogleSignIn}>
            {' '}
            <FaGoogle size={'3em'}></FaGoogle>
          </button>
        </div>
      </div>
    );
};

export default SocialLogIn;