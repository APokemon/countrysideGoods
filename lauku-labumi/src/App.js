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
import Toolbar from './app/component/Toolbar/Toolbar';
import SideDrawer from './app/component/SideDrawer/SideDrawer';
import Backdrop from './app/component/Backdrop/Backdrop'





class App extends Component { 
  state = {
    sideDrawerOpen: false
  }
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };
 
backdropClickHandler = () => {
  this.setState({sideDrawerOpen: false})
  console.log("Ha")
}


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

 // <Navigation changeLanguage ={this.changeLanguage} language = {this.state.language} dictionary={specificDictionary}/>

  
  render(){
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    let specificDictionary = dictionary.lv
     if(this.state.language==="RU"){
       specificDictionary = dictionary.ru
    }else if(this.state.language==="EN"){
      specificDictionary = dictionary.en
    }
    return ( 
    <div style= {{height:'100px'}}>
      <BrowserRouter>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show = {this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop :"64px" }}>
          <p>
            PAPAPAPAPAPPAPA
          </p>
        </main>
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
