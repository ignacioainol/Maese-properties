import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { NavBar } from './NavBar';
import { AboutScreen } from './screens/AboutScreen';
import { ArriendoScreen } from './screens/ArriendoScreen';
import { HomeScreen } from './screens/HomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import { VentaScreen } from './screens/VentaScreen';

export const AppRouter = () => {
    return (
        <Router>

            <NavBar />
            <div>
                <Switch>
                    <Route path="/" exact component={HomeScreen} />
                    <Route path="/about" exact component={AboutScreen} />
                    <Route path="/login" exact component={LoginScreen} />
                    <Route path="/venta" exact component={VentaScreen} />
                    <Route path="/arriendo" exact component={ArriendoScreen} />
                </Switch>
            </div>
        </Router>
    )
}
