import React, {Component} from 'react';
import { Route, Redirect} from 'react-router-dom'
import AuthenticationUtils from './authentication.utils'

class AuthenticatedRoute extends Component{
    render(){
        if(AuthenticationUtils.isUserLoggedIn()){
            return <Route {...this.props}/>
        }else{
            return <Redirect to = '/login'/>
        }
    }
}

export default AuthenticatedRoute;