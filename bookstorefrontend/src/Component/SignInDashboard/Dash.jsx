import React from "react";
import './Dash.scss'
import {Route, Switch} from 'react-router-dom'
import SignIn from '../SignIn/SignIn'
import Register from "../SignUp/SignUp"

export default function Login(props) {

    const [login, setlogin] = React.useState(true)
    const [Signup, setSignup] = React.useState(false)

    const nextPath = (path) => {
        props.history.push(path);
    };

    const loginSelect = () => {
        setlogin(true)
        setSignup(false)
        nextPath("/bookstore/login");
    };
    const SignupSelect = () => {
        setlogin(false)
        setSignup(true)
        nextPath("/bookstore/signup");
    };

    return (
        <div className="container">
            <div className="img-holder">
                <img className="image" alt="image" />
                <span className="text">ONLINE BOOK SHOPPING</span>
            </div>
            <div className="login">
                <br></br>
                <button className="lgn" text="Test" onClick={loginSelect} >
                    LOGIN
                </button>
                <button className="sgn" text="Test" onClick={SignupSelect} >
                    SIGN UP
                </button>
                <br></br>
                    <Switch>
                        <Route path="/bookstore/login" >
                            <SignIn/>
                        </Route>
                        <Route path="/bookstore/signup" >
                            <Register/>
                        </Route>
                    </Switch>
            </div>
        </div>
    );
}