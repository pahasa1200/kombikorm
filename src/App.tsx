import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, Paper} from "@material-ui/core";
import Header from "./components/Header/Header";
import {BrowserRouter, Route, withRouter, Switch} from 'react-router-dom'
import {Redirect} from "react-router-dom";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='app-content'>
        <BrowserRouter>
            <Header />
            <div className='app-wrapper-content'>
                <Switch>
                    <Route exact path='/' render={() => <Redirect to={"/home"}/>}/>
                    <Route path='/home' render={() => <Home/>}/>
                    <Route path='/catalog' render={() => <Catalog/>}/>
                    <Route path='*' render={() => <div><h1>404 not found</h1></div>}/>
                </Switch>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
