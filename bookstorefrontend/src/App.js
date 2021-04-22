import './App.css';
import Dash from './Component/SignInDashboard/Dash'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

function App() {
  return (
    <div className="App">

       <BrowserRouter>
        <Switch>
          <Redirect path="/" to="/bookstore" exact />
          <Route path="/bookstore" component={Dash}/>
          </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;
