import React, { useContext, useEffect, useState } from 'react';
import logo from '../../../Images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt, faPlus, faShoppingBag, faThList, faUserPlus,faChartLine } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [ admin, setAdmin ] = useState(false);
    useEffect(()=>{
        fetch('https://web-repair-geek.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({email:loggedInUser.email})
        })
        .then( res => res.json())
        .then( data => setAdmin(data))

    },[])
    return (
        <div>
           <div className="sidebar">
            <Link to="/">
                <img src={logo} alt=""/>
            </Link>
            {
                !admin && <div style={{display: !admin ? "block" : "none"}}><NavLink to="/dashboard"><FontAwesomeIcon icon={faChartLine} /> Dashboard</NavLink>
                <NavLink to="/bookList"><FontAwesomeIcon icon={faShoppingBag} /> Book List</NavLink>
                <NavLink to="/review"><FontAwesomeIcon icon={faCommentAlt} /> Review</NavLink></div>
            }

            { admin && <div><NavLink to="/appointmentList"><FontAwesomeIcon icon={faShoppingBag} /> Appointment List</NavLink>
            <NavLink to="/addService"><FontAwesomeIcon icon={faPlus} /> Add Service</NavLink>
            <NavLink to="/makeAdmin"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</NavLink>
            <NavLink to="/manageServices"><FontAwesomeIcon icon={faThList} /> Manage Services</NavLink></div>}
        
            </div>
        </div>
    );
};

export default Sidebar;