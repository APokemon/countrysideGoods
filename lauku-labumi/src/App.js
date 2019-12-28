import React , {Component} from 'react';
import Navigation from './app/component/Navigation';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect
} from "react-router-dom";
import Home from './app/pages/Home'
import Login from './app/pages/Login'
import Products from './app/pages/Products'
import About from './app/pages/About'
import Contacts from './app/pages/Contacts'
import NotFound from './app/pages/NotFound'

class App extends Component { 
  constructor (){
    super();
    this.state = {
      language:'En'
    }  
  }
  
  render(){
    return ( 
    <div>
      <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/products" component={Products}/>
          <Route path="/about" component={About}/>
          <Route path="/contacts" component={Contacts}/>
          <Redirect exact from="/" to="/home" />
            <Route component={NotFound} />


        </Switch>
      
      </BrowserRouter>
    </div>
  )
  }
}

export default App;
