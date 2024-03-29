import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddAdmin from './components/Admin/AddAdmin/AddAdmin';
import AddService from './components/Admin/AddService/AddService';
import ManageReview from './components/Admin/ManageReview/ManageReview';
import ManageService from './components/Admin/ManageService/ManageService';
import OrderList from './components/Admin/OrderList/OrderList';
import Book from './components/Customer/Book/Book';
import Booking from './components/Customer/Booking/Booking';
import Review from './components/Customer/Review/Review';
import ServiceList from './components/Customer/ServiceList/ServiceList';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState(false);
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
                    <PrivateRoute path="/orderList">
                        <OrderList />
                    </PrivateRoute>
                    <PrivateRoute path="/serviceList">
                        <ServiceList />
                    </PrivateRoute>
                    <PrivateRoute path="/manageServices">
                        <ManageService />
                    </PrivateRoute>
                    <PrivateRoute path="/manageReviews">
                        <ManageReview />
                    </PrivateRoute>
                    <PrivateRoute path="/booking">
                        <Booking />
                    </PrivateRoute>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
