import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from './Components/Header/Header.js';
import HomePage from './Components/HomePage/HomePage.js';
import CreateTeam from './Components/CreateTeam/CreateTeam.js';
import Footer from './Components/Footer/Footer.js';
import { TeamContext, addTeams } from './teamContext';
import { useReducer } from 'react';

function App() {

  const [teams, setTeams] = useReducer(addTeams, [])

  return (
    <>
      <div className="app-container">
        <Header />
        <Container fluid className="content-container">
          <TeamContext.Provider value={{ teams, setTeams }}>
            <Router>
              <Switch>
                <Route path="/create-team" >
                  <CreateTeam />
                </Route>
                <Route path="/" >
                  <HomePage />
                </Route>
              </Switch>
            </Router>
          </TeamContext.Provider>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default App;
