import React, { Component } from 'react';
import ReactHeader from './component/ReactHeader';
import SignIn from './screens/SigninForm/Signin';
import SignUp from './screens/SignUpForm/Signup';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            signup: false,
            login: false,
            userList: JSON.parse(localStorage.getItem('userList')),
            email: '',
            password: ''
        }
        this.signupPage = this.signupPage.bind(this);
        this.fieldChange = this.fieldChange.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
    }
    signupPage(bool) {
        this.setState({ signup: bool })
    }
    fieldChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    checkLogin(e) {
        e.preventDefault();
        console.log('Checking from main screen');
        
        
    }










    render() {
        const { signup, email, password } = this.state;
        return (
            <div className="App">
                <ReactHeader />
                {!signup ? <SignIn signup={this.signupPage} onSubmit={this.checkLogin} fieldChange={this.fieldChange} email={email} password={password} />
                    : <SignUp signup={this.signupPage} />}
            </div>
        );
    }
}

export default App;
