import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Header from './components/Header';
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';
import React, { Component } from 'react';

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" exact component={Homepage} />
        <Route path="/coins/:id" exact component={CoinPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;