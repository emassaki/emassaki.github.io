import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Provider from './_context/Provider';
import About from './pages/about';
import Home from './pages/Home';
import { GlobalStyles } from './styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Provider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Provider>
    </>
  );
}

export default App;
