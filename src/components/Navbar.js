import React from 'react'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import Cases from '../pages/Cases';
import Home from '../pages/Home';

export default function Navbar() 
{
    return (
        <Router>
            <div className = "navbar">                                
                <li><Link to = "/" className = "link">Home</Link></li>            
                <li><Link to = "/cases" className = "link">Cases</Link></li>
                                
                <Switch>
                    <Route path = '/' exact component = {Home}></Route>   
                    <Route path = '/cases' component = {Cases}></Route>                    
                </Switch>                
            </div>
        </Router>        
    )
}
