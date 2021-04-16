import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddAdmin from './components/Admin/AddAdmin/AddAdmin';
import AddService from './components/Admin/AddService/AddService';
import Book from './components/Customer/Book/Book';
import Review from './components/Customer/Review/Review';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <PrivateRoute path="/dashboard">
                        <Dashboard />
                    </PrivateRoute>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <PrivateRoute path="/book/:_id">
                        <Book />
                    </PrivateRoute>
                    <PrivateRoute path="/review">
                        <Review />
                    </PrivateRoute>
                    <PrivateRoute path="/addService">
                        <AddService />
                    </PrivateRoute>
                    <PrivateRoute path="/addAdmin">
                        <AddAdmin />
                    </PrivateRoute>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
