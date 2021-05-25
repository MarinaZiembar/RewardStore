import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HeaderContainer from './containers/HeaderContainer';
import MenuContainer from './containers/MenuContainer';
import {routes} from './utils/Routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
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
                  path={route.path}
                  component={route.component}
                />)
              ))}
            </Switch>

          </div>

          
          <a href="#hero" className="up-button">
            <FontAwesomeIcon icon={faChevronUp} />
          </a>

        </div>

      </Router>
  )
}

export default App;
