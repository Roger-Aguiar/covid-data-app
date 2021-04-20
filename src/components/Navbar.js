import React from 'react'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import Confirmed from '../pages/Confirmed';
import Death from '../pages/Death';
import Recovered from '../pages/Recovered';
import Home from '../pages/Home';

export default function Navbar() 
{
    return (
        <Router>
            <div className = "navbar">                                
                <li><Link to = "/" className = "link">Home</Link></li>            
                <li><Link to = "/confirmed" className = "link">Confirmed</Link></li>
                <li><Link to = "/death" className = "link">Death</Link></li>
                <li><Link to = "/recovered" className = "link">Recovered</Link></li>
                
                <Switch>
                    <Route path = '/' exact component = {Home}></Route>   
                    <Route path = '/confirmed' component = {Confirmed}></Route>
                    <Route path = '/death' component = {Death}></Route>
                    <Route path = '/recovered' component = {Recovered}></Route>
                </Switch>                
            </div>
        </Router>        
    )
}
