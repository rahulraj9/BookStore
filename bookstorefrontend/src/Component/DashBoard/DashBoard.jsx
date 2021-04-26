import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "../AppBar/AppBar";
import Books from "../DisplayBook/DisplayBook";
import { Switch, Route } from "react-router-dom";
import Footer from '../Footer/footer'
import Cart from "../Cart/Cart"
import ProtectedRoutes from "../protectedRoutes/protectedRoutes"
import PlacedOrder from '../OrderPlaced/orderPlaced'
import services from '../../Services/bookService'

const service = new services()



const useStyles = makeStyles((theme) => ({
    dashboardMain: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
    },

}));

export default function Dashboard(props) {
    const classes = useStyles();
    const [show, setShow] = React.useState(false);
    const [cartBooks, setCartBooks] = React.useState([]);
    const [orderPlaced, setOrderPlaced] = React.useState([]);
    // const[quantity,setQuantity ]=React.useState();

    const nextPath = (e, path) => {
        e.stopPropagation();
        props.history.push(path);
    };

    React.useEffect(() => {
        allCartItem();
    }, []);

    const allCartItem = () => {

        service.getCartBook().then((data) => {
            
            const dataArray = data.data.data
            const dataShow = []
            console.log("Sucessfull loaded cart book", dataArray)
            dataArray.map((data) => {
                if (data._id !== null) {
                    dataShow.push(data);
                }
            })
            console.log('getcart : ', dataArray);
            console.log('dataShow : ', dataShow)
            setCartBooks(dataShow);
        }).catch((error) => {
            console.log("error", error)
        })
    };
    return (
        <div className={classes.dashboardMain}>
            <AppBar
                totalCartItem={cartBooks.length}
                nextPath={nextPath}
                setShow={setShow} />
          
                <Route path="/dashboard" exact> 
                    <Books cartBooks={cartBooks} allCartItem={allCartItem} />
                 </Route>
                <ProtectedRoutes path="/dashboard/cart" exact>
                    <Cart
                        cartBooks={cartBooks}
                        allCartItem={allCartItem}
                        nextPath={nextPath}
                        setOrderPlaced={setOrderPlaced}
                    />
                </ProtectedRoutes>
                <ProtectedRoutes path="/dashboard/orderPlaced" exact>
                    <PlacedOrder orderPlaced={orderPlaced} nextPath={nextPath} />
                </ProtectedRoutes>
          
            <Footer />

        </div>
    );


}