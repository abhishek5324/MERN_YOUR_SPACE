import './Login.css';
import {Button} from '@material-ui/core';
import {auth,provider} from '../components/firebase'
import React from 'react';
import { actionTypes } from './reducer';
import {useStateValue} from './StateProvider';

const Login =()=>{

    const [{user},dispatch] = useStateValue()

    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(res => {
            dispatch({
                type: actionTypes.SET_USER,
                user: res.user
            })

        })
        .catch(err => console.log(err))
    }
    return(
        <div className="login">
         {!user ? 
      
            <div className="login_container">
                <img src="https://www.gannett-cdn.com/-mm-/343bb644dbd690053ba62b0eebe78cdfd2ed6c90/c=0-28-747-450/local/-/media/USATODAY/USATODAY/2014/02/19//1392853819000-whatsapp.png?auto=webp&format=pjpg&width=1200" alt="whatsapp-img"/>
                <div className="login_text">
                    <h1> Sign in to Whatsapp</h1>
                </div>
                <Button onClick={signIn} >Sign in with Google</Button>
            </div>
            :
            <h1>Welcome {user.displayName}</h1>}
        </div>
    )
}
export default Login;