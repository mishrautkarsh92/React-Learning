import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class LogoutComponent extends Component {
    render() {
        return (
            <>
                <h1>You are logged out</h1>
                <div className='container'>
                    Thank you for using our Application. Visit <Link to='/login'>again</Link>
                </div>
            </>
        )
    }
}

export default LogoutComponent;