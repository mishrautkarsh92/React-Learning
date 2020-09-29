import React, { Component } from 'react';
import AuthenticationUtil from './authentication.utils';

class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginSuccess: false,
            loginMessage: ''
        }
        this.handleUserChange = this.handleUserChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleUserChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    };

    loginClicked() {
        // if (this.state.username === 'in28minutes' && this.state.password === 'dummy') {
        //     AuthenticationUtil.registerSuccessfulLogin(this.state.username, this.state.password);
        //     this.props.history.push(`/welcome/${this.state.username}`)
        // } else {
        //     this.setState({ hasLoginSuccess: false, loginMessage: 'Login Failed' })
        // }
        let username = this.state.username
        let password = this.state.password
        // AuthenticationUtil.executeBasicAuthenticationService(username, password)
        //     .then(() => {
        //         AuthenticationUtil.registerSuccessfulLogin(username, password);
        //         this.props.history.push(`/welcome/${username}`)
        //     })
        //     .catch(
        //         () => {
        //             this.setState({ hasLoginSuccess: false, loginMessage: 'Login Failed' })
        //         }
        //     )

            AuthenticationUtil.executeJwtAuthenticationService(username, password)
            .then((response) => {
                AuthenticationUtil.registerSuccessfulLoginForJwt(username, response.data.token);
                this.props.history.push(`/welcome/${username}`)
            })
            .catch(
                () => {
                    this.setState({ hasLoginSuccess: false, loginMessage: 'Login Failed' })
                }
            )
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className='container'>
                    <label><b>User name</b></label><input type='text' name='username' value={this.state.username} onChange={this.handleUserChange} id='Uname' /><br /><br />
                    <label><b>Password</b></label> <input type='password' name='password' value={this.state.password} onChange={this.handleUserChange} id='Pass' /><br /><br />
                    <button className='btn btn-success' onClick={this.loginClicked}>Login</button><br /><br />
                    {!this.state.hasLoginSuccess && <span>{this.state.loginMessage}</span>}
                </div>
            </div>
        )
    }
}

export default LoginComponent;