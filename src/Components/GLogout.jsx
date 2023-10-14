import React from 'react'
import {GoogleLogout} from 'react-google-login';
const clientId= "33291904048-l3i042ba1oc4bjluc7phigdncvpv4h68.apps.googleusercontent.com"

function GLogout() {
    const onSuccess = (res) => {
        console.log("Login Success. Current User:", res);
    }
  return (
<div id="signOutButton">
        <GoogleLogout
            clientId={clientId}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess}
        />
    </div> 
     )
}



export default GLogout;