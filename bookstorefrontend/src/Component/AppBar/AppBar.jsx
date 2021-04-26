import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import CssBaseline from "@material-ui/core/CssBaseline";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import logo from "../../Assets/education.svg";
import IconButton from "@material-ui/core/IconButton";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import './Appbar.scss'
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { Avatar } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router";



const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
    },
}))(Badge);

const useStyles = makeStyles((theme) => ({
    AppBar: {
        backgroundColor: "#A03037",
    },
    toolBar: {
        display: "flex",
        justifyContent: "space-around",
    },
    leftOptions: {
        display: "flex",
        width: "50%",
        justifyContent: "space-around",
        alignItems: "center",
    },
    rightOptions: {
        display: "flex",
        alignItems: "center",
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "#ffff",
        display: "flex",
        justifyContent: "flex-start",
        color: "gray",
        height: "40px",
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "70%",
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
    title: {
        display: "flex",
        flexDirection: "row",
        [theme.breakpoints.down("xs")]: {
            justifyContent: "flex-start",
        },
    },
    titleLogo: {
        marginRight: "10px",
    },
    titleName: {
        marginRight: "20px",
        cursor: 'pointer',
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        color: "gray",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    buttonSearch: {
        display: "none",
        [theme.breakpoints.down("xs")]: {
            display: "block",
            marginRight: "20px",
        },
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },

    cartButton: {
        display: "flex",
        flexDirection: "column",
        fontSize: "14px",
        color: "white",
    },
    name: {
        display: "flex",
        flexDirection: "column",
    },
}));

export default function Header(props) {
    const classes = useStyles();
    const [input, setInput] = React.useState();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [books, setBooks] = React.useState([]);
    const [data, setData] = React.useState(0);
    const [hide, setHide] = React.useState(false);
    
    const open = Boolean(anchorEl);
    let history = useHistory();
    const searchItemfunc = (e, data) => {
        console.log('input : ', input)

    };

    const HandleLogout = (event) => {
        localStorage.clear();
        history.push("/bookstore/login");
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar className={classes.AppBar}>
                <Toolbar className={classes.toolBar}>
                    <div className={classes.leftOptions}>
                        <div className={classes.title}>
                            <img className={classes.titleLogo} src={logo} />
                            <Typography className={classes.titleName} variant="h6"
                                onClick={(e) => history.push("/dashBoard")}>
                                Bookstore
                             </Typography>
                        </div>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{ input: classes.inputInput }}
                                className={classes.input}
                                value={input}
                                onChange={(e) => { setInput(e.target.value) }}
                                onChange={(e) => { searchItemfunc(e, data) }} />
                        </div>
                    </div>

                    <div className={classes.rightOptions}>
                        <SearchIcon className={classes.buttonSearch} />


                        <IconButton
                            className={classes.cartButton}
                            onClick={handleClick}
                            onMouseDown={handleClose}>

                            <PermIdentityIcon
                                className={classes.profileButton}
                                aria-controls="fade-menu"
                                aria-haspopup="true"
                                onClick={handleClick}>
                            </PermIdentityIcon>
                            
                            <Menu
                            
                                id="fade-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Fade}
                            >

                            
                                <MenuItem>
                                    <div className="avatarContainer">
                                        <Avatar className="avatarIcon" alt='profile' />
                                    </div>
                                </MenuItem>
                                <MenuItem>
                                    {localStorage.getItem("UserName")}
                                </MenuItem>
                                <MenuItem>
                                    {localStorage.getItem("Useremail")}
                                </MenuItem>
                                <MenuItem>
                                    WishList
                                </MenuItem>

                                <MenuItem>
                                    <Button
                                        onClick={HandleLogout}
                                        variant="contained" style={{
                                            fontWeight: 400,
                                            backgroundColor: "light-blue",
                                        }}
                                    >Sign Out
                                     </Button>
                                </MenuItem>
                            </Menu>
                            <span className={classes.name}>Profile</span>
                        </IconButton>
                        <IconButton
                            className={classes.cartButton}
                            onClick={(e) => history.push("/dashBoard/cart")}>
                            <StyledBadge badgeContent={props.totalCartItem} className={classes.badge}>
                                <ShoppingCartOutlinedIcon />
                            </StyledBadge>
                            <span>Cart</span>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}