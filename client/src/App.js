import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import About from "./pages/About"
import Portfolio from "./pages/Portfolio";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
