import React, { Component } from 'react';
import './Signin.css'




class SignIn extends Component {


    render() {
        const { email, password, fieldChange, onSubmit } = this.props;
        return (
            <div className="container text-center" >
                <form onSubmit={onSubmit}>
                    <div>
                        <label>
                            Email:
                            <input
                                required
                                name="email"
                                type="email"
                                value={email}
                                className="form-control"
                                onChange={fieldChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                            <input
                                required
                                name="password"
                                onChange={fieldChange}
                                value={password}
                                type="password"
                                className="form-control" />
                        </label>
                    </div>
                    <div>
                        <button className="btn btn-primary">
                            SignIn
                    </button>
                    </div>
                    <span className="signup" onClick={() => this.props.signup(true)}>
                        New here?...Signup
                    </span>
                </form>
            </div>
        )
    }
}


export default SignIn;