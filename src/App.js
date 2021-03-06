import React, { Component } from 'react';
import ReactHeader from './component/ReactHeader';
import SignIn from './screens/SigninForm/Signin';
import SignUp from './screens/SignUpForm/Signup';
import QuizHeader from './screens/Header/Header';
import QuizMain from './screens/QuizScreen/QuizMain';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import swal from 'sweetalert';

class App extends Component {
    constructor() {
        super()
        this.state = {
            signup: false,
            user: '',
            userNumber: '',
            userList: JSON.parse(localStorage.getItem('userList')) || [],
            email: '',
            password: ''
        }
        this.signupPage = this.signupPage.bind(this);
        this.fieldChange = this.fieldChange.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
        this.updateList = this.updateList.bind(this);
        this.logout = this.logout.bind(this);
    }


    updateList(userList) {
        this.setState({ userList });
        swal("Good job!", "SignUp SucessFul!", "success");
        console.log(userList);

    }
    signupPage(bool) {
        this.setState({ signup: bool })
    }
    fieldChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    checkLogin(e) {
        e.preventDefault();
        const { userList, email, password } = this.state;
        let user, userNumber;
        for (let i = 0; i < userList.length; i++) {
            if (email === userList[i].email && password === userList[i].password) {
                console.log("Match Found");
                user = userList[i];
                userNumber = i;
                break;
            }
        }
        if (user) {
            this.setState({ user, userNumber })
        }
        else {
            swal({
                title: "User Name Or Password Is Not Correct!",
                icon: "warning",
            });
        }
        console.log(user);


    }
    logout() {
        this.setState({
            user: ''
        })
    }
    logoutButton() {
        return (
            <div>
                <h3>
                    {this.state.user.userName}
                </h3>
                <button onClick={this.logout} style={{ float: "right" }} className="btn btn-primary"><i className="fa fa-sign-out"></i> Logout</button>
            </div>
        )
    }








    render() {
        const { signup, email, password, user, userNumber } = this.state;
        return (
            <div >
                <div className="App">
                    <ReactHeader />
                    <div>
                        <QuizHeader />
                        {user && this.logoutButton()}
                    </div>
                </div>
                {user ? <div><QuizMain user={user} userNumber={userNumber} /></div> :
                    <div>
                        {!signup ?
                            <SignIn
                                signup={this.signupPage}
                                onSubmit={this.checkLogin}
                                fieldChange={this.fieldChange}
                                email={email} password={password}
                            />
                            : <SignUp
                                updateList={this.updateList}
                                signup={this.signupPage}
                            />}
                    </div>
                }

            </div>
        );
    }
}

export default App;
