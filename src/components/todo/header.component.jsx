import React, { Component } from 'react';
import AuthenticationUtil from './authentication.utils';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationUtil.isUserLoggedIn();
        return (
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div><a href='https://www.in28minutes.com' className='navbar-brand'>In28minutes</a></div>
                    <ul className='navbar-nav'>
                        {isUserLoggedIn && <li><Link className='nav-link' to='/welcome/in28minutes'>Home</Link></li>}
                        {isUserLoggedIn && <li><Link className='nav-link' to='/todos'>Todos</Link></li>}
                    </ul>
                    <ul className='navbar-nav  navbar-collapse justify-content-end'>
                        {!isUserLoggedIn && <li><Link className='nav-link' to='/login'>Login</Link></li>}
                        {isUserLoggedIn && <li><Link className='nav-link' to='/logout' onClick={AuthenticationUtil.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);