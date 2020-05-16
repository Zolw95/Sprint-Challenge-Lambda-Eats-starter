import React from 'react';
import { BrowserRouter as Router, Route, Link, useRouteMatch } from 'react-router-dom';
import Form from "./Form";
import '../Header.css';

export default function Header() {

{/* <Router>
    <Route exact path="/">
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Build Your Pizza</Link>
    </Route>
    <Route path='/pizza' exact component={Form}>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Build Your Pizza</Link>
    </Route>
</Router> */}

    return (
        <header>
            <div className="main-heading">
                <h1>Lambda Eats</h1>
            </div>
            <div className="main-links">
                <Router>
                    <Route exact path="/">
                        <Link to='/'>Home</Link>
                        <Link to='/pizza'>Build Your Pizza</Link>
                    </Route>
                    <Route path='/pizza' component={Form}>
                        <Link to='/'>Home</Link>
                        <Link to='/pizza'>Build Your Pizza</Link>
                    </Route>
                </Router>
            </div>
        </header>
    );
}