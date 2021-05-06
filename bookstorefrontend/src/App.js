import './App.css';
import Dash from './Component/SignInDashboard/Dash'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Dashboard from './Component/DashBoard/DashBoard'
import store from'./Component/Redux/store'
import {Provider} from 'react-redux'

function App() {
  return (
    <div className="App">
    <Provider store={store}>   
       <BrowserRouter>
        <Switch>
          <Redirect path="/" to="/bookstore/login" exact />
          <Route path="/bookstore" component={Dash}/>
          <Route path="/dashBoard" component={Dashboard}/>
          </Switch>
          </BrowserRouter>
          </Provider>

    </div>
  );
}

export default App;
