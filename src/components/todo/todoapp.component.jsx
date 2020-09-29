import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthenticatedRoute from './authenticated-route'
import LoginComponent from './login.component';
import TodosComponent from './todo.component';
import ErrorComponent from './error.component';
import HeaderComponent from './header.component';
import FooterComponent from './footer.component';
import LogoutComponent from './logout.component';
import WelcomeComponent from './welcome.component';
import TodoUpdateComponent from './todoupdate.component';

class TodoApp extends Component {
    render() {
        return (
            <div className='todo-app'>
                <Router>
                    <HeaderComponent />
                    <Switch>
                        <Route exact path='/' component={LoginComponent} />
                        <Route path='/login' component={LoginComponent} />
                        <AuthenticatedRoute path='/logout' component={LogoutComponent} />
                        <AuthenticatedRoute path='/welcome/:name' component={WelcomeComponent} />
                        <AuthenticatedRoute path='/todos/:id' component={TodoUpdateComponent} />
                        <AuthenticatedRoute path='/todos' component={TodosComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                    <FooterComponent />
                </Router>
            </div>
        )
    }
}

export default TodoApp;