import React from "react";
import Button from "react-bootstrap/Button";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from '@material-ui/core/styles';

import './SignUp.scss'
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin:'3px',
            width: '35ch',
        },
    },

}));

export default function SignUp(props) {
    const classes = useStyles();
    const [name, setName] = React.useState();
    const [nameFlag, setNameFlag] = React.useState();
    const [nameError, setNameError] = React.useState("");
    const [email, setEmail] = React.useState();
    const [emailFlag, setEmailFlag] = React.useState(false);
    const [emailError, setEmailError] = React.useState("");
    const [password, setPassword] = React.useState();
    const [passwordFlag, setPasswordFlag] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState("");
    const [mobile, setMobile] = React.useState();
    const [mobileFlag, setMobileFlag] = React.useState(false);
    const [mobileError, setMobileError] = React.useState("");

    const makeInitial = () => {
        setNameFlag(false);
        setNameError("");
        setEmailFlag(false);
        setEmailError("");
        setMobileFlag(false);
        setMobileError("");
        setPasswordFlag(false);
        setPasswordError("");
    };

    const patternCheck = () => {
        makeInitial();
        const namePattern = /[a-zA-Z][a-zA-Z ]*/;
        const emailPattern = /[a-zA-Z0-9._]+[@]{1}[a-zA-Z120-9]*[.]{1}[a-zA-Z]*$/;
        const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/;
        const mobilePattern = /^[6-9]{1}[0-9]{9}$/;
        let isError = false;
        if (!namePattern.test(name)) {
            setNameFlag(true);
            setNameError("Name is Not Proper");
            isError = true;
        }
        if (!mobilePattern.test(mobile)) {
            setMobileFlag(true);
            setMobileError("Mobile Number is Not Proper");
            isError = true;
        }
        if (!emailPattern.test(email)) {
            setEmailFlag(true);
            setEmailError("Email is Not Proper");
            isError = true;
        }
        if (!passwordPattern.test(password)) {
            setPasswordFlag(true);
            setPasswordError("Please Enter Valid Password");
            isError = true;
        }
        return isError;
    };

    const handleSignupSubmit = () => {
        if (patternCheck()) {
            console.log("Error Occured");
        } else {
            console.log("Success");
            const data = {
                fullname: name,
                email: email,
                password: password,
                mobile: mobile,
            };
            console.log(data);
        }
    };
    return (
        <div className="container-signUp">
            <div className="SignUp">

                <div className="active-contentSignUp">
                    <br></br>
                    <div className={classes.root}>
                    <TextField 
                        id="outlined-secondary-name"
                        variant="outlined"
                        color="secondary"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        error={nameFlag}
                        helperText={nameError}
                        label="Full Name"
                    />
                    </div>
                    <br />
                    <div className={classes.root}>
                    <TextField className={classes.top}
                        id="outlined-secondary-email"
                        variant="outlined"
                        color="secondary"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={emailFlag}
                        helperText={emailError}
                        label="Email"
                    />
                    </div>
                    <br />
                    <div className={classes.root}>
                    <TextField
                        id="outlined-secondary-password"
                        variant="outlined"
                        color="secondary"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={passwordFlag}
                        helperText={passwordError}
                        label="Password"
                        type="password"
                    />
                    </div>
                    <br />
                    <div className={classes.root}>
                    <TextField
                        id="outlined-secondary-mobile"
                        variant="outlined"
                        color="secondary"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        error={mobileFlag}
                        helperText={mobileError}
                        label="Mobile"
                        type="number"
                    />
                    </div>
                    <Button
                        className="btn"
                        onClick={handleSignupSubmit}
                    >
                        Sign up
              </Button>
                </div>

            </div>
        </div>
    );
}