import React, {useState } from 'react'
import { Link } from 'react-router-dom'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom';
import {GoogleButton} from 'react-google-button'

function SignUp() {
    // const {dispatch, googleLoading, loginWithGoogleRedirect} = useAuthContext()
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [error, setError] = useState("")
    const [signUpBtnLoading, setSignUpBtnLoading] = useState("")
    const navigate = useNavigate()

    return (
    <div>
        <div className="flex flex-col w-full border-opacity-50">
            <div className="grid card rounded-box place-items-center mt-40">
                <h1 className='text-6xl my-12'>Messenger</h1>
                <div className="form-control w-full max-w-xs">
                    <input type="text" placeholder="Email address" className="input input-bordered w-full max-w-xs" onChange={(event) => setUserEmail(event.target.value)}/>
                    <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs my-3" onChange={(event) => setUserPassword(event.target.value)}/>
                </div>
                {/* <button className={`btn btn-wide btn-primary my-2 ${signUpBtnLoading}`} onClick={signUpWithEmail}>SIGN UP</button> */}
                <button className='btn btn-primary btn-wide my-2'>Sign Up</button>
                {error && <p className='text-red-400'>{error}</p>}
                <Link to="/sign-in" className='text-secondary mt-4'>Login instead</Link>
            </div>
        </div>
    </div>
  )
}

export default SignUp