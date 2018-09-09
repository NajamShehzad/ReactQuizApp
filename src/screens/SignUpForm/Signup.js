import React, { Component } from 'react';
import './Signup.css'




class SignUp extends Component {

    onSubmit(e) {
        e.preventDefault()
        console.log('Working');
    }
    click() {
        console.log('working');
    }

    render() {
        return (
            <div className="container text-center" >
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>
                            Full Name:
                            <input className="form-control" />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email:
                            <input className="form-control" />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                            <input type="password" className="form-control" />
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