import { React } from 'react'
import SignupBox from './SignupBox'
import { useAuth } from './authentication/Auth.js'
import {
  Redirect
} from "react-router-dom";

const SignupPage = () => {
    return (
        <div>
            <SignupBox />
        </div>
    )
}

export default SignupPage;