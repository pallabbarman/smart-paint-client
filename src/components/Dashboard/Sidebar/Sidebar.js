import {
    faClipboardList,
    faCommentAlt,
    faList,
    faPlus,
    faTasks,
    faUserShield,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/smart.svg';
import './Sidebar.css';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(setLoggedInUser);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email }),
        })
            .then((res) => res.json())
            .then((data) => setIsAdmin(data));
    }, [loggedInUser.email]);

    return (
        <div className="sidebar">
            <Link to="/">
                <img src={logo} className="img-fluid" alt="" />
            </Link>
            <br />
            {!isAdmin && (
                <div>
                    <Link to="/serviceList">
                        <FontAwesomeIcon icon={faTasks} /> Service List
                    </Link>
                    <Link to="/review">
                        <FontAwesomeIcon icon={faCommentAlt} /> Review
                    </Link>
                </div>
            )}
            {isAdmin && (
                <div>
                    <Link to="/orderList">
                        <FontAwesomeIcon icon={faList} /> Order List
                    </Link>
                    <Link to="/addService">
                        <FontAwesomeIcon icon={faPlus} /> Add Service
                    </Link>
                    <Link to="/addAdmin">
                        <FontAwesomeIcon icon={faUserShield} /> Make Admin
                    </Link>
                    <Link to="/manageServices">
                        <FontAwesomeIcon icon={faClipboardList} /> Manage Services
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
