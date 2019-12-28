import React , {Component} from 'react';
import Navigation from './app/component/Navigation';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './app/pages/Home'
import Login from './app/pages/Login'
import Products from './app/pages/Products'
import About from './app/pages/About'
import Contacts from './app/pages/Contacts'
import NotFound from './app/pages/NotFound'
import {language as dictionary} from './language/language'

class App extends Component { 
  constructor (){
    super();
    this.state = {
      language:'LV'
    }  
    this.changeLanguage = this.changeLanguage.bind(this)
  }

  changeLanguage(lang){
    this.setState({
      language : lang
    })
  }


  
  render(){
    let specificDictionary = dictionary.lv
     if(this.state.language==="RU"){
       specificDictionary = dictionary.ru
    }else if(this.state.language==="EN"){
      specificDictionary = dictionary.en
    }
    return ( 
    <div>
      <BrowserRouter>
        <Navigation changeLanguage ={this.changeLanguage} language = {this.state.language} dictionary={specificDictionary}/>
        <Switch>
          <Route path="/home" render={(props) => <Home {...props}  dictionary = {specificDictionary}/>}/>
          <Route path="/login" render={(props) => <Login {...props}  dictionary = {specificDictionary}/>}/>
          <Route path="/products" render={(props) => <Products {...props}  dictionary = {specificDictionary}/>}/>
          <Route path="/about" render={(props) => <About {...props}  dictionary = {specificDictionary}/>}/>
          <Route path="/contacts" render={(props) => <Contacts {...props}  dictionary = {specificDictionary}/>}/>
          <Redirect exact from="/" to="/home" />
            <Route component={NotFound} />


        </Switch>
      
      </BrowserRouter>
    </div>
  )
  }
}

export default App;
