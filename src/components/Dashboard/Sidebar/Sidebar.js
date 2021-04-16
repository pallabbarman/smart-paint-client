import {
    faClipboardList,
    faCommentAlt,
    faList,
    faPlus,
    faShoppingCart,
    faTasks,
    faUserShield,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => (
    <div className="sidebar">
        <h3 className="text-center">Smart Paint</h3>
        <br />
        <Link to="/book">
            <FontAwesomeIcon icon={faShoppingCart} /> Book
        </Link>
        <Link to="/serviceList">
            <FontAwesomeIcon icon={faTasks} /> Service List
        </Link>
        <Link to="/review">
            <FontAwesomeIcon icon={faCommentAlt} /> Review
        </Link>
        <Link to="/orderList">
            <FontAwesomeIcon icon={faList} /> Order List
        </Link>
        <Link to="/addService">
            <FontAwesomeIcon icon={faPlus} /> Add Service
        </Link>
        <Link to="/admin">
            <FontAwesomeIcon icon={faUserShield} /> Make Admin
        </Link>
        <Link to="/manageServices">
            <FontAwesomeIcon icon={faClipboardList} /> Manage Services
        </Link>
    </div>
);

export default Sidebar;
