import React from 'react'
import {GoogleLogin} from "react-google-login";
const clientId= "33291904048-l3i042ba1oc4bjluc7phigdncvpv4h68.apps.googleusercontent.com"

function GLoginIn() {
    const onSuccess = (res) => {
        console.log("Login Success. Current User:", res);
    }
    const onFailure = (res) => {
        console.log("Login Failed. res:", res);
    }
    
  return (
    <div id="signinButton">
        <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
    </div>
  )
}

export default GLoginIn;
