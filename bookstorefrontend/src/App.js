import './App.css';
import Dash from './Component/SignInDashboard/Dash'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Header from './Component/Header/Header'

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Switch>
          <Redirect path="/" to="/bookstore/login" exact />
          <Route path="/bookstore" component={Dash}/>
          <Route path="/dashBoard" component={Header}/>
          
          </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;
