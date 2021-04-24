import React from "react";
import Button from "react-bootstrap/Button";
import Button1 from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import services from "../../Services/userServices"

import './signIn.scss'
import { useHistory } from "react-router";
const service = new services()
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '35ch',
        },
    },
}));

export default function Login(props) {

    const classes = useStyles();

    const [email, setemail] = React.useState();
    const [emailFlag, setemailFlag] = React.useState(false);
    const [emailError, setemailError] = React.useState("");
    const [password, setpassword] = React.useState();
    const [passwordFlag, setpasswordFlag] = React.useState(false);
    const [passwordError, setpasswordError] = React.useState("");

 
    let history = useHistory();
    const makeInitial = () => {
        setemailFlag(false);
        setemailError("");
        setpasswordFlag(false);
        setpasswordError("");
    };

    const pattern1Check = () => {
        makeInitial();
        const emailPattern = /[a-zA-Z0-9._]+[@]{1}[a-zA-Z120-9]*[.]{1}[a-zA-Z]*$/;
        // const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/;
        let isError = false;

        if (!emailPattern.test(email)) {
            setemailFlag(true);
            setemailError("Email is Not Proper");
            isError = true;
        }
        // if (!passwordPattern.test(password)) {
        //     setpasswordFlag(true);
        //     setpasswordError("Please Enter Valid Password");
        //     isError = true;
        // }
        return isError;
    };

    const handleLoginSubmit = () => {
        if (pattern1Check()) {
            console.log("Error Occured");
        } else {
           
            const data = {
                email: email,
                password: password,
            };
            service.login(data).then((response)=>{
                console.log(response)
                localStorage.setItem("Usertoken", response.data.data.token)
                localStorage.setItem("Useremail", response.data.data.email)
                localStorage.setItem("UserName", response.data.data.fullName)
                console.log("Success",response.data.data.fullName);
                setTimeout(() => {  history.push("/dashBoard"); }, 2000);
            })
            .catch((error)=>{
                console.log("error")
            })
        }
    };

    return (
        <div className="container-login">
            <div className="active-content"></div>
            <br />
            <div>
                <div>
                    <br></br>
                    <br></br>
                    <div className={classes.root}>
                        <TextField
                            id="outlined-email-input"
                            variant="outlined"
                            name="email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            error={emailFlag}
                            helperText={emailError}
                            label="Email"
                            fullWidth
                        />
                    </div>
                    <br></br>
                    <div className={classes.root}>
                        <TextField
                            id="outlined-pass-input"
                            name="password"
                            variant="outlined"
                            label="Password"
                            type="password"
                            fullWidth
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            error={passwordFlag}
                            helperText={passwordError}

                        />
                    </div>
                    <br></br>
                    <Button
                        className="btn"
                        text="test"
                        onClick={handleLoginSubmit}
                    >
                        Login
                  </Button>
                </div>
            </div>
            <br />
            <div className="flogin">
                <div className="OR">
                    <p>---------    OR    ---------</p>
                    <div className="flog">
                        <Button1 variant="contained" color="primary">
                            FaceBook
                         </Button1>
                         <Button1 variant="contained">Google</Button1>
                    </div>
                </div>
            </div>

        </div>

    );
}



