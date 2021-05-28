import Nav from "./components/Nav";
import State from "./components/Statewise";
import World from "./components/World";
import Temp from "./components/Main";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Nav title="Covid-App"></Nav>

        <Switch>
          <Route exact path="/">
            <Temp />
            <State />
          </Route>

          <Route exact path="/world">
            <World />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
