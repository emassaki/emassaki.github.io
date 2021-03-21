import React from 'react';
import { Route, Switch } from 'react-router';

import Provider from './_context/Provider';
import About from './pages/About';
import Skills from './pages/Skills';
import Home from './pages/Home';

import { GlobalStyles } from './styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Provider>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Provider>
    </>
  );
}

export default App;
