import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <Router>
          <Route path="/pizza" component={Form}>

          </Route>
        </Router>
      </div>
    </div>
  );
};
export default App;
