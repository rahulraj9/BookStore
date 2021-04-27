import './App.css';
import Dash from './Component/SignInDashboard/Dash'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Dashboard from './Component/DashBoard/DashBoard'
// import Cart from './Component/Cart/Cart'

function App() {
  return (
    <div className="App">
  
      <BrowserRouter>
        <Switch>
          <Redirect path="/" to="/bookstore/login" exact />
          <Route path="/bookstore" component={Dash}/>
          <Route path="/dashBoard" component={Dashboard}/>
          
          </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;
