import React, { Component } from 'react';
import './Signup.css';
import swal from 'sweetalert';




class SignUp extends Component {

    constructor() {
        super();
        this.state = {
            userName: '',
            email: '',
            password: '',
            userList: JSON.parse(localStorage.getItem('userList')) || [],
        }
        this.fieldChange = this.fieldChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        const { userList, userName, email, password } = this.state;
        let newUser = true;

        for (let i = 0; i < userList.length; i++) {
            if (userList[i].email === email) {
                newUser = false
                break;
            }
        }
        console.log(userList);

        if (newUser) {
            console.log('working');
            userList.push({ userName, email, password });
            localStorage.setItem('userList', JSON.stringify(userList));
            this.setState({ userList, userName: '', email: '', password: '' })
        }
        else {
            swal({
                title: "Email Already in Use!",
                icon: "warning",
            });
        }


        // console.log(userList);

    }
    click() {
        console.log('working');
    }
    fieldChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { email, password, userName } = this.state;
        return (
            <div className="container text-center" >
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>
                            Full Name:
                            <input
                                required
                                onChange={this.fieldChange}
                                value={userName}
                                name="userName"
                                className="form-control"
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email:
                            <input
                                required
                                onChange={this.fieldChange}
                                value={email}
                                name="email"
                                className="form-control"
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                            <input
                                required
                                onChange={this.fieldChange}
                                value={password}
                                name="password"
                                type="password"
                                className="form-control"
                            />
                        </label>
                    </div>
                    <div>
                        <button className="btn btn-primary">
                            SignUp
                    </button>
                    </div>
                    <span className="signup" onClick={() => this.props.signup(false)}>
                        Back To Signin Page
                    </span>
                </form>
            </div>
        )
    }
}


export default SignUp;