import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Footer from './components/pages/Footer/Footer';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';

import './App.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/services" component={Services} />
                <Route path="/products" component={Products} />
                <Route path="/sign-up" component={SignUp} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;