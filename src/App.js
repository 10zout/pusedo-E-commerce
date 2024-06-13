import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={ProductList} />
                {/* Add more routes here */}
            </Switch>
        </Router>
    );
};

export default App;
