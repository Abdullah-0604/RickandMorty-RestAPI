import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// components
import Header from "./components/headerComponents/header";
import Homepage from "./components/pages/homePage";
import Characterpage from "./components/pages/characterPage";
//styles
import "./styles.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/character" component={Characterpage} />
        </div>
      </Router>
    );
  }
}

export default App;
