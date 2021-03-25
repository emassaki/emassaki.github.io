import React from 'react';
import { Route, Switch } from 'react-router';

import Provider from './_context/Provider';
import About from './pages/About';
import Skills from './pages/Skills';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

import { GlobalStyles } from './styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Provider>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Provider>
    </>
  );
}

export default App;
