import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import Header from './components/Header';
import MenuContainer from './containers/MenuContainer';
import {routes} from './utils/Routes';
import './assets/styles/App.css';



function App() {
  return (
      <Router>

        <Container fluid>

          <Row>
            <Col>
              <Header/>
            </Col>
          </Row>

          <Row>
            <Col>
              <MenuContainer />
            </Col>

            <Col>
              <Switch>
              {routes.map((route,i) => (
                (<Route
                  key={i}
                  exact path={route.path}
                  component={route.component}
                />)
              ))}
            </Switch>
            </Col>
          </Row>

        </Container>

      </Router>
  )
}

export default App;
