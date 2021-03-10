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
import Contacts from "./components/Contacts/Contacts";
import Faq from "./components/FAQ/Faq";
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'

const client = new ApolloClient({
    uri: `http://localhost:3010/graphql`,
});

function App() {
  return (
    <div className='app-content'>
        <ApolloProvider client={client}>
        <BrowserRouter>
            <Header />
            <div className='app-wrapper-content'>
                <Switch>
                    <Route exact path='/' render={() => <Redirect to={"/home"}/>}/>
                    <Route path='/home' render={() => <Home/>}/>
                    <Route path='/catalog' render={() => <Catalog/>}/>
                    <Route path='/contacts' render={() => <Contacts/>}/>
                    <Route path='/faq'  render={() => <Faq/>}/>
                    <Route path='*' render={() => <div><h1>404 not found</h1></div>}/>
                </Switch>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </BrowserRouter>
        </ApolloProvider>
    </div>
  );
}

export default App;
