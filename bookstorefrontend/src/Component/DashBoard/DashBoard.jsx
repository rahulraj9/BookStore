import React, { Component, Profiler } from "react";
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


    const nextPath = (e, path) => {
        e.stopPropagation();
        props.history.push(path);
    };

    React.useEffect(() => {
        allCartItem();
    }, []);

    const allCartItem = () => {

        service.getCartBook().then((data) => {

            // setCartBooks(data.data.data)

            // console.log("setcartbook", setCartBooks)
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

    const profilerCallBack=(id, phase, actualTime, baseTime, startTime, commitTime)=>{
        console.log(`id is ${id}
        phase is ${phase}
        actual time is ${actualTime}
        base time is ${baseTime}
        start time is ${startTime}
        commit time is ${commitTime}`);

    }
    return (
        <div className={classes.dashboardMain}>
            <Profiler id="AppBar" onRender={profilerCallBack}>
                <AppBar
                    totalCartItem={cartBooks.length}
                    nextPath={nextPath}
                    setShow={setShow} />
            </Profiler>

            <Profiler id="CartBook" onRender={profilerCallBack}>
            <Route path="/dashboard" exact>
                <Books cartBooks={cartBooks} allCartItem={allCartItem} />
            </Route>
            </Profiler>
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
// export default connect(null,{
//     cartBook: GetBook,
//   })(Dashboard);