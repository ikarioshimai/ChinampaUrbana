import React from 'react';
import {BrowserRouter, Redirect, Switch, Route} from 'react-router-dom'
import PageHome from './component/pages/PageHome'
import PageContacto from './component/pages/PageContacto'
import PageCurso from './component/pages/PageCurso'
import PageGaleria from './component/pages/PageGaleria'


function App() {
  return (
    <BrowserRouter>
        <div>
          <Redirect
            from="/"
            to="/pagehome" />
          <Switch>
            <Route
              exact
              path="/pageHome"
              render={() => <PageHome />} />
            <Route
              exact
              path="/pageGaleria"
              render={() => <PageGaleria />} />
            <Route
              exact
              path="/pageCurso"
              render={() => <PageCurso />} />

              <Route
              exact
              path="/pageContacto"
              render={() => <PageContacto />} />
           
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
