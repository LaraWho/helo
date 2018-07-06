import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/reducer';
 
class Auth extends Component {
    constructor(){
        super()

        this.state = {
            user_name: '',
            user_password: ''
        }
    }

    //2x handle change
    handleLogin = val => {
        this.setState({
            
        })
    }
    //login


    // function login() {
    //     let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env
    //     let redirectUri = encodeURIComponent(`http://localhost:4000/auth/callback`)
    //     window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`;
    // }

    //register
    register = (user) => {
        axios.post('/api/auth/register')
    }

    render() {
        return(
            <div>
                <button onClick={this.handleLogin}>Login</button>
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}

// export default Auth;

export default connect(null, {updateUser}) (Auth);