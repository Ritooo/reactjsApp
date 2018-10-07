import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <div>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
            </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
