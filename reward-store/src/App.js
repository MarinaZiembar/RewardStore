import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HeaderContainer from './containers/HeaderContainer';
import MenuContainer from './containers/MenuContainer';
import {routes} from './utils/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/App.css';



function App() {
  return (
      <Router>

        <div className="App top">

          <HeaderContainer />

          <div className="bottom">

            <MenuContainer />

            <Switch>
              {routes.map((route,i) => (
                (<Route
                  key={i}
                  exact path={route.path}
                  component={route.component}
                />)
              ))}
            </Switch>

          </div>

        </div>

      </Router>
  )
}

export default App;
