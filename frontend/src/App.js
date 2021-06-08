import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Contact from "./components/Contact"; 
import Navbar from "./components/Navbar";
import Myspace from "./components/Myspace";
import Createblog from "./components/Createblog";
import Register from "./components/Register";
import View from "./components/View";
import { Switch, Route, Redirect} from "react-router-dom";
import axios from "./components/axios";
import Footer from "./components/Footer";

const App = () => {
 

    return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path ="/" component={Home}/>
      <Route exact path ="/about" component={About}/>
      <Route exact path ="/login" component={Login}/>
      <Route exact path ="/contact" component={Contact}/>
      <Route exact path ="/myspace" component={Myspace}/>
      <Route exact path ='/createblog' component={Createblog}/>
      <Route exact path ='/register' component={Register}/>
      <Route exact path="/blogs/:id" component={View} />
      <Redirect to="/"/>
    </Switch>
    <Footer />
  </>
    );
};
export default App; 